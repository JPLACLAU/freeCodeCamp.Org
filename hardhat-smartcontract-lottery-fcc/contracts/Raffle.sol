//SPDX-lLicense-Identifier: MIT
pragma solidity ^0.8.17;

contract Raffle {
    uint256 private immutable i_entranceFee;

    constructor(uint256 entranceFee) {
        i_entranceFee = entranceFee;
    }

    function enterRaffle() {}

    function getEntranceFee() public view returns (uint256) {
        return i_entranceFee;
    }
}
