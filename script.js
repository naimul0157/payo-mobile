
    // login button functionality
document.getElementById('login-button').addEventListener('click', function(e){
    e.preventDefault()
    // verify number for the login form
    const mobileNumber = "01731620157";
    const pinNumber = 1234;
    const userNumber = document.getElementById("user-number").value;
    const userPinNUmber = document.getElementById('user-pin').value;
    console.log(userPinNUmber);
    if(userNumber == mobileNumber && userPinNUmber == pinNumber){
        window.location.href = 'home.html';
         document.getElementById('user-number').value = '';
        document.getElementById('user-pin').value = '';
    }
    else{
        const invalid = document.getElementById('form-container');
        const newMessage = document.createElement('p');
        newMessage.style.color = 'red';
        newMessage.innerText = 'invalid pin or number';
        if(userPinNUmber != pinNumber && userNumber != mobileNumber){
            document.getElementById('user-number').value = '';
            document.getElementById('user-pin').value = '';
        }
        else if(userNumber != mobileNumber){

            document.getElementById('user-number').value = '';
        }
        else if(userPinNUmber != pinNumber){

            document.getElementById('user-pin').value = '';
        }
      
        invalid.append(newMessage);
    }
})

