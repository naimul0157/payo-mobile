// login button functionality
document.getElementById('login-button').addEventListener('click', function(e){
    e.preventDefault()
    // verify number for the login form
    const mobileNumber = 1731620157;
    const pinNumber = 1234;
    const userNumber = document.getElementById("user-number").value;
    const userPinNUmber = document.getElementById('user-pin').value;
    console.log(userPinNUmber);
    if(userNumber == mobileNumber && userPinNUmber == pinNumber){
        window.location.href = 'home.html'
    }
    else{
        const invalid = document.getElementById('form-container');
        const newMessage = document.createElement('p');
        newMessage.style.color = 'red';
        newMessage.innerText = 'invalid pin and number';
        document.getElementById('user-number').value = '';
        document.getElementById('user-pin').value = '';
        invalid.append(newMessage);
    }

})