const $ = document
const toggleTheme = $.querySelector('.toggleTheme')
let typeIng = $.getElementById('typeIng');
const numBtn = $.querySelectorAll('.num-btn')
const result =$.getElementById('result')
const equal =$.getElementById('equal')

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

function typeNums(){
    if(result.innerHTML === ''){
        typeIng.classList.remove('h-16')
        typeIng.classList.add('h-60')
    } else {
        typeIng.classList.remove('h-60')
        typeIng.classList.add('h-16')
    }
}

numBtn.forEach(item =>{
    item.addEventListener('click', ()=>{
        currentInput += item.innerHTML;
        console.log(currentInput)
        typeIng.innerHTML = currentInput;
    })
})









