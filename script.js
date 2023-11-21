const body = document.querySelector("body")
const nav = document.querySelector("nav")
modeToggle = document.querySelector(".dark-light")
searchToggle = document.querySelector(".searchToggle")
sidebarOpen = document.querySelector(".sidebarOpen")
siderbarClose = document.querySelector(".siderbarClose")

let getMode = localStorage.getItem("mode");
   if(getMode && getMode === "dark-mode"){
      body.classList.add("dark");
   }

modeToggle.addEventListener('click', () => { 
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode", "light-mode");
    }
    else{
        localStorage.setItem("mode","dark-mode");
    }
});

/*
sidebarOpen.addEventListener("click",function(){
    nav.classList.add("active");
});
*/
sidebarOpen.addEventListener("click",function(){
    nav.classList.add("active");
})
body.addEventListener("click", e=>{
    let clickedElm = e.target;
      if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
         nav.classList.remove("active");
      }
});



let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)

arr.map((item)=>{
    console.log(item.dataset.count);

    let count = 0;
    function counterUp(){
        count++;
        item.innerHTML = count
        if(item.dataset.count==count){
            clearInterval(stop)
        }
    }
    let stop = setInterval(

        function(){
            counterUp()
        },1000/item.dataset.speed

    )
    //setInterval(()=>{
      //  counterUp()
    //},10000);
})


function openImg() {
    var image = document.getElementById('image');
    var source = image.src;
    window.open(source);
  }































