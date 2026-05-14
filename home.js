            // logout to index page
    document.getElementById("logout-hompage").addEventListener('click', function(){
        window.location.href = 'index.html';
        // console.log("hello");
    })
    // add money style
    document.getElementById("add-money-form").addEventListener('mouseover', function(){
        document.getElementById('add-money-form').style.backgroundColor = 'gray'
        document.getElementById('add-money-form').style.cursor = 'pointer'
    }
)
       document.getElementById("add-money-form").addEventListener('mouseleave', function(){
        document.getElementById('add-money-form').style.backgroundColor = 'initial'
    }
)
    // cashout money style
     document.getElementById("cashout-form").addEventListener('mouseover', function(){
        document.getElementById('cashout-form').style.backgroundColor = 'gray'
        document.getElementById('cashout-form').style.cursor = 'pointer'
    }
)
       document.getElementById("cashout-form").addEventListener('mouseleave', function(){
        document.getElementById('cashout-form').style.backgroundColor = 'initial'
    }
)

    // add money button work
    document.getElementById("add-money-form").addEventListener('click', function(){
        document.getElementById("add-money-list").style.display = 'block';
        document.getElementById('cashout-money-container').style.display = 'none';
    })
    // cashout money button to work
      document.getElementById("cashout-form").addEventListener('click', function(){
        document.getElementById("add-money-list").style.display = 'none';
        document.getElementById('cashout-money-container').style.display = 'block';
    })
    //add money all funtion added
    document.getElementById("add-money").addEventListener('click', function(){
        // e.preventDefault();
        // add money collect data from input field
        let bank = document.getElementById("bank").value;     //collect bank name
        const accountNumber = document.getElementById("account-number").value;  //collect account number
        const amountToAdd = parseFloat(document.getElementById("amount-to-add").value);     //collect amount to add
        const pin = document.getElementById('pin').value;   //collect pin number
        // console.log(bank, accountNumber, amountToAdd, pin);

        // get the initial ammount
        const pinNumber = 1234;
        const accountnumber = 12345678901;
        if(pinNumber == pin && accountNumber == accountnumber){
         
        let initialAmount = parseFloat(document.getElementById('initial-amount').innerText);
        initialAmount = initialAmount + amountToAdd;
        document.getElementById('initial-amount').innerText = initialAmount;
            // after adding the money reinitialized the fields

            document.getElementById("bank").value = '';
            document.getElementById("account-number").value = '';
            document.getElementById("amount-to-add").value = '';
            document.getElementById('pin').value = ''; 
        }
        else{
        const addmoneyContainer = document.getElementById("error-message");
        const newMessage = document.createElement('p');
        newMessage.style.color = 'red';
        newMessage.innerText = 'invalid';
        addmoneyContainer.replaceChildren(newMessage);
        }

    })

    // cashout or withdraw money function 

    document.getElementById('withdraw-money').addEventListener('click', function(){
        const agentNumber = document.getElementById("agent-number").value;
        const CashoutAmount = parseFloat(document.getElementById('cashout-amount').value);
        const pin = document.getElementById('pinNumber').value;
        console.log(agentNumber, CashoutAmount, pin);
    })