const colors = ["green","red","rgba(133,122,200)" ,"#f15025","hsl(205,86%,17%)","#222",];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    const randomNumber = getRandonNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]

});

function getRandonNumber(){
    return Math.floor(Math.random() * colors.length)
}

