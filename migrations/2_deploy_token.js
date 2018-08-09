const ExchangeToken = artifacts.require('./ExchangeToken.sol');

module.exports = function (deployer, network, accounts) {
    return deployer
        .then(() => {
            return deployer.deploy(ExchangeToken);
        })
        .catch(error => {
            console.log(error)
        })
}
