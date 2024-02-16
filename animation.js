let sec = document.querySelectorAll("section");
let nav = document.querySelectorAll("nav a");

window.onscroll = () => {
    sec.forEach((section) =>{
        let top = window.scrollY;
        let offset = section.offsetTop - 60;
        let Height = section.offsetHeight;
        let id = section.getAttribute("id");

        if(top >= offset && top < offset + Height){
            nav.forEach((link)=>{
                link.classList.remove("active");
                document.querySelector('nav a[href*='+ id +']').classList.add("active");
            });
        }
    });
}
