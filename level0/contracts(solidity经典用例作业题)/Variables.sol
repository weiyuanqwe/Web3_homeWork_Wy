// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Variables {
    string  public text = "Hello";
    uint256 public num = 123;

    function doSomeThing() public  {
         uint256 i = 456;

        uint256 timestamp = block.timestamp;
        address sender = msg.sender;


    }
}
