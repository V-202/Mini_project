function delete_user() {

    var td_d = event.target.parentNode;
    var tr_D = td_d.parentNode;
    tr_D.parentNode.removeChild(tr_D);

}

function validation(mail) {
    var email = document.getElementById("mail");
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email == " ") {
        alert('This cannot be empty');
    } else if (reg.test(email) == false) {
        alert('Invalid Email Address');
    }
}

function add_details() {
    var table = document.getElementById("result");

    var Name = document.getElementById("name").value;
    var mob_no = document.getElementById("mob").value;
    var email = document.getElementById("mail").value;

    var tr = document.createElement("TR");

    var td = document.createElement("TD");
    var input_1 = document.createTextNode(Name);
    td.appendChild(input_1);
    tr.appendChild(td);

    var td_2 = document.createElement("TD");
    var input_2 = document.createTextNode(mob_no);
    td_2.appendChild(input_2);
    tr.appendChild(td_2);

    var td_3 = document.createElement("TD");
    var input_3 = document.createTextNode(email);
    td_3.appendChild(input_3);
    tr.appendChild(td_3);

    var td_4 = document.createElement("TD");
    var delete_btn = document.createElement("Button");
    var text_btn = document.createTextNode("Delete")
    delete_btn.appendChild(text_btn);
    delete_btn.setAttribute("onclick", "delete_user()");
    td_4.appendChild(delete_btn);

    tr.appendChild(td_4);

    table.appendChild(tr);



}