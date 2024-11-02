const $ = document
const toggleTheme = $.querySelector('.toggleTheme')
let typeIng = $.getElementById('typeIng');
const numBtn = $.querySelectorAll('.num-btn')
const result =$.getElementById('result')
const equal =$.getElementById('equal')
const clear = $.getElementById('clear')
const backSpace = $.getElementById('back-space')

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
    typeNums()
})

numBtn.forEach(item =>{
    item.addEventListener('keyup', ()=>{
        currentInput += item.innerHTML;
        console.log(currentInput)
        typeIng.innerHTML = currentInput;
    })
    typeNums()
})



equal.addEventListener('click' , ()=>{
    let num1 = typeIng.innerHTML
    result.innerHTML =  eval(num1)
    typeNums()
})

clear.addEventListener('click', ()=>{
    currentInput = '';
    result.innerHTML = '';
    typeIng.innerHTML = '';
})

backSpace.addEventListener('click', ()=>{
    typeIng.innerHTML = typeIng.innerText.slice(0, -1)
    currentInput = typeIng.innerHTML
})








