const btn = document.querySelector('.btn')
const sky = document.querySelector('.sky')



const skyActive = () => {
    sky.classList.toggle('sky-animation')   
}

btn.addEventListener('click', skyActive)
