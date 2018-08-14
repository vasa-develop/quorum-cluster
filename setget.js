var a = eth.accounts[0]
web3.eth.defaultAccount = a;

// abi and bytecode generated from simplestorage.sol:
// > solcjs --bin --abi simplestorage.sol
var abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "cardId",
                "type": "string"
            },
            {
                "name": "userId",
                "type": "string"
            },
            {
                "name": "cardClass",
                "type": "string"
            },
            {
                "name": "orgId",
                "type": "string"
            },
            {
                "name": "publicInfo",
                "type": "string"
            }
        ],
        "name": "addCard",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "cardId",
                "type": "string"
            },
            {
                "name": "role",
                "type": "uint256"
            },
            {
                "name": "level",
                "type": "uint256"
            }
        ],
        "name": "addCardPermissions",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "data",
                "type": "string"
            },
            {
                "name": "separator",
                "type": "string"
            },
            {
                "name": "cardId",
                "type": "string"
            }
        ],
        "name": "addDocumentForUser",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "orgId",
                "type": "string"
            },
            {
                "name": "orgClass",
                "type": "string"
            },
            {
                "name": "metaDataHash",
                "type": "string"
            },
            {
                "name": "salt",
                "type": "string"
            }
        ],
        "name": "addOrg",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "cardIdFrom",
                "type": "string"
            },
            {
                "name": "docIds",
                "type": "string"
            },
            {
                "name": "separator",
                "type": "string"
            },
            {
                "name": "tokens",
                "type": "string"
            }
        ],
        "name": "addToWhiteList",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "userId",
                "type": "string"
            },
            {
                "name": "userClass",
                "type": "string"
            },
            {
                "name": "publicInfo",
                "type": "string"
            },
            {
                "name": "metadataHash",
                "type": "string"
            },
            {
                "name": "salt",
                "type": "string"
            }
        ],
        "name": "addUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "docId",
                "type": "string"
            },
            {
                "name": "cardId",
                "type": "string"
            }
        ],
        "name": "isPermittedToRead",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "docId",
                "type": "string"
            },
            {
                "name": "cardId",
                "type": "string"
            }
        ],
        "name": "isPermittedTowrite",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "isSuperUser",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "docId",
                "type": "string"
            }
        ],
        "name": "isUserOwner",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "cardIdFrom",
                "type": "string"
            },
            {
                "name": "orgId",
                "type": "string"
            },
            {
                "name": "docIds",
                "type": "string"
            },
            {
                "name": "separator",
                "type": "string"
            }
        ],
        "name": "shareDocumentWithOrg",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "cardIdFrom",
                "type": "string"
            },
            {
                "name": "cardIdTo",
                "type": "string"
            },
            {
                "name": "docIds",
                "type": "string"
            },
            {
                "name": "separator",
                "type": "string"
            }
        ],
        "name": "shareDocumentWithUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "getCardByuserId",
        "outputs": [
            {
                "name": "serialized",
                "type": "bytes"
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
                "name": "cardId",
                "type": "string"
            }
        ],
        "name": "getCardInfo",
        "outputs": [
            {
                "name": "pubKey",
                "type": "address"
            },
            {
                "name": "cardClass",
                "type": "string"
            },
            {
                "name": "orgId",
                "type": "string"
            },
            {
                "name": "publicInfo",
                "type": "string"
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
                "name": "docId",
                "type": "string"
            }
        ],
        "name": "getDocumentInfo",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
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
                "name": "docId",
                "type": "string"
            }
        ],
        "name": "getDocumentSaltForIndv",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "orgId",
                "type": "string"
            }
        ],
        "name": "getOrg",
        "outputs": [
            {
                "name": "orgClass",
                "type": "string"
            },
            {
                "name": "metaDataHash",
                "type": "string"
            },
            {
                "name": "salt",
                "type": "string"
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
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "getUser",
        "outputs": [
            {
                "name": "userClass",
                "type": "string"
            },
            {
                "name": "metadataHash",
                "type": "string"
            },
            {
                "name": "salt",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isCardPresent",
        "outputs": [
            {
                "name": "isValid",
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
                "name": "docId",
                "type": "string"
            },
            {
                "name": "token",
                "type": "string"
            }
        ],
        "name": "isWhiteListToken",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];



var Contract = web3.eth.contract(abi);

var contract = Contract.at('0x3ae5299f752c0a2b954f2df9172a8b87530bde25');
console.log(contract);
//string cardId, string userId, string cardClass, string orgId, string publicInfo

contract.addOrg("orgId0", "orgClass0", "metadataHash0", "salt0", {from: web3.eth.accounts[0],gas: '90000000'}, function(error, result){
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
     

contract.getOrg("orgId0", {from: web3.eth.accounts[0],gas: '90000000'}, function(error, result){
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


contract.addCard("cardId0", "userId0", "cardClass0", "orgId0", "publicInfo0", {from: web3.eth.accounts[0],gas: '90000000'}, function(error, result){
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

contract.getCardInfo("cardId0", {from: web3.eth.accounts[0],gas: '90000000'}, function(error, result){
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

contract.addDocumentForUser("docId0,contentHash0,metadata0,publicInfo0",",","cardId0", {from: web3.eth.accounts[0],gas: '90000000'}, function(error, result){
            if(!error)
                {
                    console.log("RESULT:  ");
                    console.log(result);
                }
            else{
                console.log("ERROR:  ");
                console.error(error);
            }  
})

contract.getDocumentInfo("docId0", {from: web3.eth.accounts[0],gas: '90000000'}, function(error, result){
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
