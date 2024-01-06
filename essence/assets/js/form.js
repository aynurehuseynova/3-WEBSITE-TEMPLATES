/////// form 
const namee = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const myForm = document.getElementById("myForm")

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    axios.post("https://655ddd779f1e1093c59a0b08.mockapi.io/form", {
        name: namee.value,
        subject: subject.value,
        email: email.value,
    })
        .then(response => {
            console.log(response.data);
        })
});
