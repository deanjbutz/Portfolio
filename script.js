var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

var contact = document.getElementById("myContact");
var btn2 = document.getElementById("formbutton-button");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
    contact.style.display = "block";
};

span2.onclick = function() {
    contact.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == contact) {
        contact.style.display = "none";
    }
};