// window.onscroll = function()
// {
//     if(window.scrollY>3120)
//     {
//         document.getElementById("effect").classList.remove("hide");
//         console.log("scr");
//     }
// }
window.onscroll = function(){
    let elem = document.getElementById('header');
    if( window.scrollY > 250 ) {
        elem.style.cssText = "position:fixed;width:100%;top:0;background: var(--bs-black);color: white; opacity: .7;x-index:9;transition: 1s;";
        let links=document.getElementsByClassName("head-white");
        for(var i=0;i<links.length;i++)
        {
            // links[i].style.color="white";
            links[i].classList.add("hov");
        }
    }
    else{
        elem.style.cssText = "position:static;width:100%";
        let links=document.getElementsByClassName("head-white");
        for(var i=0;i<links.length;i++)
        {
            // links[i].style.color="white";
            links[i].classList.remove("hov");
        }
    }
}