const Human = require("./basehumen");

class Teacher extends Human {
    constructor(name, surname, gender, cls) {
        super(name, surname, gender)
        this._cls = cls;
    }
    get cls(){
        return this._cls;
    }
}

module.exports = Teacher;