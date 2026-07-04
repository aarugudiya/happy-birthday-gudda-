function scrollToLetter() {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
}

const message = `

Dear Salman ❤️,

Happy Birthday to my Gudda...

12 July will always be special because it gave this world my favourite person.

Thank you for always supporting me.
Thank you for making me stronger.
Thank you for being my safe place.

No matter how far we are...

You'll always be my Raja Beta,
my First Baby,
my Salman.

If I could ask for just one birthday gift...

It would be one tight huggie from you. 🫂

I Love You.
Miss You. 🥺

Always Yours,

Aaru Beti
Your Gudiya
Your Rani ❤️

`;

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

window.onload = typeWriter;
