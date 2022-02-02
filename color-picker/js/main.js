var opt= document.getElementById('head');
var btn= document.getElementById('btn');
var body = document.getElementById('body')
var dark = document.getElementById('dark')

if(localStorage.getItem('dark_mode')){
    var i = 1
    body.classList.toggle('dark-side')
}
else{
    var i = 0
}

if(localStorage.getItem('saved_color')){
    opt.value = localStorage.getItem('saved_color')
    body.style.backgroundColor = localStorage.getItem('saved_color');
}
else{
}

function changeColor(){
    localStorage.setItem('saved_color', opt.value)
    body.style.backgroundColor = opt.value;
}

function darkSide(){
    body.classList.toggle('dark-side')
    if (i===0){
        opt.value = ('#000000')
        i=1
        localStorage.setItem('dark_mode', 1)
    }
    else{
        opt.value = ('#FFFFFF')
        i=0
        localStorage.removeItem('dark_mode')
    }
    localStorage.removeItem('saved_color')
    changeColor()
}

opt.addEventListener('change', changeColor)
opt.addEventListener('input', changeColor)
btn.addEventListener('click', darkSide)