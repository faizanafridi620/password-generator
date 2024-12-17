const btnCopy = document.querySelector(".password button");
const passwordInput = document.querySelector(".password input");
const rangeSpan = document.querySelector(".range span");
const rangeInput = document.querySelector(".range input");
const btnGenerate = document.querySelector(".generate");

const btnUpperCase = document.getElementById("upper-case");
const btnLowerCase = document.getElementById("lower-case");
const btnDigits = document.getElementById("digits");
const btnSpecialChar = document.getElementById("special-chr");

const generatePassword = ()=>{
    const length = parseInt(rangeInput.value);
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const digits = "0123456789"
    const specialChar = "~!@#$%^&_"
    let char = "";
    if(btnUpperCase.checked) char += upperCase; 
    if(btnLowerCase.checked) char += lowerCase; 
    if(btnDigits.checked) char += digits; 
    if(btnSpecialChar.checked) char += specialChar; 

    if(!char){
        alert("Please select at least one character option.");
        return;
    }

    let password = "";
     for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        password += char[randomIndex];
    }

    passwordInput.value = password;
}

rangeInput.addEventListener("input", () => {
    rangeSpan.textContent = rangeInput.value;
  });

btnCopy.addEventListener("click",()=>{
    passwordInput.select();
    passwordInput.setSelectionRange(0,100);
    
    document.execCommand("copy");
    alert("Password copied to clipboard!");
})

btnGenerate.addEventListener("click",generatePassword);

