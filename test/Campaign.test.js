const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// console.log('INSIDE WEB3---->>>>',Web3);


// console.log('INSIDE SMALL web3--------->>>>',web3);

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compileCampaign = require('../ethereum/build/Campaign.json');

let accounts; //local instances of ganache
let factory;
let campaignAddress;
let campaign;


beforeEach(async () => {

    accounts = await web3.eth.getAccounts();

    // console.log('MY GANACHE ACCOUNTS',accounts)

    // compiledFactory is a Json but Contract wants simple JS object
    // so we have to parse the Json 
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({
            data: compiledFactory.bytecode
        }).send({
            from: accounts[0], gas: '1000000'
        });
    // console.log('INSIDE FACTORY ',factory);

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    const address = await factory.methods.getDeployedContracts().call();
    
    // console.log('address[0]------ >>>',address[0]);
    campaignAddress = address[0];

    // console.log('ADDRESSS',campaignAddress);

    campaign = await new web3.eth.Contract
        (JSON.parse(compileCampaign.interface),
        campaignAddress
    );

    // console.log('INSIDE My campaign ----<>>>>>>', campaign)
});

describe ('Campaign', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    })

    it('check caller as the campaign manager ', async () => {
        const manager = await campaign.methods.manager().call();
        // console.log("manager>>>>>>",manager);
        // console.log("ACCOUNTS>>>>>>",accounts[0]);
        assert.equal(manager,accounts[0]);

    } );


    it('Contribute money from another account & checks whether it is approved or not', async () =>{
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: '200'
        });

        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    });

    it("Require minimum Contribution ", async () => {
        try{
            await campaign.methods.contribute().send({
                from: accounts[1],
                value: '5'
            });
        assert(false);
        } catch (err) {
            assert(err);
        }

    });

    it("allows a manager to make a payment request f(createRequest) ", async ()=> {
        await campaign.methods.createRequest('buy beer', accounts[2], '100').send({
            from: accounts[0],
            gas: '1000000'
        });
        const request =  await campaign.methods.requests(0).call();
        assert.equal('buy beer', request.description);
    });

    it('process requests f(contribute) ', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });

        await campaign.methods.createRequest('buy battery', accounts[1], web3.utils.toWei('5', 'ether')).send({
            from: accounts[0],
            gas: '1000000'
        });

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        console.log(balance)

        assert(balance > 104);

    });
});