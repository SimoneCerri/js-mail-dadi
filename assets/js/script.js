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
//console.log(typeof player);

//generate a random number 1 - 6 for the npc.
let npc = Math.random() * (6 - 1) + 1;
npc = Number(npc.toFixed(0));
//console.log(npc);

//chose the winner(higher number).
let numbers = [0];
numbers.push(player);
numbers.push(npc);
console.log(numbers);
//alert with the winner.