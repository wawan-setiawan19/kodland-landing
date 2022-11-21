const menu = document.querySelector(".navbar_togle")
const navigasi = document.querySelector(".navbar_nav")
const body = document.querySelector(".container")

menu.addEventListener("click", ()=>{
    // console.log("click");
    const link = document.querySelectorAll(".navbar_nav_link")
    navigasi.classList.toggle("mobile");

    link.forEach(element => {
        element.addEventListener("click", ()=>{
            console.log("click");
            navigasi.classList.toggle("mobile")
        })
    });
})

