pragma solidity ^0.4.25;

//token 초기값 이슈 아직X

contract GeneralMeeting{
  uint companyToken = 10000; //회사-주주
  address companyAddr = 0;
  //address contractCaller; //거래호출;
  address[] stockDataIndex;

  mapping (address => uint) addressTotalToken;

  struct stockData{
    uint token; //from 주주 개개인의 거래한 주식수
    address walletAddrFrom; //주주
    address walletAddrTo; //주주
    // uint transactionHash;   //tx.hash
    uint tradingPrice;
    uint timestamp;
  }

  stockData[] public stockDatas;

  //stockData 추가 ==> 거래 =
  function addStocks(address _walletAddrTo, uint _numTk) payable public { //token 연동
    if(addressTotalToken[msg.sender] != 0){
      stockDatas.push(stockData(_numTk, msg.sender, _walletAddrTo, msg.value, wnow));
      addressTotalToken[msg.sender] -= numTk;
      addressTotalToken[_walletAddrTo] += numTk;

      balance = msg.value;
      msg.sender.transfer(balance);//양도자 즉 주식을 파는 사람의 eth가 늘어야 함. 즉 msg.sender
      _walletAddrTo.balance -= msg.value;
      totalTrades++;
    }
    else console.log("From 측의 Token 값이 0입니다.")
  }

  //거래 내역 리턴
  function getProductStruct(uint _idx, address _walletAddr) public view returns (address, uint){
    if(stockDatas[_idx].walletAddr == _walletAddr){
      return(stockDatas[_idx].walletAddr, stockData[_idx].timestamp);
    }
  }

  function getTotalStuck(address _walletAddr) public view returns (uint){
    return addressTotalToken[_walletAddr];
  }
}
