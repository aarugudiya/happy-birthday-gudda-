let i = 0;

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

function scrollToLetter() {

    document.getElementById("letter").style.display = "block";

    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

    if (i === 0) {
        document.getElementById("typewriter").innerHTML = "";
        typeWriter();
    }
}

function typeWriter() {

    if (i < message.length) {

        document.getElementById("typewriter").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}
const photos = [
  "images/1763313051800.jpg",
  "images/IMG-20251003-WA0000.jpg",
  "images/IMG-20251008-WA0050.jpg",
  "images/IMG-20251229-WA0044.jpg",
  "images/IMG-20260122-WA0078.jpg",
  "images/IMG-20260321-WA0020.jpg",
  "images/IMG-20260427-WA0004.jpg",
  "images/IMG-20260526-WA0032.jpg"
];

let currentPhoto = 0;

setInterval(function () {
  const img = document.getElementById("slideshow");

  if (img) {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
      currentPhoto = 0;
    }

    img.src = photos[currentPhoto];
  }
}, 3000);
