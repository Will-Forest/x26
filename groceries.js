
var myList = [];
var listSet;
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function addItem() {
var input = document.getElementById("newItem").value;
var list =  document.getElementById("listDisplay");
var item = document.createElement("li");
var btnClose = document.createElement("button");
var iconClose = document.createElement("span");
var itemName = document.createTextNode(input);
iconClose.classList.add("glyphicon");
iconClose.classList.add("glyphicon-remove");
btnClose.classList.add("btn");
btnClose.classList.add("btn-danger");
btnClose.classList.add("btn-xs");
btnClose.appendChild(iconClose);
btnClose.addEventListener("click", removeParentListItem);
if (myList.indexOf(input) == -1) {
  item.appendChild(itemName);
  item.appendChild(btnClose);
  list.appendChild(item);
  document.getElementById("newItem").value = "";
  myList.push(input);
  console.log(myList);
}
}
function removeParentListItem() {
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  var itemRemove = mom.firstChild.textContent;
  var itemIndex = myList.indexOf(itemRemove);
  grandma.removeChild(mom);
  myList.splice(itemIndex, 1);
  console.log(myList);

}
function saveList() {
  //courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
    listSet = myList.toString()
  setCookie("groceries", listSet,31.00);
}

function clearList() {
  var list =  document.getElementById("listDisplay");
  list.innerHTML= "";
  myList= [];
  console.log(list)
}
