pragma solidity ^0.4.25;

//token 초기값 이슈 아직X

contract GeneralMeeting{
  uint companyToken = 10000; //회사-주주
  address companyAddr = 0;
  uint totalTrades; //거래횟수
  uint totalShareholder//주주수
  //address contractCaller; //거래호출;

  struct stockData{
    uint idx;
    uint token; //
    address walletAddrFrom; //주주
    address walletAddrTo; //주주
    /* uint transactionHash; */   //tx.hash
    uint tradingPrice;
    uint timestamp;
  }

  stockData[] public trades;

  constructor() public{
    //contractCaller = msg.sender; //송신자(함수 주체)
  }

  //stockData 추가 ==> 거래 =
  function addStocks(address _walletAddrTo, uint _tradingPrice bool isCompany){ //token 연동
    //false = 주주-주주 true = 회사-주주
    if(isCompany == false) stockData.push(stockData(totalTrades, aaa, msg.sender, _walletAddrTo, _tradingPrice, wnow));
    else stockData.push(stockData(totalTrades, , msg.sender, _walletAddrTo, _tradingPrice, wnow));
    totalTrades++;
  }

  //거래 내역 리턴
  function getProductStruct(uint _idx, address _walletAddr) public view returns (address, uint){
    if(stockData[_idx].walletAddr == _walletAddr){
      return(stockData[_idx].walletAddr, stockData[_idx].timestamp);
    }
  }
}
