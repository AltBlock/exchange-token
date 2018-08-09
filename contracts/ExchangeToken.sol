pragma solidity ^0.4.18;

import "../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract ExchangeToken is StandardToken {
    string public name = "Altblock Exchange Token";
    string public symbol = "AET";
    uint8 public decimals = 18;
    uint256 public constant INITIAL_SUPPLY = 900000000 * (10 ** uint256(decimals));

    /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */  
    constructor () public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
        emit Transfer(0x0, msg.sender, INITIAL_SUPPLY);
    }
}