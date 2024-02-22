//MAIL

//ask the client for an email.
let existingMails = ["pippo@gmail.com","pluto@gmail.com","paperino@gmail.com"]
let mail = prompt("HEY ! Who are you ? Insert your email here..")

console.log(mail);

//check email in the list.
for (let index = 0; index < existingMails.length; index++)
{
    const check = existingMails[index];
    //IF is in the list alert welcome.
    if (check === mail)
    {
        alert("WELCOME BACK BROH")
    }
    //ELSE you are not in the list.
    else if (check !== mail)
    {
        alert("You shall not pass..! cit.") 
    }
    
}



//DICE

//generate a random number 1 - 6 for the player.
//generate a random number 1 - 6 for the npc.
//chose the winner(higher number).
//alert with the winner.