let dataID = 0;
let selectedPerson;

class Observable {
    constructor(functionThatTakesObserver){
      this._functionThatTakesObserver = functionThatTakesObserver;
    }

    subscribe(observer) {
      return this._functionThatTakesObserver(observer)
    }
}

class PersonObserver {
    firstname;
    name;
    plz;

    constructor(firstname, name, plz) {
        this.firstname = firstname;
        this.name = name;
        this.plz = plz;
    }

    next(data) {
        this.firstname.value = data?.firstName ? data?.firstName : "";
        this.name.value = data?.name ? data?.name : "";
        this.plz.value = data?.plz ? data?.plz : "";
    }
}

let personObserver;

function addData(dataTableBody){
    const trID = "TR-" + dataID;
    
    dataTableBody.innerHTML += "<tr id='" + trID + "'" +
        "onClick='loadPerson(\"" + trID + "\")'>\n " +
        "<td></td>\n" +
        "<td></td>\n" +
        "<td></td>\n" +
        "</tr>";
        
    savePerson("", "", "", trID)

    selectedPerson = null;
    personObserver.next(selectedPerson);
    dataID++;
}

function loadPerson(trID){
    selectedPerson = getPersonByID(trID);
    personObserver.next(selectedPerson);
}

function addDetailViewChangeListener(firstname, name, plz) {
    const observerOfPerson = new Observable(observer => {
        personObserver = new PersonObserver(firstname, name, plz);
    })
      
    observerOfPerson.subscribe(personObserver)
}

function submitPerson(firstname, name, plz) {
    savePerson(firstname.value, name.value, plz.value, selectedPerson.id);
}