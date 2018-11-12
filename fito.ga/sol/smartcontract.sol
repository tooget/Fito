pragma solidity ^0.4.25;

//token 초기값 이슈 아직X

contract GeneralMeeting{
  uint totalTrades; //거래횟수
  uint totalShareholder//주주수
  address contractCaller; //거래호출;

  struct stockData{
    uint idx;
    address walletAddr; //주주
    uint transactionHash;
    uint timestamp;
  }

  stockData[] public trades;

  constructor() public{
    contractCaller = msg.sender; //송신자(함수 주체)
  }

  //주식 거래
  function addStocks(address _walletAddr){ //token 연동
    stockData.push(stockData(totalTrades, _walletAddr, tx.hash, now));
    totalTrades++;
  }

  //거래 내역 리턴
  function getProductStruct(uint _idx, address _walletAddr) public view returns (address, uint){
    if(stockData[_idx].walletAddr == _walletAddr){
      return(stockData[_idx].walletAddr, stockData[_idx].timestamp);
    }
  }
}
