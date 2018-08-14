var a = eth.accounts[0]
web3.eth.defaultAccount = a;

// abi and bytecode generated from simplestorage.sol:
// > solcjs --bin --abi simplestorage.sol
var abi = [
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
                "name": "pubKey",
                "type": "string"
            },
            {
                "name": "userHash",
                "type": "string"
            },
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
        "name": "createAccount",
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
        "constant": true,
        "inputs": [
            {
                "name": "userHash",
                "type": "string"
            }
        ],
        "name": "getPubKeyfromUserHash",
        "outputs": [
            {
                "name": "pubKey",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];



var Contract = web3.eth.contract(abi);

var contract = Contract.at('0x1932c48b2bf8102ba33b4a6b545c32236e342f34');
console.log(contract);
//string pubKey, string userHash, string metadataHash, string userClass, bool isOrg
contract.createAccount("0x1158F15E74DCEc06AEAeEbA5b0EaA8461c73dB36","hashofaccount","hsdbfjhdsvfhjvfhjjsdfsdsdfssdf","user.basicInfo",false,function(error, result){
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

