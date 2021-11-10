const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const ganache = require('ganache-cli')
// const { interface, bytecode } = require("./compile");

const compiledFactory = require('./build/CampaignFactory.json');



const provider = new HDWalletProvider(
//   "juice bicycle seek common shield hello below angry source share exact mobile",
//   remember to change this to your own phrase!
//  "https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
//   remember to change this to your own endpoint!

  'seed either payment void place brick noise early garden drive drastic devote',
    'https://rinkeby.infura.io/v3/e9ded64664994f04a70a90782667e7ad'
);
const web3 = new Web3(provider);

// const web3 = new Web3(ganache.provider());


const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("ACCOUNTS",accounts)

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract
    (JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode }).
        send({
        gas: '1000000',
        gasPrice: web3.utils.toWei('2', 'gwei'),
        from: accounts[0]
        });
    // .send({ gas: "1000000000000", from: accounts[0] });
    
   
 
  console.log("Contract deployed to", result.options.address);
};

deploy();
