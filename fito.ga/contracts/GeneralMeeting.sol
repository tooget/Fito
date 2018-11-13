pragma solidity ^0.4.24;

//token 초기값 이슈 아직X

contract GeneralMeeting {
    uint shareOfCompany = 10000; //회사-주주
    address ethTaker;

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
        ownedShares[_corpAddr] = shareOfCompany;
        shareOfCompany = 0;
    }

    function setEthTaker(address _ethTaker) private {
        ethTaker = _ethTaker;
    }

    //stockData 추가 ==> 양수자가 거래 요청
    function addTradingData(address _sellerAddr, uint _tradingShares) payable public returns(uint) {
        require(ownedShares[_sellerAddr] >= _tradingShares && _tradingShares != 0);
        tradingData memory newTradingData = tradingData(_tradingShares, msg.sender, _sellerAddr, msg.value, now, false);
        uint tradingIdx = tradingDatas.push(newTradingData);
        setEthTaker(_sellerAddr);
        ownedShares[msg.sender] -= _tradingShares;
        ownedShares[_sellerAddr] += _tradingShares;
        _sellerAddr.transfer(msg.value);
        tradingDatas[tradingIdx].isTradingComplete = true;
        return tradingIdx;
    }

    //총 거래 내역 수 리턴
    // function getLengthOftradingDatas() public view returns (uint) {
    //     return tradingDatas.length();
    // }

    //거래 내역 리턴
    // function getProductStruct(uint _idx) public view returns (tradingData[]) {
    //     return tradingDatas[_idx];
    // }

    function getTotalStuck(address _ownerAddr) public view returns (uint){
        return ownedShares[_ownerAddr];
    }
}
