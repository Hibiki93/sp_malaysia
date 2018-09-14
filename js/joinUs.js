// window.onload = data();

// function submit() {
//     console.log('I am runing!!!')
//     let data = {
//         first_name = document.getElementById("first_name").value,
//         last_name = document.getElementById("last_name").value,
//         company_name = document.getElementById("company").value,
//         email = document.getElementById("email").value,
//         country = document.getElementById("conutry").value,
//         street_address = document.getElementById("street_address").value,
//         city = document.getElementById("city").value,
//         zipCode = document.getElementById("zipCode").value,
//         phone_number = document.getElementById("phone_number").value,
//         comment = document.getElementById("comment")
//     }
//     if (data != null) {
//         alert('Successfull Submit!')
//     } else {
//         alert('Please fill up form before your submit')
//     }

// }

var form = document.getElementById('joinUs');
form.onsubmit = function(e) {
    e.preventDefault();
    console.log(form.first_name.value)
}