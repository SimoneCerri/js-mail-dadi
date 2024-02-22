//MAIL

//ask the client for an email.
let existingMails = ["pippo@gmail.com","pluto@gmail.com","paperino@gmail.com"]
let mail = prompt("HEY ! Who are you ? Insert your email here..")

console.log(mail);

for (let index = 0; index < existingMails.length; index++)
{
    const check = existingMails[index];
    if (check === mail)
    {
        alert("WELCOME BACK BROH")
    }
    else 
    {
        alert("You shall not pass..! cit.")
    }
    
}

