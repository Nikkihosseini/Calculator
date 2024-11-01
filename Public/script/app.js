const $ = document
const toggleTheme = $.querySelector('.toggleTheme')
let result = document.getElementById('result');


let currentInput = '';


toggleTheme.addEventListener('click', ()=>{
        if(localStorage.theme === 'dark'){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
})


function display(value) {
    currentInput += value;
    result.value = currentInput;
}