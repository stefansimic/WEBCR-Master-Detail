function addData(){
    console.log("Pressed!");
    let dataTableBody = document.getElementById("dataTableBody");
    dataTableBody.innerHTML += "<tr>\n" +
        "                    <td></td>\n" +
        "                    <td></td>\n" +
        "                    <td></td>\n" +
        "                </tr>"
    console.log(dataTableBody.innerHTML);
}