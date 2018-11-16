pragma solidity ^0.4.24;

contract FitoContract {

    bool corporateAddrIsSet = false;        //회사 계정 및 유통주식소 초기화 여부
    uint[] tester;
    uint unissuedSharesOfCompany = 1000000;  //총 발행가능 주식수
    uint issuedSharesOfCompany;      //유통 발행 주식수
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
    function setCorporateAddr(address _userAddr) public {
        if( corporateAddrIsSet == false ) {
            initShareholderAddr(_userAddr);
            corporateAddr = _userAddr;
            corporateAddrIsSet = true;
        }
    }

    //corporateAddr 검증 modifier
    modifier onlyCorporateAddr(address _userAddr) {
        if(_userAddr == corporateAddr) {
            _;
        }
    }

    //최초 거래 전 회사 발행주식 값을 초기화(=주식발행)
    function initSharesOfCorporate(uint _issuingShares, address _userAddr) public onlyCorporateAddr(_userAddr) {
        if(_issuingShares <= unissuedSharesOfCompany) {
            uint ownerIdx = initShareholderAddr(_userAddr);
            ownedShares[ownerIdx] = _issuingShares;
            unissuedSharesOfCompany -= _issuingShares;
            issuedSharesOfCompany = _issuingShares;
        }
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
    function sending() public payable {
        balance = msg.value;
        emit Sended(msg.value, balance);
    }

    //set함수를 통해 저장한 주소에 이더를 전송
    function transfer() public payable {
        ethTaker.transfer(msg.value);
    }
    // -----------------------------------------------------------


    //메타마스크 최초 접속시 shareOwnerLists에 명시적 저장 후 주주 순번 리턴, 있다면 그 인덱스 리턴
    function initShareholderAddr(address _shareholderAddr) public returns(uint _ownerIdx) {
        uint ownerIdx;
        uint lengthOfOwnerLists = getLengthOfshareOwnerLists();
        for(uint i = 0; i < lengthOfOwnerLists; i++) {
            if( _shareholderAddr == shareOwnerLists[i].ownerAddr ) {
                ownerIdx = i;
                return ownerIdx;
            }
        }
        shareOwnerList memory newshareOwnerList = shareOwnerList(_shareholderAddr);
        ownerIdx = shareOwnerLists.push(newshareOwnerList);
        ownerIdx -= 1;
        ownedShares[ownerIdx] = 0;
        return ownerIdx;
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

    //양수자가 거래를 요청하고 이더를 전송하는 함수
    //차후 요청-승인 구조로 분화해야 함.
    function addTradingData(address _sellerAddr, uint _tradingShares) public payable {
        uint sellerIdx = initShareholderAddr(_sellerAddr);
        uint buyerIdx = initShareholderAddr(msg.sender);
        if(ownedShares[sellerIdx] >= _tradingShares && _tradingShares != 0){
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
    }
    // -----------------------------------------------------------
    // 각종 조회용 함수
    // -----------------------------------------------------------
    // [Protyotype1 : 주주명부 조회용] 총 등록 주주 수 리턴
    function getLengthOfshareOwnerLists() public view returns (uint) {
        return shareOwnerLists.length;
    }

    // [Protyotype1 : 주주명부 조회용] 주주 인덱스와 매칭된 주주 주소 리턴
    function getAddrOfshareOwner(uint _ownerIndex) public view returns (address) {
        return shareOwnerLists[_ownerIndex].ownerAddr;
    }

    // [Protyotype1 : 주주명부 조회용] 주주가 가진 주식수 리턴
    function getOwnedShares(uint _ownerIndex) public view returns (uint){
        return ownedShares[_ownerIndex];
    }

    // [Protyotype3 : 주주의 주식거래내용 조회용] 총 거래 내역 수 리턴
    function getLengthOftradingDatas() public view returns (uint) {
        return tradingDatas.length;
    }

    // [Protyotype3 : 주주의 주식거래내용 조회용] 거래 번호에 따른 거래 struct 리턴
    function getAspecificTradingData(uint _tradingIdx) public view returns (uint, uint, uint, address, address, bool) {
        return (
            tradingDatas[_tradingIdx].tradingShares,        //거래할 주식수
            tradingDatas[_tradingIdx].tradingPrice,         //거래할 총액(ETH)
            tradingDatas[_tradingIdx].timestamp,            //거래시간
            tradingDatas[_tradingIdx].sellerAddr,           //주식 양도자
            tradingDatas[_tradingIdx].buyerAddr,            //주식 양수자
            tradingDatas[_tradingIdx].isTradingComplete     //거래 및 ETH 송금 완료
        );
    }
    
    function getCorporateInfo() public view returns(bool, uint, uint, address) {
        return (
            corporateAddrIsSet,         //회사 주식발행 초기화 여부
            unissuedSharesOfCompany,    //회사 미발행 주식수
            issuedSharesOfCompany,      //회사 유통 주식수
            corporateAddr               //회사로 초기화한 계정
        );
    }

    function getTester() public view returns(uint[]) {
        return tester;
    }
    // -----------------------------------------------------------

}