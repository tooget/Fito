pragma solidity ^0.4.24;

//token 초기값 이슈 아직X

contract GeneralMeeting {

    uint shareOfCompany = 10000; //회사-주주
    address ethTaker;
    uint balance;

    mapping (address => uint) ownedShares;

    struct tradingData {
        uint tradingShares; //from 주주 개개인의 거래한 주식수
        address sellerAddr; //주식 양도자
        address buyerAddr; //주식 양수자
        uint tradingPrice;
        uint timestamp;
        bool isTradingComplete;
    }

    tradingData[] public tradingDatas;

    function initShares(address _corpAddr) public {
        address corpAddr = _corpAddr;
        ownedShares[corpAddr] = shareOfCompany;
        shareOfCompany = 0;
    }

    // transfer를 위한 
    //로깅을 위한 이벤트
    event Sended(
        uint256 _value,
        uint256 _balance
    );

    // 
    function setEthTaker(address _ethTaker) private {
        ethTaker = _ethTaker;
    }

    //호출자가 CA에게 이더를 전송
    function sending() payable public {
        balance = msg.value;
        emit Sended(msg.value, balance);
    }

    //set함수를 통해 저장한 주소에 이더를 전송하는 함수
    function transfer() payable public {
        ethTaker.transfer(msg.value);
    }

    //stockData 추가 ==> 양수자가 거래 요청
    function addTradingData(address _sellerAddr, uint _tradingShares) payable public returns(uint) {
        require(ownedShares[_sellerAddr] >= _tradingShares && _tradingShares != 0);
        tradingData memory newTradingData = tradingData(_tradingShares, _sellerAddr, msg.sender, msg.value, now, false);
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
        return tradingDatas();
    }

    //거래 내역 리턴
    // function getProductStruct(uint _idx) public view returns (tradingData[]) {
    //     return tradingDatas[_idx];
    // }

    function getOwnedShares(address _ownerAddr) public view returns (uint){
        return ownedShares[_ownerAddr];
    }

    function getShareOfCompany() public view returns(uint) {
        return shareOfCompany;
    }

    function sendEth() public payable {}
}
