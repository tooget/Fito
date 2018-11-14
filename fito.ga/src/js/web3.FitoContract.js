// // Web3 interaction setting refered from build contracts.
// // https://ethereum.stackexchange.com/questions/21665/web3-js-import-contract-abi-from-json-file?rq=1

// // In case : Dynamic Frontend
// var fs = require('fs');
// var jsonFile = "../../build/contracts/FitoContract.json";
// var parsed=  JSON.parse(fs.readFileSync(jsonFile));

// var contractAbi = parsed.abi;
// var contractAddress = parsed.networks.address;

// module.exports = {
//     contractAbi,
//     contractAddress,
// }