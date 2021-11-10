import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x2DB1A7f40Ba2312fac4EE0E72950b5Da9c797159'
);


export default instance;

// step --> 2 ell web3 that a deployed copy of the 'Campaign factory' exists

// check web3.js file for more steps