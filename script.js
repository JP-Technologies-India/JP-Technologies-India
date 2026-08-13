const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");
const nav = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown");
const navbar = document.querySelector(".navbar");
const overlay=document.querySelector(".overlay");

if(nav.classList.contains("active")){
    overlay.classList.add("show");
}else{
    overlay.classList.remove("show");
}

overlay.addEventListener("click",()=>{
   nav.classList.remove("active");
   dropdown.classList.remove("open");
   overlay.classList.remove("show");
   menuIcon.classList.remove("fa-xmark");
   menuIcon.classList.add("fa-bars");
});

menuBtn.addEventListener("click",()=>{
    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
    menuBtn.style.color="#06254f";
 }else{
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    menuBtn.style.color="#ffffff";
}

});

dropdown.querySelector("a").addEventListener("click",function(e){

    if(window.innerWidth<=992){
        e.preventDefault();
        dropdown.classList.toggle("open");
    }

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{
        if(link.parentElement.classList.contains("dropdown")) return;
        nav.classList.remove("active");
        dropdown.classList.remove("open");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){
        navbar.style.background="#041a3d";
        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";
    }else{
        navbar.style.background="#06254f";
        navbar.style.boxShadow="none";
    }

});

window.addEventListener("resize",()=>{

    if(window.innerWidth>992){
        nav.classList.remove("active");
        dropdown.classList.remove("open");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});

const serviceData={
    software:{
        title:"Software Development",
        text:"Lorem Ipsum  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."
    },
    mobile:{
        title:"Mobile Application Development",
        text:"Lorem Ipsum  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."    
    },
    web:{
        title:"Web Development",
        text:"Lorem Ipsum  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."
    },
    cloud:{
        title:"Cloud & IT Solutions",
        text:"Lorem Ipsum  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."
    }
};
function openService(service){
    const data=serviceData[service];
    document.getElementById("modalNumber").textContent=data.number;
    document.getElementById("modalTitle").textContent=data.title;
    document.getElementById("modalText").textContent=data.text;
    document.getElementById("serviceModal").classList.add("active");
}
function closeService(){
    document.getElementById("serviceModal").classList.remove("active");
}
document.getElementById("serviceModal").addEventListener("click",function(e){
    if(e.target===this){
        closeService();
    }
});
document.addEventListener("keydown",function(e){
    if(e.key==="Escape"){
        closeService();
    }
});


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

 function openProfileModal(){
    document.getElementById("profileModal").classList.add("active");
    document.body.style.overflow="hidden";
}
function closeProfileModal(){
    document.getElementById("profileModal").classList.remove("active");
    document.body.style.overflow="";
}
function closeThankYouModal(){
    document.getElementById("thankyouModal").classList.remove("active");
    document.body.style.overflow="";
}
document.getElementById("profileForm").addEventListener("submit",function(e){
    e.preventDefault();
    closeProfileModal();
    document.getElementById("thankyouModal").classList.add("active");
});
document.getElementById("profileModal").addEventListener("click",function(e){
    if(e.target===this){
        closeProfileModal();
    }
});
document.getElementById("thankyouModal").addEventListener("click",function(e){
    if(e.target===this){
        closeThankYouModal();
    }
});

document.getElementById("copyrightYear").textContent=new Date().getFullYear();
