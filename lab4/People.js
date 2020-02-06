const Person = require("./Person.js");
const faker = require('faker');

class People {
    constructor() {
        
        this.people = [];

        for(let i = 0; i < 99; i++)
        {
            let name = faker.name.findName();
            let color = faker.commerce.color();
            this.people.push(new Person(name, color));
        }
    }

readColor(req) {

    let result = {"error": "Can't find!"};

    people.forEach((value)=> {
        if(value.color == req.params.color) {
            result = value;
       }
    });

    if(result.error) {
        //Imvaild
    
    } else {
        //Valid
    }
    return result;
}
readName(req) {

    let result = {"error": "Can't find!"};

    people.forEach((value)=> {
        if(value.name == req.params.color) {
            result = value;
       }
    });

    if(result.error) {
        //Imvaild
    
    } else {
        //Valid
    }
    return result;
}

}

module.exports = People;