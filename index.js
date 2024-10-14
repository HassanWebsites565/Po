// const btn  = document.querySelector(".icon-click")
// const nav = document.querySelector(".main-nav")

// btn.addEventListener("click", () => {
//     nav.classList.toggle("main-nav")
//     console.log(nav)
// })

const nav = document.querySelector(".main-nav");
const btn = document.querySelector(".icon-click");

if (nav && btn) {
    btn.addEventListener("click", () => {
        nav.classList.toggle("main-nav");
        console.log(nav);
    });
} else {
    console.error("Element not found");
}
