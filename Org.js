var orgContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"orgId","type":"string"}],"name":"getOrg","outputs":[{"name":"orgClass","type":"string"},{"name":"metaDataHash","type":"string"},{"name":"salt","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"string"},{"name":"orgClass","type":"string"},{"name":"metaDataHash","type":"string"},{"name":"salt","type":"string"}],"name":"addOrg","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
var org = orgContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b506106af806100206000396000f30060806040526004361061004b5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663696f541c8114610050578063b5aaea5d146101af575b600080fd5b34801561005c57600080fd5b5061007060048035016020810190356102cd565b6040516020808201808201808301848103855287518152875185949182019189019080838360005b838110156100b0578181015183820152602001610098565b50505050905090810190601f1680156100dd5780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b838110156101105781810151838201526020016100f8565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b83811015610170578181015183820152602001610158565b50505050905090810190601f16801561019d5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b3480156101bb57600080fd5b506102cb600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375050604080516020601f89358b018035918201839004830283018401909452808352979a99988101979196509182019450925082915084018382808284375050604080516020601f89358b018035918201839004830283018401909452808352979a99988101979196509182019450925082915084018382808284375050604080516020601f89358b018035918201839004830283018401909452808352979a9998810197919650918201945092508291508401838280828437509497506104f49650505050505050565b005b606080606060008585604051808383808284378201915050925050509081526020016040518091039020600101600086866040518083838082843782019150509250505090815260200160405180910390206002016000878760405180838380828437919091019485525050604080516020948501819003812087546002600180831615610100020390911604601f8101879004870287018301909352828252600301949093508692508301828280156103c85780601f1061039d576101008083540402835291602001916103c8565b820191906000526020600020905b8154815290600101906020018083116103ab57829003601f168201915b505085546040805160206002600180861615610100020390941693909304601f8101849004840284018201909252818152959850879450925084019050828280156104545780601f1061042957610100808354040283529160200191610454565b820191906000526020600020905b81548152906001019060200180831161043757829003601f168201915b505084546040805160206002600180861615610100020390941693909304601f8101849004840284018201909252818152959750869450925084019050828280156104e05780601f106104b5576101008083540402835291602001916104e0565b820191906000526020600020905b8154815290600101906020018083116104c357829003601f168201915b505050505090509250925092509250925092565b608060405190810160405280858152602001848152602001838152602001828152506000856040518082805190602001908083835b6020831015156105485780518252602092839003929182019101610529565b518151600160209485036101000a03801990921691161790529201948552506040519381018490039093206000858101518051929561058e9550918601935001906105e8565b5060208281015180516105a792600185019201906105e8565b50604082015180516105c39160028401916020909101906105e8565b50606082015180516105df9160038401916020909101906105e8565b50505050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061062957805160ff1916838001178555610656565b82800160010185558215610656579182015b8281111561065657825182559160200191906001019061063b565b50610662929150610666565b5090565b61068091905b80821115610662576000815560010161066c565b905600a165627a7a7230582068c4403a03a9e6f86e9459cd62c32e687270561fef1d785184d8b8dcfd99734a0029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
  {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })