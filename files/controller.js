let dataID = 0;
let selectedPerson;

function addData(dataTableBody){
    const trID = "TR-" + dataID;
    console.log("Pressed!");
    dataTableBody.innerHTML += "<tr id='" + trID + "'" +
        "onClick='loadPerson(\"" +
        trID +
        "\")'>\n " +
        "                    <td></td>\n" +
        "                    <td></td>\n" +
        "                    <td></td>\n" +
        "                </tr>"
    console.log(dataTableBody.innerHTML);
    savePerson("", "", "", trID)
    dataID++;
}

function loadPerson(trID){
    console.log("selected tr:" + trID );
    selectedPerson = getPersonByID(trID);
}

function addDetailViewChangeListener(firstname, name, plz){
    // Object.observe(selectedPerson, function(changes) {
    //     console.log(changes);
    // });
}

function submitPerson(firstname, name, plz){
    savePerson(firstname.value, name.value, plz.value, selectedPerson.id);
}