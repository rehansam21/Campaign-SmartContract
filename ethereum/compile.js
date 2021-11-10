// running comppile one one time unlike oher project we have to 
//run every time


const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // to remove everything inside build directory

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");

console.log(campaignPath)


const source = fs.readFileSync(campaignPath, 'utf8');

// output has two object 1. Contract Object & 2.Contract Factory Object
const output = solc.compile(source, 1).contracts;

console.log(output);

fs.ensureDirSync(buildPath); //fs.ensureDirSyc checks a directory is avl or not if not avl it creates one

for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}





// const path = require('path');
// const fs = require('fs');
// const solc = require('solc');

// console.log("MY SOLCCCCCCCCCCCCCC",solc)


// const inboxPath = path.resolve(__dirname,'contracts', 'inbox.sol');
// const source = fs.readFileSync(inboxPath, 'utf8');

// console.log(solc.compile(source,1));

// module.exports = solc.compile(source,1).contracts[ ':Inbox']; //returning bytecode & ABI of the Contract


// const path = require ('path');
// const solc = require ('solc');
// const fs   = require ('fs-extra')
 
// const buildPath = path.resolve(__dirname,'build');
 
// fs.removeSync(buildPath) //remove build directory
 
// const campaignPath = path.resolve(__dirname,'contracts','campaign.sol')
// const source = fs.readFileSync(campaignPath,'utf8');
 
// var input = {
//     language: 'Solidity',
//     sources: {
//         'Campaign.sol': {
//             content: source
//         }
//     },
//     settings: {
//         outputSelection: {
//             '*': {
//                 '*': ['*']
//             }
//         }
//     }
// };

// const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Campaign.sol'];
// console.log("kooooooooooooookkkkkkkkkkkkkkkkkkkk")
 
// fs.ensureDirSync(buildPath); //check whether dir exist and will create one
 
// for (let contract in output) {
//     fs.outputJsonSync(
//         path.resolve(buildPath, contract + '.json'),
//         output[contract])
// }



// const options = {
//     language: 'Solidity',
//     sources: {
//       'inbox.sol': {
//         content: source
//       }
//     },
//     settings: {
//       outputSelection: {
//         '*': {
//           '*': ['*']
//         }
//       }
//     }
//   };
//   const compiledRaw = solc.compile(JSON.stringify(options));
//   const compiledObj = JSON.parse(compiledRaw);
//   const compiledInboxContract = compiledObj.contracts['inbox.sol']['Inbox'];
//   //console.log(compiledInboxContract)
//   module.exports = compiledInboxContract;