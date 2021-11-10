// step 1 --> code

// import Web3 from "web3";
 
// window.ethereum.enable();
// // const web3 = new Web3(window.web3.currentProvider);

// // export default web3;

// // window.ethereum.request({ method: "eth_requestAccounts" });
 
// const web3 = new Web3(window.ethereum);





import Web3 from "web3";
 
let web3;  
 
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and metamask is running.
//   window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/e9ded64664994f04a70a90782667e7ad"
  );
  web3 = new Web3(provider);
}
 
export default web3;


















// how a user can visit blockchain app without metamask

/* step 1 -> configure with a provider from metamask.

step 2 -> Tell web3 that a deployed copy of the 'Campaign factory' exists

step 3 -> Use Factory instance to retrive a list of deployed campaigns

Use React to show something about each campaign

*/