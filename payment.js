function openmtn(){
    document.getElementById("mtn").style.height="25rem";
    document.getElementById("mtn").style.paddingBottom="25rem";
    document.getElementById("mtninputs").style.display= "block";
    document.getElementById("nav").style.background="#f1c40f";

    // let paymentMethod = ["airtel", "paypal","bank","crypto","visa","redeemcode"]
    // paymentMethods.forEach(method => {
    //     document.getElementById(method).style.display = "none";
    // });

    document.getElementById("airtel").style.display="none";
    document.getElementById("paypal").style.display="none";
    document.getElementById("bank").style.display="none";
    document.getElementById("crypto").style.display="none";
    document.getElementById("visa").style.display="none";
    document.getElementById("redeemcode").style.display="none";
    
    window.alert("Thank you for choosing MTN")

    // document.getElementById("mtn").style.paddingBottom="25rem";

    // function remove(){
    //     document.getElementById("mtn").style.height="0rem";
    // }
}

function openairtel(){
    document.getElementById("airtel").style.height="25rem";
    document.getElementById("Airtelinputs").style.display= "block";
    document.getElementById("nav").style.background="red";

    document.getElementById("mtn").style.display="none";
    document.getElementById("paypal").style.display="none";
    document.getElementById("bank").style.display="none";
    document.getElementById("crypto").style.display="none";
    document.getElementById("visa").style.display="none";
    document.getElementById("redeemcode").style.display="none";
}

function openpaypal(){
    document.getElementById("paypal").style.height="25rem";
    document.getElementById("paypalinputs").style.display= "block";
    document.getElementById("nav").style.background="rgb(68, 156, 220)";

    document.getElementById("airtel").style.display="none";
    document.getElementById("mtn").style.display="none";
    document.getElementById("bank").style.display="none";
    document.getElementById("crypto").style.display="none";
    document.getElementById("visa").style.display="none";
    document.getElementById("redeemcode").style.display="none";
}

function openbank(){
    document.getElementById("bank").style.height="fit-content";
    document.getElementById("bankinputs").style.display= "block";
    document.getElementById("nav").style.background="rgb(20, 83, 165)";

    document.getElementById("airtel").style.display="none";
    document.getElementById("paypal").style.display="none";
    document.getElementById("mtn").style.display="none";
    document.getElementById("crypto").style.display="none";
    document.getElementById("visa").style.display="none";
    document.getElementById("redeemcode").style.display="none";
}

function opencrypto(){
    document.getElementById("crypto").style.height="25rem";
    document.getElementById("cryptoinputs").style.display= "block";
    document.getElementById("nav").style.background="rgb(171, 99, 24)";

    document.getElementById("airtel").style.display="none";
    document.getElementById("paypal").style.display="none";
    document.getElementById("bank").style.display="none";
    document.getElementById("mtn").style.display="none";
    document.getElementById("visa").style.display="none";
    document.getElementById("redeemcode").style.display="none";
}

function openvisa(){

    // document.getElementById("visa").style.height="50rem";

    document.getElementById("visa").style.width="60rem";
    document.getElementById("visainputs").style.display= "block";
    document.getElementById("payButton").style.display= "block";
    document.querySelector(".CardDetails").style.display="block";

    document.getElementById("airtel").style.display="none";
    document.getElementById("paypal").style.display="none";
    document.getElementById("bank").style.display="none";
    document.getElementById("crypto").style.display="none";
    document.getElementById("mtn").style.display="none";
    document.getElementById("redeemcode").style.display="none";
}

function openredeem(){
    document.getElementById("redeemcode").style.height="20rem";
    document.getElementById("codeinputs").style.display= "block";


    document.getElementById("airtel").style.display="none";
    document.getElementById("paypal").style.display="none";
    document.getElementById("bank").style.display="none";
    document.getElementById("crypto").style.display="none";
    document.getElementById("visa").style.display="none";
    document.getElementById("mtn").style.display="none";
}

// --------removingmousebackdefault------------

// document.getElementById("mtn").addEventListener("mouseout", function () {
//     document.getElementById("payment").style.backgroundColor="blue";
//     });
    // --------------------getting userinputs--------------
 function updateCard (){

     var CardInputNumber = document.getElementById("cardOwnerNumber").value;
     const cardName = document.getElementById("cardOwnerName").value;
     const cardCvvNumber = document.getElementById("cardCvvNumber").value;
     const cardExpiry = document.getElementById("cardExpiryDate").value;
 

    document.getElementById("cardNumber").textContent = CardInputNumber;
    document.getElementById("cardValiddate").textContent = cardExpiry;
    document.getElementById("cardOwner").textContent = cardName;
    document.getElementById("cardCvv").textContent = cardCvvNumber;
  
 }

 document.getElementById("cardOwnerNumber").addEventListener('input', updateCard);

    document.getElementById("cardOwnerName").addEventListener('input', updateCard);

    document.getElementById("cardCvvNumber").addEventListener('input', updateCard);

    document.getElementById("cardExpiryDate").addEventListener('input', updateCard);


//     const players =[

// {name: "twariq" ,score: 29},
// {name: "semana" ,score: 10},
// {name: "ali" ,score: 6},
//     ];
//     for (let player of players){

//         console.log(player.name, player.score);
//     }
    