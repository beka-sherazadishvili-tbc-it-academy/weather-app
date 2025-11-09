const temperatureSwitch = document.querySelector(".header__switch");
let changeTo;
function switchTemperature(){
    temperatureSwitch.addEventListener('click',event=>{
        changeTo = event.target.closest('span');
        console.log(changeTo);
    })

}

switchTemperature()
