//MAIL

//ask the client for an email.
let existingMails = ["pippo@gmail.com","pluto@gmail.com","paperino@gmail.com"]
//let mail = prompt("HEY ! Who are you ? Insert your email here..")
let checkMail = false;

//console.log(mail);

//check email in the list.
/* for (let index = 0; index < existingMails.length; index++)
{
    const check = existingMails[index];
    //IF is in the list alert welcome.
    if (check === mail)
    {
        checkMail = true 
    }
    //ELSE you are not in the list.
    else
    {
        
    }
    
}

if (checkMail === true)
{
    //alert("WELCOME BACK BROH")
}
else 
{
    //alert("You shall not pass..! cit.")
} */



//DICE

//generate a random number 1 - 6 for the player.
let player = Math.random() * (6 - 1) + 1;
//console.log(typeof player);
player = Number(player.toFixed(0));
//console.log("Player roll: " + player);

//generate a random number 1 - 6 for the npc.
let npc = Math.random() * (6 - 1) + 1;
npc = Number(npc.toFixed(0));
//console.log("Table roll: " + npc);

//chose the winner(higher number).
let numbers = []; //useless but i had another plane before
numbers.push(player); //useless but i had another plane before
numbers.push(npc); //useless but i had another plane before
//console.log(numbers);

if ( npc === player)
{
    //console.log("Same result, usually table win, but reroll..");
    //alert("Table roll: " + npc + " Player roll: " + player + " Same result, usually table win, but reroll..");//alert with the winner.
}
else if (npc > player)
{
    //console.log("Table win..UNLUCKY!");
    //alert("Table roll: " + npc + " Player roll: " + player + " Table win..UNLUCKY!");//alert with the winner.
}
else if (player > npc)
{
    //console.log("Player win..YOU GOT MONEY!");
    //alert("Table roll: " + npc + " Player roll: " + player + " Player win..YOU GOT MONEY!");//alert with the winner.
}


//BONUS

//variables and take it from HTML
let htmlMail = document.getElementById("email");
let checkMe = document.getElementById("check_me");
let resultBox = document.querySelector(".result");

//take value when click
checkMe.addEventListener("click", function () 
{
    let htmlMailValue = htmlMail.value ;
    console.log(htmlMailValue);

    for (let index = 0; index < existingMails.length; index++)
    {
        const check = existingMails[index];
        
        if (check === htmlMailValue)
        {
            checkMail = true
        }
        
        else
        {

        }

    }

    if (checkMail === true)
    {
        let resultMail = document.createElement("div");
        resultMail.innerText = ("WELCOME BACK BROH!");
        resultBox.appendChild(resultMail);
    }
    else
    {
        let resultMail = document.createElement("div");
        resultMail.innerText = ("YOU SHALL NOT PASS...");
        resultBox.appendChild(resultMail);
    }
}   
);