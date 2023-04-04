let btnLogin=document.getElementById("linkLogin");
let btnSignUp=document.getElementById("linkCreateAccount");

let signIn=document.querySelector("#login");
let signUp=document.querySelector("#createAccount");

btnLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}

btnSignUp.onclick = function(){
   signIn.classList.remove("active");
   signUp.classList.remove("inActive");
}