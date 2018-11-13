pragma solidity ^0.4.24;

contract TestContract {

    uint totalNumberOfIssues = 10000; //총발행주식수
    uint totalTrades; //거래횟수
    uint totalShareholder; //주주수

    struct stockData{
        address walletAddr; //주주
        uint transactionHash;
        uint timestamp;
    }

    // stockData[] public trades;

    function getTotalNumberOfIssues() public view returns (uint) {
        return totalNumberOfIssues;
    }

    function transferEth(address _buyer, uint _eth) payable public {
        _buyer.transfer(_eth);
    }

}