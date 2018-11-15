pragma solidity ^0.4.24;

contract FitoContract {

    bool corporateAddrIsSet = false;
    uint unissuedShareOfCompany = 1000000;  //총 발행가능 주식수
    uint issuedShareOfCompany;      //유통 발행 주식수
    uint balance;                   //ETH transfer 전송할 이더 수량 저장을 위한 임시 변수
    address corporateAddr;          //최초 발행시 거래 없이 주식을 갖게 되는 회사의 대표 주소
    address ethTaker;               //Eth transfer 수령자 저장을 위한 임시 변수

    struct tradingData {
        uint tradingShares;         //거래할 주식수
        uint tradingPrice;          //거래할 총액(ETH)
        uint timestamp;             //거래시간
        address sellerAddr;         //주식 양도자
        address buyerAddr;          //주식 양수자
        bool isTradingComplete;     //거래 및 ETH 송금 완료
    }

    struct shareOwnerList {
        address ownerAddr;
    }
    mapping (uint => uint) ownedShares;

    tradingData[] public tradingDatas;
    shareOwnerList[] public shareOwnerLists;

    // -----------------------------------------------------------
    //회사 주식 최초 발행시 필요한 functions
    // -----------------------------------------------------------
    //회사 발행주식 초기화를 위해 회사 대표 corporateAddr 설정
    function setCorporateAddr(address _corporateAddr) public {
        require( corporateAddrIsSet == false );
        initShareholderAddr(_corporateAddr);
        corporateAddr = _corporateAddr;
        corporateAddrIsSet = true;
    }

    //corporateAddr 검증 modifier
    modifier onlyCorporateAddr() {
        require(msg.sender != corporateAddr);
        _;
    }

    //최초 거래 전 회사 발행주식 값을 초기화(=주식발행)
    function initSharesOfCorporate(uint _issuingShares) public onlyCorporateAddr() {
        require( _issuingShares <= unissuedShareOfCompany);
        uint ownerIdx = initShareholderAddr(msg.sender);
        ownedShares[ownerIdx] = _issuingShares;
        unissuedShareOfCompany -= _issuingShares;
        issuedShareOfCompany = _issuingShares;
    }
    // -----------------------------------------------------------


    // -----------------------------------------------------------
    // EOA-CA-EOA ETH transfer를 위한 functions
    // -----------------------------------------------------------
    //로깅을 위한 이벤트
    event Sended (
        uint value,
        uint balance
    );

    //Eth 수령자 저장
    function setEthTaker(address _ethTaker) private {
        ethTaker = _ethTaker;
    }

    //호출자가 보낼 Eth 수량을 임시 저장
    function sending() private {
        balance = msg.value;
        emit Sended(msg.value, balance);
    }

    //set함수를 통해 저장한 주소에 이더를 전송
    function transfer() payable public {
        ethTaker.transfer(msg.value);
    }
    // -----------------------------------------------------------


    //메타마스크 최초 접속시 shareOwnerLists에 명시적 저장 후 주주 순번 리턴
    function initShareholderAddr(address _shareholderAddr) public returns(uint _newOwnerIdx) {
        bool ownerChecker = false;
        uint ownerExistIdx;
        uint ownerIdx = getLengthOfshareOwnerLists();

        for(uint i = 0; i < ownerIdx; i++) {
            if(shareOwnerLists[i].ownerAddr == _shareholderAddr) {
                ownerChecker = true;
                ownerExistIdx = i;
            }
        }
        if( ownerChecker == false ) {
            shareOwnerList memory newshareOwnerList = shareOwnerList(msg.sender);
            uint newOwnerIdx = shareOwnerLists.push(newshareOwnerList);
            ownedShares[newOwnerIdx] = 0;
            return newOwnerIdx;
        } else {
            return ownerExistIdx;
        }
    }

    // -----------------------------------------------------------
    //주식 거래 함수
    // -----------------------------------------------------------
    //양수자가 거래 요청시 이벤트 캐치
    event eventTradingDataAdded(
        uint tradingShares,         //거래할 주식수
        uint tradingPrice,          //거래할 총액(ETH)
        uint timestamp,             //거래시간
        address sellerAddr,         //주식 양도자
        address buyerAddr,          //주식 양수자
        bool isTradingComplete      //거래 및 ETH 송금 완료
    );

    // 주식 보유한 주주인지 체크하는 modifier
    modifier onlyShareOwner(address _Addr) {
        require( ownedShares[initShareholderAddr(_Addr)] > 0 );
        _;
    }

    //양수자가 거래를 요청하고 이더를 전송하는 함수
    //차후 요청-승인 구조로 분화해야 함.
    function addTradingData(address _sellerAddr, uint _tradingShares) public payable onlyShareOwner(_sellerAddr) {
        uint sellerIdx = initShareholderAddr(_sellerAddr);
        uint buyerIdx = initShareholderAddr(msg.sender);
        require(ownedShares[sellerIdx] >= _tradingShares && _tradingShares != 0);
        tradingData memory newTradingData = tradingData(_tradingShares, msg.value, now, _sellerAddr, msg.sender, false);
        uint tradingIdx = tradingDatas.push(newTradingData);
        setEthTaker(_sellerAddr);
        sending();
        ownedShares[sellerIdx] -= _tradingShares;
        ownedShares[buyerIdx] += _tradingShares;
        transfer();
        tradingDatas[tradingIdx-1].isTradingComplete = true;
        emit eventTradingDataAdded(
            tradingDatas[tradingIdx-1].tradingShares,
            tradingDatas[tradingIdx-1].tradingPrice,
            tradingDatas[tradingIdx-1].timestamp,
            tradingDatas[tradingIdx-1].sellerAddr,
            tradingDatas[tradingIdx-1].buyerAddr,
            tradingDatas[tradingIdx-1].isTradingComplete
        );
    }
    // -----------------------------------------------------------
    // 각종 조회용 함수
    // -----------------------------------------------------------
    //총 거래 내역 수 리턴
    function getLengthOftradingDatas() public view returns (uint) {
        return tradingDatas.length;
    }

    //총 등록 주주 수 리턴
    function getLengthOfshareOwnerLists() public view returns (uint) {
        return shareOwnerLists.length;
    }

    // // 거래 내역 리턴
    // function getProductStruct(uint _idx) public view returns (tradingData) {
    //     return tradingDatas[_idx];
    // }

    //주주가 가진 주식수 리턴
    function getOwnedShares(uint _ownerIndex) public view returns (uint){
        return ownedShares[_ownerIndex];
    }

    //회사 미발행 주식수
    function getUnissuedShareOfCompany() public view returns(uint) {
        return unissuedShareOfCompany;
    }

    //회사 유통 주식수
    function getIssuedShares() public view returns(uint) {
        return issuedShareOfCompany;
    }
    // -----------------------------------------------------------

    //CA에 Eth를 transfer하기 위한 함수(백업) 
    // function sendEth() public payable {}
}