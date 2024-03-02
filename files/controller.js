let dataID = 0;
let selectedPerson;
let personObserver;
let personListObserver;

function addData(dataTableBody){
    const trID = "TR-" + dataID;

    savePerson("", "", "", trID)

    selectedPerson = getPersonByID(trID);
    personObserver.next(selectedPerson);

    dataID++;
    personListObserver.next(persons);
}

function loadPerson(trID){
    selectedPerson = getPersonByID(trID);
    personObserver.next(selectedPerson);
}

function addDetailViewChangeListener(firstname, name, plz) {
    personObserver = new PersonObserver(firstname, name, plz);
}

function addTableDataChangeListener(dataTableBody) {
    personListObserver = new PersonListObserver(dataTableBody);
}

function submitPerson(firstname, name, plz) {
    savePerson(firstname.value, name.value, plz.value, selectedPerson.id);
    personListObserver.next(persons);
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

class PersonListObserver {
    persons;
    dataTableBody;

    constructor(dataTableBody) {
        this.dataTableBody = dataTableBody;
    }

    next(data) {
    
        let newInnerHTML = "<tr><th>Vorname</th><th>Nachname</th><th>PLZ</th></tr>";
        
        data.forEach((p) => {
            newInnerHTML += "<tr id='" + p.id + "'" +
            "onClick='loadPerson(\"" + p.id + "\")'>\n " +
            "<td>" + p.firstName + "</td>\n" +
            "<td>" + p.name + "</td>\n" +
            "<td>" + p.plz + "</td>\n" +
            "</tr>"
        });

        this.dataTableBody.innerHTML = newInnerHTML;
    }
}