const Human = require("./basehumen");

class Finance extends Human {
    constructor(name, surname, gender, position) {
        super(name, surname, gender)
        this._position = position;
    }
    get contract(){
        return this._position;  
    }
}

module.exports = Finance;