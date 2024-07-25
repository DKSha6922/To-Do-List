
let showSideBarBtn = document.getElementById("burg-btn");
let sideBar = document.getElementById("sidebar");


showSideBarBtn.addEventListener("click",()=>{
    if(sideBar.classList == "hidden"){
    sideBar.classList.remove("hidden");
    }else{
        sideBar.classList.add("block");
    }
})