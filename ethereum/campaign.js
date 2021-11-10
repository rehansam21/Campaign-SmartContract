import web3 from './web3';
import Campaign from './build/Campaign.json';
// address will come from show.js props.query.address

// returns the instance of campaign Contract
export default address => {
    return new web3.eth.Contract(
            JSON.parse(Campaign.interface),
            address 
            );
};


