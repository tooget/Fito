pragma solidity ^0.4.24;

contract GeneralMeeting {

    uint unissuedShareOfCompany = 1000000;  //총 발행가능 주식수
    uint balance;                   //ETH transfer 전송할 이더 수량 저장을 위한 임시 변수
    address ethTaker;               //Eth transfer 수령자 저장을 위한 임시 변수

    mapping (address => uint) ownedShares;

    struct tradingData {
        uint tradingShares;         //거래할 주식수
        uint tradingPrice;          //거래할 총액(ETH)
        uint timestamp;             //거래시간
        address sellerAddr;         //주식 양도자
        address buyerAddr;          //주식 양수자
        bool isTradingComplete;     //거래 및 ETH 송금 완료
    }

    tradingData[] public tradingDatas;

    //최초 회사 유통발행주식의 매개자 설정 및 초기화
    function initShares(address _corpAddr) public {
        address corpAddr = _corpAddr;
        ownedShares[corpAddr] = 10000;
        unissuedShareOfCompany -= 10000;
    }

    // -----------------------------------------------------------
    // EOA-CA-EOA ETH transfer를 위한 function
    // -----------------------------------------------------------

    //로깅을 위한 이벤트
    event Sended(
        uint256 value,
        uint256 balance
    );

    //Eth 수령자 저장
    function setEthTaker(address _ethTaker) private {
        ethTaker = _ethTaker;
    }

    //호출자가 CA에게 이더를 전송
    function sending() payable public {
        balance = msg.value;
        emit Sended(msg.value, balance);
    }

    //set함수를 통해 저장한 주소에 이더를 전송
    function transfer() payable public {
        ethTaker.transfer(msg.value);
    }
    // -----------------------------------------------------------

    //양수자가 거래를 요청하고 이더를 전송하는 함수
    //차후 요청-승인 구조로 분화해야 함.
    function addTradingData(address _sellerAddr, uint _tradingShares) payable public returns(uint) {
        require(ownedShares[_sellerAddr] >= _tradingShares && _tradingShares != 0);
        tradingData memory newTradingData = tradingData(_tradingShares, msg.value, now, _sellerAddr, msg.sender, false);
        uint tradingIdx = tradingDatas.push(newTradingData);
        setEthTaker(_sellerAddr);
        sending();
        ownedShares[_sellerAddr] -= _tradingShares;
        ownedShares[msg.sender] += _tradingShares;
        transfer();
        tradingDatas[tradingIdx-1].isTradingComplete = true;
        return tradingIdx-1;
    }

    // 총 거래 내역 수 리턴
    function getLengthOftradingDatas() public view returns (uint) {
        return tradingDatas.length;
    }

    // 거래 내역 리턴
    // function getProductStruct(uint _idx) public view returns (tradingData) {
    //     return tradingDatas[_idx];
    //     작성중
    // }

    //주주가 가진 주식수 리턴
    function getOwnedShares(address _ownerAddr) public view returns (uint){
        return ownedShares[_ownerAddr];
    }

    //회사 미발행 주식수
    function getUnissuedShareOfCompany() public view returns(uint) {
        return unissuedShareOfCompany;
    }

    //회사 유통 주식수
    function getIssuedShares() public view returns(uint) {
        // 작성중
    }

    //CA에 Eth를 transfer하기 위한 함수(백업) 
    // function sendEth() public payable {}
}
