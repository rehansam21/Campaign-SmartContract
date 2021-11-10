"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; // step 1 --> code

// import Web3 from "web3";

// window.ethereum.enable();
// // const web3 = new Web3(window.web3.currentProvider);

// // export default web3;

// // window.ethereum.request({ method: "eth_requestAccounts" });

// const web3 = new Web3(window.ethereum);


if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and metamask is running.
  //   window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/e9ded64664994f04a70a90782667e7ad");
  web3 = new _web2.default(provider);
}

exports.default = web3;

// how a user can visit blockchain app without metamask

/* step 1 -> configure with a provider from metamask.

step 2 -> Tell web3 that a deployed copy of the 'Campaign factory' exists

step 3 -> Use Factory instance to retrive a list of deployed campaigns

Use React to show something about each campaign

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQWlCQSxBQUFPOzs7Ozs7QUFFUCxJQUFJLFlBQUosR0FuQkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBVUEsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFDdkU7QUFDRjtBQUNJO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUMvQjtBQUpELE9BSU8sQUFDTDtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2YsQUFFRjtTQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2pCO0FBRUQ7O2tCQUFBLEFBQWU7O0FBbUJmOztBQUVBIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovcHJvamVjdF9kaXJlY3Rvcnkva2lja3N0YXJ0In0=