import { tokens, EVM_REVERT } from './helpers'

const Token = artifacts.require("./Token");

require('chai')
	.use(require('chai-as-promised'))
	.should()

contract('Token', ([deployer, receiver, exchange, sender]) => {
	const name = 'SMar Token'
	const symbol = 'SMAR'
	const decimals = '18'
	const totalSupply = tokens(1000000).toString()
	let token

	beforeEach(async () => {
		token = await Token.new()
	})


	describe('deployment', () => {
		it('track the name', async () => {
			const result  = await token.name()
			result.should.equal(name)
		})

		it('track the symbol', async () => {
			const result  = await token.symbol()
			result.should.equal(symbol)
		})

		it('track the decimals', async () => {
			const result  = await token.decimals()
			result.toString().should.equal(decimals)
		})

		it('track the totalSupply', async () => {
			const result  = await token.totalSupply()
			result.toString().should.equal(totalSupply.toString())
		})

		it('assigns the total supply to the deployer', async ()  => {
     		const result = await token.balanceOf(deployer)
     		result.toString().should.equal(totalSupply.toString())
   		})
	})

	describe('sending token', () => {
		let result
		let amount

		describe('success', async () => {
			beforeEach( async () => {
				amount = tokens(100)
				result = await token.transfer(receiver, amount, { from: deployer})
			})

			it('transfers token balance', async () => {
				let balanceOf
				balanceOf = await token.balanceOf(deployer)
				balanceOf.toString().should.equal(tokens(999900).toString())
				balanceOf = await token.balanceOf(receiver)
				balanceOf.toString().should.equal(tokens(100).toString())

			})

			it('emits a Transfer event', async () => {
				const log = result.logs[0]
				log.event.should.eq('Transfer')
				const event = log.args
				event.from.toString().should.equal(deployer, 'from is correct')
				event.to.toString().should.equal(receiver, 'to is correct')
				event.value.toString().should.equal(amount.toString(), 'value is correct')
			})
		})

		describe('failure', async () => {
			it('rejects insufficient balance', async() => {
				let invalidAmount
				invalidAmount = tokens(100000000000)
				await token.transfer(receiver, invalidAmount, { from: deployer}).should.be.rejectedWith(EVM_REVERT)

				invalidAmount = tokens(10)
				await token.transfer(deployer, invalidAmount, { from: receiver}).should.be.rejectedWith(EVM_REVERT)
			})

			it('rejects invalid recipients', async () => {
				await token.transfer(0x0, amount, { from: deployer}).should.be.rejected
			})
		})
		
	})

	describe('approving tokens', () => {
		let result
		let amount
		beforeEach(async () => {
			amount = tokens(100)
			result = await token.approve(exchange, amount, { from: deployer })
		})

		describe('success', () => {
			it('allocated an allowance for delegated tokens spening', async () => {
				const allowance = await token.allowance(deployer, exchange)
				allowance.toString().should.equal(amount.toString())
			})

			it('emits an Approval event', async () => {
				const log = result.logs[0]
				log.event.should.eq('Approval')
				const event = log.args
				event.owner.toString().should.equal(deployer, 'owner is correct')
				event.spender.toString().should.equal(exchange, 'spender is correct')
				event.value.toString().should.equal(amount.toString(), 'value is correct')
			})
		})

		describe('failure', () => {
			it('rejects invalid recipients', async () => {
				await token.approve(0x0, amount, { from: deployer}).should.be.rejected
			})
		})
	})

	describe('delegated token transfers', () => {
		let result
		let amount
		beforeEach(async () => {
			amount = tokens(100)
			await token.approve(exchange, amount, { from: deployer })
		})
		describe('success', async () => {
			beforeEach( async () => {
				result = await token.transferFrom(deployer, receiver, amount, { from: exchange})
			})

			it('transfers token balance', async () => {
				let balanceOf
				balanceOf = await token.balanceOf(deployer)
				balanceOf.toString().should.equal(tokens(999900).toString())
				balanceOf = await token.balanceOf(receiver)
				balanceOf.toString().should.equal(tokens(100).toString())

			})

			it('resets the allowance', async () => {
				const allowance = await token.allowance(deployer, exchange)
				allowance.toString().should.equal('0')
			})

			it('emits a Transfer event', async () => {
				const log = result.logs[0]
				log.event.should.eq('Transfer')
				const event = log.args
				event.from.toString().should.equal(deployer, 'from is correct')
				event.to.toString().should.equal(receiver, 'to is correct')
				event.value.toString().should.equal(amount.toString(), 'value is correct')
			})
		})

		describe('failure', async () => {
			it('rejects insufficient balance', async() => {

				const invalidAmount = tokens(100000000000)
				token.transferFrom(deployer, receiver, invalidAmount, { from: exchange }).should.be.rejectedWith(EVM_REVERT)
			})

			it('rejects invalid recipients', async () => {
				await token.transfer(0x0, amount, { from: exchange}).should.be.rejected
			})
		})
		
	})
})