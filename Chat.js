var chatContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"message","type":"string"},{"name":"recipient","type":"string"}],"name":"sendMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"myMobileNumber","type":"string"},{"name":"senderMobileNumber","type":"string"}],"name":"getMessages","outputs":[{"name":"serialized","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"mobileNumber","type":"string"}],"name":"isRegistered","outputs":[{"name":"isRegistered","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"mobileNumber","type":"string"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mobileNumber","type":"string"},{"indexed":false,"name":"pubAddress","type":"address"}],"name":"Registered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"},{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"recipient","type":"address"}],"name":"MessageNotification","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]);
        var chat = chatContract.new(
        {
        from: web3.eth.accounts[0],
        data: '0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610fed806100536000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063467fba0f146100885780634fcd40c5146100db578063715018a6146101a75780638da5cb5b146101be578063c822d7f014610215578063f2c298be14610268578063f2fde38b146102a3575b600080fd5b34801561009457600080fd5b506100d96004803603810190808035906020019082018035906020019190919293919293908035906020019082018035906020019190919293919293905050506102e6565b005b3480156100e757600080fd5b5061012c6004803603810190808035906020019082018035906020019190919293919293908035906020019082018035906020019190919293919293905050506105ec565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561016c578082015181840152602081019050610151565b50505050905090810190601f1680156101995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101b357600080fd5b506101bc610a73565b005b3480156101ca57600080fd5b506101d3610b75565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561022157600080fd5b5061024e600480360381019080803590602001908201803590602001919091929391929390505050610b9a565b604051808215151515815260200191505060405180910390f35b34801561027457600080fd5b506102a1600480360381019080803590602001908201803590602001919091929391929390505050610c2a565b005b3480156102af57600080fd5b506102e4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d17565b005b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001848460405180838380828437820191505092505050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208484909180600181540180825580915050906001820390600052602060002001600090919293909192939091929091925091906103e5929190610f1c565b5050600260006001848460405180838380828437820191505092505050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208484909180600181540180825580915050906001820390600052602060002001600090919293909192939091929091925091906104e6929190610f1c565b50507fbb0c850b73a54740353d8bbe5799c5176d69d3632894d9b9c30b81241f87276f8484336001868660405180838380828437820191505092505050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825286868281815260200192508082843782019150509550505050505060405180910390a150505050565b6060600060608060006002600060018b8b60405180838380828437820191505092505050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001898960405180838380828437820191505092505050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506040029350836040519080825280601f01601f1916602001820160405280156107375781602001602082028038833980820191505090505b50925060206040519080825280601f01601f19166020018201604052801561076e5781602001602082028038833980820191505090505b509150600090505b6002600060018b8b60405180838380828437820191505092505050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001898960405180838380828437820191505092505050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610a64576002600060018b8b60405180838380828437820191505092505050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001898960405180838380828437820191505092505050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208181548110151561099a57fe5b906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a385780601f10610a0d57610100808354040283529160200191610a38565b820191906000526020600020905b815481529060010190602001808311610a1b57829003601f168201915b50505050509150610a4a848385610d7e565b610a5382610ddd565b840393508080600101915050610776565b82945050505050949350505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ace57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008073ffffffffffffffffffffffffffffffffffffffff166001848460405180838380828437820191505092505050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610c1f5760019050610c24565b600090505b92915050565b336001838360405180838380828437820191505092505050908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f50f74ca45caac8020b8d891bd13ea5a2d79564986ee6a839f0d914896388322d82823360405180806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281038252858582818152602001925080828437820191505094505050505060405180910390a15050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d7257600080fd5b610d7b81610e22565b50565b600060208351811515610d8d57fe5b049050600060208451811515610d9f57fe5b061115610daf5780806001019150505b60006001820191505b6020810284015185840152602085039450600181019050818110610db8575050505050565b600060208251811515610dec57fe5b049050600060208351811515610dfe57fe5b06141515610e0f5780806001019150505b8080600101915050602081029050919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610e5e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610f5d57803560ff1916838001178555610f8b565b82800160010185558215610f8b579182015b82811115610f8a578235825591602001919060010190610f6f565b5b509050610f989190610f9c565b5090565b610fbe91905b80821115610fba576000816000905550600101610fa2565b5090565b905600a165627a7a723058202a97b8f85c1f72cba5b51feb6db565215f869fe71b1c65f6c1544c7f3e7208d80029',
        gas: '4700000'
        }, function (e, contract){
        if(e){
        console.log("ERROR: "+e);
        }else{
        if (typeof contract.address !== 'undefined') {
        console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
        else{
        console.log(' transactionHash: ' + contract.transactionHash);
        }
        }

        })
