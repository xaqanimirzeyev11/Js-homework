const Human=require('./basehumen');

class techStaff extends Human{ 
    constructor(name,surname,gender, contract){
        super(name, surname,gender)
        this._contract=contract
    }
    get contract(){
        return this._contract;
    }
}

module.exports=techStaff;