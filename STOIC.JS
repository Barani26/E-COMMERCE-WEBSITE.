var navsidebar=document.querySelector(".sidenavbar")
function sideopen(){
    navsidebar.style.left="0"
}
function sideclose(){
    navsidebar.style.left="-60%"
}
var productcon=document.getElementById("product")
var search=document.getElementById("searche")
var pl=productcon.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var en=event.target.value.toUpperCase()

    for(count=0;count<pl.length;count++){
        var proname=pl[count].querySelector("p").textContent
    
        if(proname.toUpperCase().indexOf(en)<0){
            pl[count].style.display="none"
        }
        else{
            pl[count].style.display='block'
        }
    }
})