class Person {
    name;
    firstName;
    plz;
    id;
    constructor(firstname, name, plz, id) {
        this.firstName = firstname;
        this.name = name;
        this.plz = plz;
        this.id = id;
    }
}

const persons= [];

function savePerson(firstname, name, plz, id){
    console.log(firstname);
    console.log(name);
    console.log(plz)
    console.log(id);
    const current = getPersonByID(id);
    if (current){
        current.firstName = firstname;
        current.name = name;
        current.plz = plz;
    } else {
        persons.push(new Person(firstname, name, plz, id));
    }
}

function getPersonByID(id){
    return persons.find(p=>p.id == id);
}
