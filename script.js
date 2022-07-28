const dog = document.querySelector('.dog');
const vilao = document.querySelector(".vilao");

const jump = () => {
    dog.classList.add('jump');
    
    setTimeout(() => {

        dog.classList.remove('jump');
    }, 500);
} 

const loop = setInterval(() => {
    const vilaoPosition = vilao.offsetLeft;
    console.log (vilaoPosition)
}, 10);

document.addEventListener('keydown', jump);
