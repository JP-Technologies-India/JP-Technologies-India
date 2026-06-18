const mhMenuBtn=document.querySelector(".mh-menu-btn");
const mhMobileMenu=document.querySelector(".mh-mobile-menu");
const mhCloseBtn=document.querySelector(".mh-mobile-top i");
const mhDrop=document.querySelector(".mh-mobile-dropdown span");

mhDrop.onclick=()=>{
    document.querySelector(".mh-mobile-dropdown").classList.toggle("active");
}

mhMenuBtn.onclick=()=>{
    mhMobileMenu.classList.add("active");
}

mhCloseBtn.onclick=()=>{
    mhMobileMenu.classList.remove("active");
}
//Changing Text
const words = [
    "TODAY.",
    "TOMORROW.",
    "DIGITALLY.",
    "TOGETHER."
];

let i = 0;

const changingText = document.querySelector(".mh-changing-text");

setInterval(() => {
    i = (i + 1) % words.length;
    changingText.textContent = words[i];
}, 1500);

//Services Page Card Slideshow
const mhProjects = [

  {
    image:"https://api.iconify.design/fluent-emoji-flat/technologist.svg",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎ IT CONSULTING",
    desc:"Transform your business with expert IT consulting, technology strategy, digital transformation, cloud solutions, cybersecurity guidance, and scalable IT infrastructure planning.",
    btn1:{label:"Learn More",url:"#"}
  },

  {
    image:"https://api.iconify.design/fluent-emoji-flat/laptop.svg",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ Web Development",
    desc:"We design and develop fast, secure, and responsive websites tailored to businesses, startups, and personal brands using modern web technologies.",
    btn1:{label:"Learn More",url:"#"}
  },

  {
    image:"https://api.iconify.design/fluent-emoji-flat/mobile-phone.svg",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎‎ Mobile App Deveopment",
    desc:"Build powerful Android and cross-platform mobile applications with intuitive user experiences, scalable architecture, and high performance.",
    btn1:{label:"Learn More",url:"#"}
  },

  {
    image:"https://api.iconify.design/fluent-emoji-flat/cloud.svg",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎ ‎ ‎‎ ‎‎ ‎‎ Cloud Solutions",
    desc:"Deploy, manage, and optimize cloud infrastructure for businesses with secure, scalable, and cost-effective cloud computing services.",
    btn1:{label:"Learn More",url:"#"}
  },
  {
    image:"https://api.iconify.design/fluent-emoji-flat/artist-palette.svg",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎‎‎ ‎‎ ‎‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎‎ ‎‎ ‎‎‎‎ ‎‎ ‎‎  ‎‎ ‎ ‎ ‎ UI/UX DESIGN",
    desc:"Create visually appealing and user-friendly digital experiences through modern interface design, user research, and interactive prototyping.",
    btn1:{label:"Learn More",url:"#"}
  },
{
    image:"https://api.iconify.design/fluent-emoji-flat/graduation-cap.svg",
    title:"‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎ ‎‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Internship",
    desc:"Industry-oriented internship programs and practical training designed to equip students with real-world skills in software development and emerging technologies.",
    btn1:{label:"Learn More",url:"#"}
  }
];

const mhTrack = document.getElementById("mhProjectTrack");
const mhDots = document.getElementById("mhProjectDots");
const mhPrevBtn = document.getElementById("mhPrevBtn");
const mhNextBtn = document.getElementById("mhNextBtn");

let mhCurrent = 0;

function mhRenderProjects(){

  mhTrack.innerHTML = "";
  mhDots.innerHTML = "";

  mhProjects.forEach((project,index)=>{

    const card = document.createElement("div");

    card.className =
      "mh-project-card" +
      (index === mhCurrent ? " mh-project-active" : "");

    card.innerHTML = `

<div class="mh-project-image">
  <img src="${project.image}" alt="${project.title}" class="mh-project-image-tag">
</div>

      <div class="mh-project-body">

        <div class="mh-project-card-title">
          ${project.title}
        </div>

        <div class="mh-project-description">
          ${project.desc}
        </div>

        <div class="mh-project-actions">

  <a href="${project.btn1.url}"
class="mh-project-btn mh-project-btn-primary mh-project-full-btn">

${project.btn1.label}
<i class="fa-solid fa-arrow-right"></i>

</a>

</div>
    `;

    card.addEventListener("click",()=>{
      mhCurrent = index;
      mhUpdateCarousel();
    });

    mhTrack.appendChild(card);

    /* DOTS */

    const dot = document.createElement("div");

    dot.className =
      "mh-project-dot" +
      (index === mhCurrent ? " mh-project-active" : "");

    dot.addEventListener("click",()=>{
      mhCurrent = index;
      mhUpdateCarousel();
    });

    mhDots.appendChild(dot);

  });

}

function mhUpdateCarousel(){

  mhRenderProjects();

  const firstCard = mhTrack.children[0];

  if(!firstCard) return;

  const cardWidth = firstCard.offsetWidth + 20;

  const containerWidth =
    mhTrack.parentElement.offsetWidth;

  let offset =
    mhCurrent * cardWidth -
    (containerWidth / 2 - cardWidth / 2);

  if(window.innerWidth <= 768){
    offset = mhCurrent * (firstCard.offsetWidth + 12);
  }
const extraPadding = 40;

const trackMax =
  mhTrack.scrollWidth -
  containerWidth +
  extraPadding;

offset = Math.max(
  0,
  Math.min(offset, trackMax)
);

  mhTrack.style.transform =
    `translateX(-${offset}px)`;

  mhPrevBtn.disabled = mhCurrent === 0;

  mhNextBtn.disabled =
    mhCurrent === mhProjects.length - 1;

}

mhPrevBtn.addEventListener("click",()=>{

  if(mhCurrent > 0){
    mhCurrent--;
    mhUpdateCarousel();
  }

});

mhNextBtn.addEventListener("click",()=>{

  if(mhCurrent < mhProjects.length - 1){
    mhCurrent++;
    mhUpdateCarousel();
  }

});

let mhTouchStartX = 0;

mhTrack.addEventListener("touchstart",(e)=>{
  mhTouchStartX = e.touches[0].clientX;
});

mhTrack.addEventListener("touchend",(e)=>{

  const diff =
    mhTouchStartX -
    e.changedTouches[0].clientX;

  if(Math.abs(diff) > 40){

    if(diff > 0 &&
      mhCurrent < mhProjects.length - 1){

      mhCurrent++;
      mhUpdateCarousel();

    }

    else if(diff < 0 &&
      mhCurrent > 0){

      mhCurrent--;
      mhUpdateCarousel();

    }

  }

});

window.addEventListener("resize",mhUpdateCarousel);

mhRenderProjects();
mhUpdateCarousel();

//EmailJS Validation
emailjs.init("z4GdcI52DzZ17ZnpC");

const mhForm = document.getElementById("mhContactForm");
const mhBtn = document.getElementById("mhSendBtn");

mhForm.addEventListener("submit", function(e){

    e.preventDefault();

    mhBtn.innerHTML = "Sending...";
    mhBtn.disabled = true;

    emailjs.sendForm(

        "service_9vceqyi",

        "template_htlml27",

        this

    )

    .then(function(){

        alert("✅ Message sent successfully!");

        mhForm.reset();

        mhBtn.innerHTML = "Send Message";

        mhBtn.disabled = false;

    })

    .catch(function(error){

        console.log(error);

        alert("❌ Failed to send message.");

        mhBtn.innerHTML = "Send Message";

        mhBtn.disabled = false;

    });

});
