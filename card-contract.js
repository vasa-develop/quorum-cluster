var cardContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"userHash","type":"string"},{"name":"startindex","type":"uint256"},{"name":"endindex","type":"uint256"}],"name":"getCardbyUserHash","outputs":[{"name":"serialized","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cardHash","type":"string"},{"name":"userHash","type":"string"},{"name":"documentHash","type":"string"},{"name":"cardClass","type":"string"}],"name":"addCard","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"cardHash","type":"string"}],"name":"getCardbyCardHash","outputs":[{"name":"userHash","type":"string"},{"name":"documentHash","type":"string"},{"name":"cardClass","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]);
var card = cardContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405261126a806100136000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327865ba21461005c57806376df0a8014610152578063cadcc0371461028d575b600080fd5b34801561006857600080fd5b506100d7600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192908035906020019092919080359060200190929190505050610447565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101175780820151818401526020810190506100fc565b50505050905090810190601f1680156101445780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015e57600080fd5b5061028b600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610b8c565b005b34801561029957600080fd5b506102f4600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610dc5565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b8381101561033c578082015181840152602081019050610321565b50505050905090810190601f1680156103695780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b838110156103a2578082015181840152602081019050610387565b50505050905090810190601f1680156103cf5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156104085780820151818401526020810190506103ed565b50505050905090810190601f1680156104355780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b606060006060806060806060600089891015151561046457600080fd5b600160008c6040518082805190602001908083835b60208310151561049e5780518252602082019150602081019050602083039250610479565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020805490500389111561055257600160008c6040518082805190602001908083835b60208310151561051757805182526020820191506020810190506020830392506104f2565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020805490500398505b60018a8a0301610100029650866040519080825280601f01601f1916602001820160405280156105915781602001602082028038833980820191505090505b50955060206040519080825280601f01601f1916602001820160405280156105c85781602001602082028038833980820191505090505b50945060206040519080825280601f01601f1916602001820160405280156105ff5781602001602082028038833980820191505090505b50935060206040519080825280601f01601f1916602001820160405280156106365781602001602082028038833980820191505090505b50925060206040519080825280601f01601f19166020018201604052801561066d5781602001602082028038833980820191505090505b5091508890505b8981101515610b7b5760008b6040518082805190602001908083835b6020831015156106b55780518252602082019150602081019050602083039250610690565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020818154811015156106f557fe5b90600052602060002090600402016000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561079a5780601f1061076f5761010080835404028352916020019161079a565b820191906000526020600020905b81548152906001019060200180831161077d57829003601f168201915b5050505050945060008b6040518082805190602001908083835b6020831015156107d957805182526020820191506020810190506020830392506107b4565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208181548110151561081957fe5b90600052602060002090600402016001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108be5780601f10610893576101008083540402835291602001916108be565b820191906000526020600020905b8154815290600101906020018083116108a157829003601f168201915b5050505050935060008b6040518082805190602001908083835b6020831015156108fd57805182526020820191506020810190506020830392506108d8565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208181548110151561093d57fe5b90600052602060002090600402016002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109e25780601f106109b7576101008083540402835291602001916109e2565b820191906000526020600020905b8154815290600101906020018083116109c557829003601f168201915b5050505050925060008b6040518082805190602001908083835b602083101515610a2157805182526020820191506020810190506020830392506109fc565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902081815481101515610a6157fe5b90600052602060002090600402016003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b065780601f10610adb57610100808354040283529160200191610b06565b820191906000526020600020905b815481529060010190602001808311610ae957829003601f168201915b50505050509150610b188783886110f5565b610b2182611154565b87039650610b308784886110f5565b610b3983611154565b87039650610b488785886110f5565b610b5184611154565b87039650610b608786886110f5565b610b6985611154565b87039650808060019003915050610674565b859750505050505050509392505050565b6000836040518082805190602001908083835b602083101515610bc45780518252602082019150602081019050602083039250610b9f565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060806040519081016040528086815260200185815260200184815260200183815250908060018154018082558091505090600182039060005260206000209060040201600090919290919091506000820151816000019080519060200190610c60929190611199565b506020820151816001019080519060200190610c7d929190611199565b506040820151816002019080519060200190610c9a929190611199565b506060820151816003019080519060200190610cb7929190611199565b50505050608060405190810160405280858152602001848152602001838152602001828152506001856040518082805190602001908083835b602083101515610d155780518252602082019150602081019050602083039250610cf0565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206000820151816000019080519060200190610d64929190611199565b506020820151816001019080519060200190610d81929190611199565b506040820151816002019080519060200190610d9e929190611199565b506060820151816003019080519060200190610dbb929190611199565b5090505050505050565b60608060606001846040518082805190602001908083835b602083101515610e025780518252602082019150602081019050602083039250610ddd565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206001016001856040518082805190602001908083835b602083101515610e705780518252602082019150602081019050602083039250610e4b565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206002016001866040518082805190602001908083835b602083101515610ede5780518252602082019150602081019050602083039250610eb9565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020600301828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fa95780601f10610f7e57610100808354040283529160200191610fa9565b820191906000526020600020905b815481529060010190602001808311610f8c57829003601f168201915b50505050509250818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110455780601f1061101a57610100808354040283529160200191611045565b820191906000526020600020905b81548152906001019060200180831161102857829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110e15780601f106110b6576101008083540402835291602001916110e1565b820191906000526020600020905b8154815290600101906020018083116110c457829003601f168201915b505050505090509250925092509193909250565b60006020835181151561110457fe5b04905060006020845181151561111657fe5b0611156111265780806001019150505b60006001820191505b602081028401518584015260208503945060018101905081811061112f575050505050565b60006020825181151561116357fe5b04905060006020835181151561117557fe5b061415156111865780806001019150505b8080600101915050602081029050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106111da57805160ff1916838001178555611208565b82800160010185558215611208579182015b828111156112075782518255916020019190600101906111ec565b5b5090506112159190611219565b5090565b61123b91905b8082111561123757600081600090555060010161121f565b5090565b905600a165627a7a723058203acd2e149ec0a14d164440720bba5418b873c9a7468a6bcc0fc82900b03259fe0029', 
     gas: '4700000'
   }, function (e, contract){
    if(e){
    	console.log(e);
    } else{
    	if(typeof contract.address !== 'undefined'){
    		 console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    	}
    	else{
    		console.log(' transactionHash: ' + contract.transactionHash)
    	}
    }
 })