pragma solidity ^0.4.25;

//token 초기값 이슈 아직X

contract GeneralMeeting{
  uint companyToken = 10000; //회사-주주
  address companyAddr = 0;
  /* uint totalTrades; //거래횟수
  uint totalShareholder//주주수 */
  //address contractCaller; //거래호출;
  address[] totalIndex; //index 조회방법
  
  struct total{
    address shareholder;
    uint totalToken;
  } //주주가 가진 최종 누적 주식수

  struct stockData{
    /* uint idx; */
    uint token; //from 주주 개개인의 거래한 주식수
    address walletAddrFrom; //주주
    address walletAddrTo; //주주
    /* uint transactionHash; */   //tx.hash
    uint tradingPrice;
    uint timestamp;
  }

  total[] public trades;
  stockData[] public trades;

  constructor() public{
    //contractCaller = msg.sender; //송신자(함수 주체)
  }

  //stockData 추가 ==> 거래 =
  function addStocks(address _walletAddrTo, uint _tradingPrice bool isCompany){ //token 연동
    //false = 주주-주주 true = 회사-주주
    if(isCompany == false) {
      //if() //만약 from 에 해당하는 주주가 가진 주식이 0이 아니라면
      stockData.push(stockData(totalTrades, tradingToken, msg.sender, _walletAddrTo, _tradingPrice, wnow));
      msg.sender.transfer(_walletAddrTo, msg.value);
    }
    else{
      stockData.push(stockData(totalTrades, tradingToken, msg.sender, _walletAddrTo, _tradingPrice, wnow));
      companyToken -= tradingToken;
    }
    totalTrades++;
  }

  //거래 내역 리턴
  function getProductStruct(uint _idx, address _walletAddr) public view returns (address, uint){
    if(stockData[_idx].walletAddr == _walletAddr){
      return(stockData[_idx].walletAddr, stockData[_idx].timestamp);
    }
  }
}
