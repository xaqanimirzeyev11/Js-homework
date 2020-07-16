const Human=require('./basehumen');
const techStaff = require('./techstaff');


class Student extends techStaff{
    constructor(name, surname,gender,contract,cls){
        super(name,surname,gender,contract)
        this._cls=cls
    }
    get cls(){
        return this._cls;
    }
}

module.exports = Student;