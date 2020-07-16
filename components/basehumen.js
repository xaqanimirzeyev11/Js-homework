class Human{
    constructor(name,surname,gender){
        this._name=name;
        this._surname=surname;
        this._gender=gender;
    }
    get name(){
        return this._name;
    }
    get surname(){
        return this._surname;
    }
    get gender(){
        return this._gender;
    }
    introduce(){
        return `Hello I am ${this._name} ${this._surname}`;
    }
}

module.exports=Human;