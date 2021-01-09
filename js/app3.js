
document.addEventListener('DOMContentLoaded', function () {

  
//Switch & bulb
const lightSwitch = document.querySelector('.switch-button')
const filament = document.querySelector('.lightbulb')

lightSwitch.onclick = () => {
  lightSwitch.classList.toggle('on')
  filament.classList.toggle('on')
}

}); 