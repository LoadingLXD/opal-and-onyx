//transition
window.onload = function(){
document.getElementById("transitionn").style.top="-200vh"
}
function goToPage(pageName){
document.getElementById("transitionn").style.top=0;
 setTimeout(() => {window.location.href = pageName;}, 600);
 
}
//transition end