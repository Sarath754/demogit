let accountDetails = {

    userone: { acno: 1000, name: "Sarath", balance: 10000, username: "userone", password: "testuser", history: [] },
    usertwo: { acno: 1001, name: "prayag", balance: 20000, username: "usertwo", password: "testuser1", history: [] },
    userthree: { acno: 1002, name: "Raina", balance: 25000, username: "userthree", password: "testuser2", history: [] },


};


const authenticateuser = (username, password) => {        //static login===bank.login in html call cheyan vendi

    let dataset = accountDetails;

    if (username in dataset) {
        if (dataset[username].password == password) {

            return 1;


        }
        else {
            return 0;
            
        }
    }
    else {

        return -1;
      
    }

}





  const deposit = (username, amount) => {

    // let user = authenticateuser(username, password);

    // if (user == 1) {


        accountDetails[username].balance += amount

        accountDetails[username].history.push({

            amount: amount,
            typeOfTransaction: "credit"

        })
        
           return {balance:accountDetails[username].balance,
           
          message: "your accont has been credited with" + amount + "newbalance" + accountDetails[username].balance}

    }

//     else {
//         return {message:"invalid credits"}
//     }


// }


const withdraw = (username,  amount) => {

    // let user = authenticateuser(username, password);

    // if (user == 1) {

        console.log(accountDetails[username].balance)

        if (accountDetails[username].balance < amount) {

            return{ message:"insufficient balance"}
        }



        accountDetails[username].balance -= amount

        accountDetails[username].history.push({

            amount: amount,
            typeOfTransaction: "debit"

        });

        
     return {balance:accountDetails[username].balance,message: "your account has been debited with" + amount + "newbalance" + accountDetails[username].balance}
    
    
}

//     else {

//         return {message:"invalid details"}
//     }

// }


const history=(username,password )=>{

//     let user=authenticateuser(username,password);

// if(user==1){

    return accountDetails[username].history
 
}

// else{  

//     return [];
// }

// }




  
module.exports={

    authenticateuser,
    deposit,withdraw,history

}