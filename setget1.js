var a = web3.eth.accounts[0]
web3.eth.defaultAccount = a;

// abi and bytecode generated from simplestorage.sol:
// > solcjs --bin --abi simplestorage.sol
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "userFrom",
				"type": "string"
			},
			{
				"name": "userTo",
				"type": "string"
			},
			{
				"name": "documentHash",
				"type": "string"
			},
			{
				"name": "documentTransactionMetadataHash",
				"type": "string"
			},
			{
				"name": "transactionClass",
				"type": "string"
			}
		],
		"name": "transferDocument",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "startindex",
				"type": "uint256"
			},
			{
				"name": "endindex",
				"type": "uint256"
			}
		],
		"name": "getDocuments1",
		"outputs": [
			{
				"name": "off",
				"type": "uint256"
			},
			{
				"name": "start",
				"type": "uint256"
			},
			{
				"name": "end",
				"type": "uint256"
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
				"name": "userTo",
				"type": "string"
			}
		],
		"name": "getDocumentTrxCountbyUserto",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
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
				"name": "documentHash",
				"type": "string"
			},
			{
				"name": "documentMetadataHash",
				"type": "string"
			},
			{
				"name": "documentClass",
				"type": "string"
			},
			{
				"name": "hasSubDocs",
				"type": "string"
			},
			{
				"name": "documentTransactionMetadataHash",
				"type": "string"
			},
			{
				"name": "transactionClass",
				"type": "string"
			}
		],
		"name": "addDocument",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userTo",
				"type": "string"
			},
			{
				"name": "userFrom",
				"type": "string"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getTrxbyUserToUserFrom",
		"outputs": [
			{
				"name": "documentHash",
				"type": "string"
			},
			{
				"name": "metadataHash",
				"type": "string"
			},
			{
				"name": "transactionClass",
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
				"name": "startindex",
				"type": "uint256"
			},
			{
				"name": "endindex",
				"type": "uint256"
			}
		],
		"name": "getDocuments",
		"outputs": [
			{
				"name": "serialized",
				"type": "bytes"
			},
			{
				"name": "start",
				"type": "uint256"
			},
			{
				"name": "end",
				"type": "uint256"
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
				"name": "userTo",
				"type": "string"
			},
			{
				"name": "userFrom",
				"type": "string"
			}
		],
		"name": "getTrxCountbyUserToUserFrom",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
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
				"name": "documentHash",
				"type": "string"
			}
		],
		"name": "getDocbyDocumentHash",
		"outputs": [
			{
				"name": "metadataHash",
				"type": "string"
			},
			{
				"name": "documentClass",
				"type": "string"
			},
			{
				"name": "hasSubDocs",
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
				"name": "userTo",
				"type": "string"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getDocumentTrxbyUserto",
		"outputs": [
			{
				"name": "userFrom",
				"type": "string"
			},
			{
				"name": "documentHash",
				"type": "string"
			},
			{
				"name": "metadataHash",
				"type": "string"
			},
			{
				"name": "transactionClass",
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
				"name": "userFrom",
				"type": "string"
			}
		],
		"name": "getDocumentTrxCountbyUserfrom",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
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
				"name": "userFrom",
				"type": "string"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getDocumentTrxbyUserfrom",
		"outputs": [
			{
				"name": "userTo",
				"type": "string"
			},
			{
				"name": "documentHash",
				"type": "string"
			},
			{
				"name": "metadataHash",
				"type": "string"
			},
			{
				"name": "transactionClass",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];



var Contract = web3.eth.contract(abi);

var contract = Contract.at('0xd5db6331ee64d4ee2fb3dd8cb860aaa71917ffae');
console.log(contract);


//string userHash, string documentHash, string documentMetadataHash, string documentClass, string hasSubDocs, string documentTransactionMetadataHash, string transactionClass
//addDocument(string documentHash, string documentMetadataHash, string documentClass, string hasSubDocs, string userFrom, string documentTransactionMetadataHash, string transactionClass)
contract.addDocument("userhash","documentHash1","documentMetadataHash1","documentClass1","true","trxmeta","trxclass" , {gas: '90000000'},function(error, result){
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

contract.addDocument("userHash","documentHash2","documentMetadataHash2","documentClass2","true" ,"trxmeta","trxclass" , {gas: '90000000'},function(error, result){
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

contract.addDocument("userHash","documentHash3","documentMetadataHash3","documentClass3","true" ,"trxmeta","trxclass", {gas: '90000000'},function(error, result){
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

contract.addDocument("userHash","documentHash4","documentMetadataHash4","documentClass4","true","trxmeta","trxclass" , {gas: '90000000'},function(error, result){
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


contract.getDocuments(1,1, {gas: '90000000'}, function(error, result){
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

console.log("-----------------------------------------------------------------");

contract.getDocuments(0,1, {gas: '90000000'}, function(error, result){
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

/*contract.getDocumentCount("documentHash",{gas: '90000000'},function(error, result){
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

contract.getDocumentbyDocHash("documentHash",0,{gas: '90000000'}, function(error, result){
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

//string userFrom, string userTo, string documentHash, string metadataHash, string transactionClass
contract.addToDocTrxMappings("userFrom","userTo","documentHash","metadataHash","transactionClass",{gas: '90000000'}, function(error, result){
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

contract.getuserFromtoDocTrxCount("userFrom",{gas: '90000000'}, function(error, result){
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



contract.getuserTotoDocTrxCount("userTo",{gas: '90000000'}, function(error, result){
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


contract.getuserToUserFromTrxCount("userTo","userFrom",{gas: '90000000'}, function(error, result){
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


contract.getuserFromtoDocTrx("userFrom",0,{gas: '90000000'}, function(error, result){
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


contract.getuserTotoDocTrx("userTo", 0, {gas: '90000000'}, function(error, result){
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


contract.getuserToUserFromTrx("userTo", "userFrom" ,0 ,{gas: '90000000'}, function(error, result){
	if(!error)
                {
                    console.log("RESULT:  ");
                    console.log(result);
                }
            else{
                console.log("ERROR:  ");
                console.error(error);
            }
})*/

//string cardHash, string userHash, string documentHash, string cardClass
/*contract.addCard("cardHash", "userHash", "documentHash", "cardClass", {gas: '90000000'}, function(error, result){
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

contract.getuserHashtoCardsCount("userHash", {gas: '90000000'}, function(error, result){
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

contract.getuserHashtoCards("userHash", 0, {gas: '90000000'}, function(error, result){
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

contract.getcardHashtoCards("cardHash", {gas: '90000000'}, function(error, result){
	if(!error)
                {
                    console.log("RESULT:  ");
                    console.log(result);
                }
            else{
                console.log("ERROR:  ");
                console.error(error);
            }
})*/

//string userHash, string orgHash, string metadataHash, string transactionClass
/*contract.addToUserOrgTrx("userHash", "orgHash", "metadataHash", "transactionClass",{gas: '90000000'}, function(error, result){
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

contract.getuserHashtoOrgUserTrxCount("userHash",{gas: '90000000'}, function(error, result){
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

contract.getorgHashtoOrgUserTrxCount("orgHash",{gas: '90000000'}, function(error, result){
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


contract.getuserHashtoOrgUserTrx("userHash",0,{gas: '90000000'}, function(error, result){
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

contract.getorgHashtoOrgUserTrx("orgHash",0,{gas: '90000000'}, function(error, result){
	if(!error)
                {
                    console.log("RESULT:  ");
                    console.log(result);
                }
            else{
                console.log("ERROR:  ");
                console.error(error);
            }
})*/
