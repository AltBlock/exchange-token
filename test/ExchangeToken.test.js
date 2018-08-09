require('babel-register')
require('babel-polyfill')

const BigNumber = web3.BigNumber;

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

const decodeLogs = require('./helpers/decodeLogs').default
const ExchangeToken = artifacts.require('ExchangeToken');


contract('Exchange Token', accounts => {
    let token;
    const creator = accounts[0]

    beforeEach(async function () {
        token = await ExchangeToken.new({ from: creator })
    })

    it('has a name', async function () {
        const name = await token.name()
        assert.equal(name, "Altblock Exchange Token")
    })

    it('has a symbol', async function () {
        const symbol = await token.symbol()
        assert.equal(symbol, 'AET')
    })

    it('has 18 decimals', async function () {
        const decimals = await token.decimals()
        assert(decimals.eq(18))
    })

    it('assigins the initial total supply to the creator', async function () {
        const totalSupply = await token.totalSupply()
        const creatorBalance = await token.balanceOf(creator)

        assert(creatorBalance.eq(totalSupply))

        const receipt = web3.eth.getTransactionReceipt(token.transactionHash);
        const logs = decodeLogs(receipt.logs, ExchangeToken, token.address)
        assert.equal(logs.length, 1)
        assert.equal(logs[0].event, 'Transfer')
        assert.equal(logs[0].args.from.valueOf(), 0x0)
        assert.equal(logs[0].args.to.valueOf(), creator)
        assert(logs[0].args.value.eq(totalSupply))
    })
})