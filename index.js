var btn = document.querySelector("button");
var unknown = document.querySelector("h4");

var flag =0 ;

btn.addEventListener("click", function(){
    if (flag == 0){
    unknown.innerHTML = "Friends";
    btn.style.width = "12vw";
    btn.style.marginLeft = "5vw" ;
    btn.innerHTML = "Remove Friend";
    flag = 1;
    }
    else{
        unknown.innerHTML = "Unknown";
        btn.style.width = "8vw";
        btn.style.marginLeft = "7vw" ;
        btn.innerHTML = "Add Friend"
        flag = 0; 
    }
})