
document.addEventListener('DOMContentLoaded', function () {

  
//Switch & bulb
const lightswitch = document.querySelector('.switch-button')
const filament = document.querySelector('.lightbulb')

lightswitch.onclick = () => {
  lightswitch.classList.toggle('on')
  filament.classList.toggle('on')
}

}); 