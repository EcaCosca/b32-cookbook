const handleclickCoffee = () => {
    document.querySelector('#rec-show').src = "./recepies/coffee.html"
}

const handleclickFrap = () => {
    document.querySelector('#rec-show').src = "./recepies/frap.html"
}

const handleclickMac = () => {
    document.querySelector('#rec-show').src = "./recepies/macciato.html"
}

document.querySelector('#coffe-button').addEventListener('click', handleclickCoffee)
document.querySelector('#frapu-button').addEventListener('click', handleclickFrap)
document.querySelector('#mac-button').addEventListener('click', handleclickMac)

const alerter = () => {
    alert('HEY, YOU CANNOT DELETE!')
}