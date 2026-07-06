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
"images/Gemini_Generated_Image_u3zgawu3zgawu3zg.png",
"images/IMG-20251003-WA0000.jpg",
"images/IMG-20251008-WA0050.jpg",
"images/IMG-20251229-WA0044.jpg",
"images/IMG-20260122-WA0078.jpg",
"images/IMG-20260321-WA0020.jpg",
"images/IMG-20260427-WA0004.jpg",
"images/IMG-20260526-WA0032.jpg",
"images/IMG_20260406_215949_823.jpg",
"images/IMG_20260406_220120_357.jpg",
"images/IMG_20260406_220131_660.jpg",
"images/IMG_20260414_144841.jpg",
"images/Screenshot_20251225_141624.jpg",
"images/Screenshot_20251225_164449.jpg",
"images/Screenshot_20251227_151506.jpg",
"images/Screenshot_20260207_221542.jpg",
"images/Screenshot_20260509_011628.jpg",
"images/Screenshot_20260514_025530.jpg",
"images/Screenshot_20260522_022454.jpg",
"images/Screenshot_20260522_161314.jpg",
"images/Screenshot_20260524_233722.jpg",
"images/Snapchat-1711592191.jpg",
"images/file_0000000005f071fd89cdeb78db13a8fd.png",
"images/file_000000003aa871fd945b3b2506eda5c7.png"
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
const videos = [
  "images/Screenrecording_20251225_170725.mp4",
  "images/Screenrecording_20260121_220104.mp4",
  "images/VID_20251130_173830_971.mp4"
];

let currentVideo = 0;

const player = document.getElementById("memoryVideo");

player.src = videos[currentVideo];

player.addEventListener("ended", function () {
  currentVideo++;

  if (currentVideo < videos.length) {
    player.src = videos[currentVideo];
    player.play();
  }
});
document.getElementById("nextMemory").addEventListener("click", function () {

  currentPhoto++;

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  document.getElementById("slideshow").src = photos[currentPhoto];

});
const nextMemory = document.getElementById("nextMemory");

if (nextMemory) {
  nextMemory.addEventListener("click", function () {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
      currentPhoto = 0;
    }

    document.getElementById("slideshow").src = photos[currentPhoto];

  });
}
