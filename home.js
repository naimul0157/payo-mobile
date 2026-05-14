            // logout to index page
    document.getElementById("logout-hompage").addEventListener('click', function(){
        window.location.href = 'index.html';
        // console.log("hello");
    })

    // add money button work

    document.getElementById("add-money").addEventListener('click', function(){
        // e.preventDefault();
        // add money collect data from input field
        let bank = document.getElementById("bank").value;     //collect bank name
        const accountNumber = document.getElementById("account-number").value;  //collect account number
        const amountToAdd = parseInt(document.getElementById("amount-to-add").value);     //collect amount to add
        const pin = document.getElementById('pin').value;   //collect pin number
        // console.log(bank, accountNumber, amountToAdd, pin);

        // get the initial ammount
        const pinNumber = 1234;
        const accountnumber = 12345678901;
        if(pinNumber == pin && accountNumber == accountnumber){
         
        let initialAmount = parseInt(document.getElementById('initial-amount').innerText);
        initialAmount = initialAmount + amountToAdd;
        document.getElementById('initial-amount').innerText = initialAmount;
            // after adding the money reinitialized the fields

            document.getElementById("bank").value = '';
            document.getElementById("account-number").value = '';
            document.getElementById("amount-to-add").value = '';
            document.getElementById('pin').value = ''; 
        }
        else{
            const addmoneyContainer = document.getElementById("Add-money-container");
        const newMessage = document.createElement('p');
        newMessage.style.color = 'red';
        newMessage.innerText = 'invalid';
        addmoneyContainer.replaceChildren(newMessage);
        }

    })