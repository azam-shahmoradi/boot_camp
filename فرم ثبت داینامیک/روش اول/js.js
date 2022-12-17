let list = [];
var firstName = null;
var lastName = null;
var action = null;
var j;
window.onload = () => {


    document.getElementById("submit").onclick = () => {
        firstName = document.getElementsByName("firstName")[0].value.toString();
        lastName = document.getElementsByName("lastName")[0].value.toString();
        document.getElementsByName("firstName")[0].value = null;
        document.getElementsByName("lastName")[0].value = null;

        if (action == "edit") {
            
            list[j].firstName = firstName;
            list[j].lastName = lastName;
            console.log("edit");
            console.log(list);
            action=null;
            document.getElementById("tbody").innerHTML=null;
            updateTableForEdit(list);
            

        }
        else {
            
            list.push(
                {
                    'firstName': firstName,
                    'lastName': lastName
                }
            );
            updateTable(list);
        }



       
    }

}
function deleteItem(index) {
    list.splice(index, 1);
    updateTableForDelete(list);

}
function editItem(index) {
    console.log(index);
    document.getElementsByName("firstName")[0].value = list[index].firstName.toString();
    document.getElementsByName("lastName")[0].value = list[index].lastName.toString();

    action = "edit";
    j = index;


}
function updateTableForDelete(array) {
    var rowTable = null;
    list.forEach((element, i) => {
        rowTable += '<tr><td>' + (i + 1) + '</td><td>' + element.firstName + '</td><td>' + element.lastName + ' </td><td> <button onclick=deleteItem(' + i + ')> delete </button> <button onclick=editItem(' + i + ')> Edit </button></td></tr>'
    })
    document.getElementById("tbody").innerHTML = rowTable;
}
function updateTable(array) {
    var rowTable = document.getElementById("tbody").innerHTML;
    list.forEach((element, i) => {
        document.getElementById("tbody").innerHTML = rowTable + '<tr><td>' + (i + 1) + '</td><td>' + firstName + '</td><td>' + lastName + ' </td><td> <button onclick=deleteItem(' + i + ')> delete </button> <button onclick=editItem(' + i + ')> Edit </button></td></tr>'
    })
}
function updateTableForEdit(array) {
    
    rowTable="";
    
    array.forEach((element, i) => {

        rowTable += '<tr><td>' + (i + 1) + '</td><td>' + element.firstName + '</td><td>' + element.lastName + ' </td><td> <button onclick=deleteItem(' + i + ')> delete </button> <button onclick=editItem(' + i + ')> Edit </button></td></tr>'

    })
        document.getElementById("tbody").innerHTML = rowTable;

}