let i = 0;

const message = `

Dear Laddu ❤️,

Happy Birthday...

12 July sirf tumhara birthday nahi hai...
Ye wo din hai jis din meri zindagi ka sabse pyara insaan is duniya me aaya tha.

Pata hai...
Kabhi kabhi mujhe lagta hai ki itni door hokar bhi tum mere dil ke itne kareeb kaise ho.

Thank you...
Har us smile ke liye jo tumne mujhe di.
Har us hasi ke liye jo meri wajah se tumhare chehre par aayi.
Har us pal ke liye jab tumne mujhe mehsoos karaya ki main akeli nahi hoon.

Aaj bhi tumhari ek baat mere dil me hamesha ke liye bas gayi hai...

"Meri beti ko kabhi akela nahi hone dunga."

Shayad tumhe yaad bhi na ho...
Lekin mujhe tumhari har chhoti si baat yaad hai.

Tumhari pyaari si chummiyan...
Tumhari huggies...
Aur sabse zyada...
Tumhari baahon me sukoon se so jana.

Sach kahun...
Us waqt lagta tha ki puri duniya me usse zyada safe jagah koi nahi thi.

Kaash...
Aaj main tumhare paas hoti.

Sabse pehle tumhe itni zor se hug karti ki shayad tum mujhe chhodte hi nahi...

Phir tumhe bahut saari chummiyan deti...
Aur tumhara poora birthday itna special banati ki tum hamesha yaad rakhte.

Na mujhe koi mehenga gift chahiye...
Na koi surprise...

Mujhe sirf tumhara pyaar chahiye...
Tumhara saath chahiye...
Tumhari huggies...
Tumhari chummiyan...

Aur bas itna...
Ki zindagi bhar tumhare saath chal saku.

Main har din bas yehi dua karti hoon...

Tum hamesha khush raho...
Hamesha muskurao...
Tumhare saare sapne poore ho...

Aur agar meri ek wish kabhi poori ho...

To main sirf tumhara haath pakadkar poori zindagi chalna chahti hoon.

Aur jaate jaate...

Ek baat dil se kehna chahti hoon...

Tumhara Betu ab sudhar gaya hai, Salman...

Please...
Wapas aa jao...

Mujhe tumhari baahon me aana hai... 🥺❤️

Happy Birthday,
Mere Laddu...
Mere Raja Beta...
Mere First Baby...
Mere Salman... ❤️

I Love You.

I Miss You.

Hamesha tumhari khushi ki dua karne wali...

Tumhari Aaru Beti ❤️

`;

function scrollToLetter() {

    const letter = document.getElementById("letter");

    letter.style.display = "block";

    document.getElementById("typewriter").innerText = message;

    setTimeout(() => {
        letter.classList.add("show");
        letter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

}
function startConfetti() {

    const duration = 10000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 3,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 3,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}
const voiceNote = document.getElementById("voiceNote");
const birthdaySong = document.getElementById("birthdaySong");
const song2 = document.getElementById("song2");

document.getElementById("surpriseBtn").addEventListener("click", async function () {
    try {
        await voiceNote.play();
    } catch (e) {
        alert("Audio couldn't start.");
        console.log(e);
    }
});


voiceNote.addEventListener("ended", function () {
    birthdaySong.play();
});

birthdaySong.addEventListener("ended", function () {
    song2.play();
});
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


const videos = [
  "images/Screenrecording_20251225_170725.mp4",
  "images/Screenrecording_20260121_220104.mp4",
  "images/VID_20251130_173830_971.mp4"
];

let currentVideo = 0;

const player = document.getElementById("memoryVideo");

player.src = videos[currentVideo];
player.play();
player.addEventListener("ended", function () {
  currentVideo++;

  if (currentVideo < videos.length) {
    player.src = videos[currentVideo];
    player.play();
  }
});
let currentPhoto = 0;

const nextMemory = document.getElementById("nextMemory");

const slideshow = document.getElementById("slideshow");

function showNextPhoto() {
  currentPhoto = (currentPhoto + 1) % photos.length;
  slideshow.src = photos[currentPhoto];
}

setInterval(showNextPhoto, 3000);

if (nextMemory) {
  nextMemory.onclick = showNextPhoto;
}
