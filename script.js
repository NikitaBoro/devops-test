
const button = document.querySelector('.btn')
const input = document.querySelector('.input-name')
const message = document.getElementById('msg')

button.onclick = function(){
    const name = input.value.trim();
    const lettersOnly = /^[A-Za-z\s]+$/;

    if (name===""){
        message.textContent="Please enter name";
        message.style.color="red";
    } else if (!lettersOnly.test(name)) {
        message.textContent = "Name must contain only letters";
        message.style.color = "red";
    }else {
        window.location.href = `Greetings.html?name=${encodeURIComponent(name)}`;
    }
}