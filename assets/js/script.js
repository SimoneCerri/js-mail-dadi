//MAIL

//ask the client for an email.
let existingMails = ["pippo@gmail.com","pluto@gmail.com","paperino@gmail.com"]
let mail = prompt("HEY ! Who are you ? Insert your email here..")
let checkMail = false;

console.log(mail);

//check email in the list.
for (let index = 0; index < existingMails.length; index++)
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
    alert("WELCOME BACK BROH")
}
else 
{
    alert("You shall not pass..! cit.")
}



//DICE

//generate a random number 1 - 6 for the player.
let player = Math.random() * (6 - 1) + 1;
//console.log(typeof player);
player = Number(player.toFixed(0));
console.log("Player roll: " + player);

//generate a random number 1 - 6 for the npc.
let npc = Math.random() * (6 - 1) + 1;
npc = Number(npc.toFixed(0));
console.log("Table roll: " + npc);

//chose the winner(higher number).
let numbers = [];
numbers.push(player);
numbers.push(npc);
//console.log(numbers);

if ( npc === player)
{
    console.log("Same result, usually table win, but reroll..");
    alert("Table roll: " + npc + " Player roll: " + player + " Same result, usually table win, but reroll..");
}
else if (npc > player)
{
    console.log("Table win..UNLUCKY!");
    alert("Table roll: " + npc + " Player roll: " + player + " Table win..UNLUCKY!");
}
else if (player > npc)
{
    console.log("Player win..YOU GOT MONEY!");
    alert("Table roll: " + npc + " Player roll: " + player + " Player win..YOU GOT MONEY!");
}
//alert with the winner.