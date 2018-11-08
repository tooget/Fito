pragma solidity ^0.4.24;

contract Adoption {

    //이더리움 Address의 배열
    address[16] public adopters;

    //Adopting a pet
    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15);
        // Tx를 일으킨 사람의 HashAddress를 petId와 매핑함.
        adopters[petId] = msg.sender;
        return petId;
    }

    // Retrieving the adopters
    function getAdopters() public view returns (address[16]) {
        return adopters;
    }
    
}