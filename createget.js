var a = eth.accounts[0]
web3.eth.defaultAccount = a;

// abi and bytecode generated from simplestorage.sol:
// > solcjs --bin --abi simplestorage.sol
var abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "userHash",
                "type": "string"
            }
        ],
        "name": "createAccountPubKey",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userHash",
                "type": "string"
            }
        ],
        "name": "getAccount",
        "outputs": [
            {
                "name": "metadataHash",
                "type": "string"
            },
            {
                "name": "userClass",
                "type": "string"
            },
            {
                "name": "isOrg",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "userHash",
                "type": "string"
            },
            {
                "name": "userClass",
                "type": "string"
            }
        ],
        "name": "createAccountUserClass",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "userHash",
                "type": "string"
            },
            {
                "name": "pubKey",
                "type": "string"
            }
        ],
        "name": "linkAccount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "userHash",
                "type": "string"
            },
            {
                "name": "isOrg",
                "type": "bool"
            }
        ],
        "name": "createAccountMetaHash",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newUserHash",
                "type": "string"
            },
            {
                "name": "pubKey",
                "type": "string"
            }
        ],
        "name": "changeAccount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "userHash",
                "type": "string"
            },
            {
                "name": "metadataHash",
                "type": "string"
            }
        ],
        "name": "createAccountMetaHash",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];



var Contract = web3.eth.contract(abi);

var contract = Contract.at('0xfc1684a8af3e6bf532482c356e5b2cef9cad144f');
console.log(contract);
//string pubKey, string userHash, string metadataHash, string userClass, bool isOrg
contract.createAccountUserClass("userhash","class",function(error, result){
            if(!error)
                {
                    console.log("RESULT:  ");
                    console.log(result);
                }
            else{
                console.log("ERROR:  ");
                console.error(error);
            }
        });

contract.getAccount("userhash",function(error, result){
            if(!error)
                {
                    console.log("RESULT:  ");
                    console.log(result);
                }
            else{
                console.log("ERROR:  ");
                console.error(error);
            }
        });

