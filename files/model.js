const persons = [];

class Person {
    name;
    firstName;
    plz;
    ort;
    id;

    constructor(firstname, name, plz, ort, id) {
        this.firstName = firstname;
        this.name = name;
        this.plz = plz;
        this.ort = ort;
        this.id = id;
    }
}

function savePerson(firstname, name, plz, ort, id) {
    const current = getPersonByID(id);
    if (current){
        current.firstName = firstname;
        current.name = name;
        current.plz = plz;
        current.ort = ort;
    } else {
        persons.push(new Person(firstname, name, plz, ort, id));
    }
}

function getPersonByID(id){
    return persons.find(p=>p.id == id);
}
