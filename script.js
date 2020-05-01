const sizes = document.querySelectorAll('.size')
const colors = document.querySelectorAll('.color')
const gradients = document.querySelectorAll('.gradient')


function changeSize() {
    sizes.forEach(size => size.classList.remove('active'))
    this.classList.add('active')
}

function changeColor() {
    let primary = this.getAttribute('primary')//get primary, in primary have a color, and this color will be apply on buttons
    let color = this.getAttribute('color')//take attribute color, inside there hava a color will be apply on background
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    console.log(gradient)

    //apply active in buttons
    colors.forEach(col => col.classList.remove('active'))
    this.classList.add('active')

    document.documentElement.style.setProperty('--primary', primary)//set property primary in css

    gradients.forEach(grad => grad.classList.remove('first'))
    gradient.classList.add('first')
}

sizes.forEach(size => size.addEventListener('click', changeSize))
colors.forEach(col => col.addEventListener('click', changeColor))