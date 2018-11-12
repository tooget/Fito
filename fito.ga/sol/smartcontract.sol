pragma solidity ^0.4.25;

contract GeneralMeeting{

  uint totalTrades; //거래횟수
  uint totalShareholder//주주수
  address contractCaller; //거래호출자
  
  struct stockData{
    address walletAddr; //주주
    uint transactionHash;
    uint timestamp;
  }

  stockData[] public trades;

  constructor() public{
    contractCaller = msg.sender; //송신자(함수 주체)
  }

  function addStocks(address _walletAddr){
    stockData.push(stockData(_walletAddr, tx.hash , now));
    totalTrades++;
  }

  //거래 내역 리턴
  function getProductStruct(address _walletAdd) public view returns (address,){
    
  }
  
}
