//SPDX-lLicense-Identifier: MIT
pragma solidity ^0.8.17;

error Raffle__NotEnoughETHEntered();

contract Raffle {
    uint256 private immutable i_entranceFee;
    address payable[] private s_player;

    constructor(uint256 entranceFee) {
        i_entranceFee = entranceFee;
    }

    function enterRaffle() {
        if (msg.value < i_entranceFee) {
            revert Raffle__NotEnoughETHEntered();
        }
    }

    function getEntranceFee() public view returns (uint256) {
        return i_entranceFee;
    }

    function getPlayer() public view returns (address) {
        return s_players[index];
    }
}
