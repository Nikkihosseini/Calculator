const $ = document
const toggleTheme = $.querySelector('.toggleTheme')
let typeIng = $.getElementById('typeIng');
const numBtn = $.querySelectorAll('.num-btn')


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


numBtn.forEach(item =>{
    item.addEventListener('click', ()=>{
        currentInput += item.innerHTML;
        console.log(currentInput)
        typeIng.innerHTML = currentInput;
    })
})




