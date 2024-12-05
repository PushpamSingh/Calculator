const outputField=document.querySelector('.output')
const AC=document.querySelector('.Ac')
const add=document.querySelector('.add')
const substract=document.querySelector('.substract')
const multiply=document.querySelector('.multiply')
const divisible=document.querySelector('.div');
const equal=document.querySelector('.equal');
const backspace=document.querySelector('.backspace')
const mod=document.querySelector('.mod')

const buttons=document.querySelectorAll('.input .num');
let string='';
buttons.forEach((button)=>{
    // console.log(button)
    button.addEventListener('click',(e)=>{
        // console.log(e.target.classList.value)
        if(outputField.innerText==='0'){
            string+=e.target.innerText;
            outputField.innerText=string;
         }else{
        string+=e.target.innerText;
        outputField.innerText=string;
         }
         e.target.classList.add('click');
         setTimeout(()=>{
                e.target.classList.remove('click');
           },100)
        
    })
})

AC.addEventListener('click',(e)=>{
    // console.log(outputField)
    // console.log(e.target.innerText);
    outputField.innerText='0';
    string='';
    AC.classList.add('click');
    setTimeout(()=>{
        AC.classList.remove('click');
    },100)
})
add.addEventListener('click',()=>{
    string+='+';
    outputField.innerText=string;
    add.classList.add('click');
    setTimeout(()=>{
        add.classList.remove('click');
    },100)
   
})
substract.addEventListener('click',()=>{
    string+='-';
    outputField.innerText=string;
    substract.classList.add('click');
    setTimeout(()=>{
        substract.classList.remove('click');
    },100)
})
multiply.addEventListener('click',()=>{
    string+='*';
    outputField.innerText=string;
    multiply.classList.add('click');
    setTimeout(()=>{
        multiply.classList.remove('click');
    },100)
})
divisible.addEventListener('click',()=>{
    string+='/';
    outputField.innerText=string;
    divisible.classList.add('click');
    setTimeout(()=>{
        divisible.classList.remove('click');
    },100)
})
mod.addEventListener('click',()=>{
    string+='%';
    outputField.innerText=string;
    mod.classList.add('click');
    setTimeout(()=>{
        mod.classList.remove('click');
    },100)
})
backspace.addEventListener('click',()=>{
    if(outputField.innerText!=='0' && outputField.innerText.length>1){
    outputField.innerText=`${outputField.innerText.slice(0,outputField.innerText.length-1)}`
    }
    else{
        outputField.innerText='0'
    }
    backspace.classList.add('click');
    setTimeout(()=>{
        backspace.classList.remove('click');
    },100)
})

equal.addEventListener('click',()=>{
    if(outputField.innerText==='0'){
        outputField.innerText='0';
    }else{
    outputField.innerText=eval(string);
    string=''
    }
    equal.classList.add('click');
    setTimeout(()=>{
        equal.classList.remove('click');
    },100)
})