//Password show/hide - Eye icon show/hide 

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password-input");

eyeicon.onclick = function() {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.classList.replace("fa-eye-slash", "fa-eye")
    } else {
        password.type = "password";
        eyeicon.classList.replace("fa-eye", "fa-eye-slash")
    }
} 


//username input show/hide

let signUpBtn = document.getElementById("join-us");
let signInBtn = document.getElementById("sign-in");
let nameFiled = document.getElementById("username-input");
let mainTitle = document.getElementById("main-title");
let secondaryTitle = document.getElementById("secondary-title");
let textChanging = document.getElementById("new-here");
let signInSecondBtn = document.getElementById("sign-in-2");


signUpBtn.onclick = function () {

    nameFiled.style.display = "block";
    mainTitle.innerHTML = "Sing up";
    secondaryTitle.innerHTML = "already have an accaunt? sign in";
    signUpBtn.style.display = "none";
    textChanging.innerHTML = "have an accaunt?";
    signInSecondBtn.style.display = "block";
    signInBtn.innerHTML = "Sign up";
}


signInSecondBtn.onclick = function () {

    nameFiled.style.display = "none";
    mainTitle.innerHTML = "Sing in";
    secondaryTitle.innerHTML = "or create an account";
    signUpBtn.style.display = "block";
    textChanging.innerHTML = "New here?";
    signInSecondBtn.style.display = "none";
    signInBtn.innerHTML = "Sign In";
}

    