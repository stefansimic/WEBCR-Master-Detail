let dataID = 0;
let selectedPerson;
let personObserver;
let personListObserver;
const model = {savePerson, getPersonByID, persons};

function addDetailViewChangeListener(firstnameElem, nameElem, plzElem, ortElem) {
    personObserver = new PersonObserver(firstnameElem, nameElem, plzElem, ortElem);
}

function addTableDataChangeListener(dataTableBody) {
    personListObserver = new PersonListObserver(dataTableBody);
}

function addData(dataTableBody){
    const trID = "TR-" + dataID;

    model.savePerson("", "", "", "", trID)

    selectedPerson = model.getPersonByID(trID);
    personObserver.next(selectedPerson);

    dataID++;
    personListObserver.next(model.persons);
}

function loadPerson(trID){
    selectedPerson = model.getPersonByID(trID);
    personObserver.next(selectedPerson);
}

function submitPerson(firstname, name, plz, ort) {
    model.savePerson(firstname, name, plz, ort, selectedPerson.id);
    personListObserver.next(model.persons);
}

class PersonObserver {
    firstnameElem;
    nameElem;
    plzElem;
    ortElem;

    constructor(firstnameElem, nameElem, plzElem, ortElem) {
        this.firstnameElem = firstnameElem;
        this.nameElem = nameElem;
        this.plzElem = plzElem;
        this.ortElem = ortElem;
    }

    next(data) {
        this.firstnameElem.value = data?.firstName ? data?.firstName : "";
        this.nameElem.value = data?.name ? data?.name : "";
        this.plzElem.value = data?.plz ? data?.plz : "";
        this.ortElem.value = data?.ort ? data?.ort : "";
    }
}

class PersonListObserver {
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