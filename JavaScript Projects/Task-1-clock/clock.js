let myName = prompt("Adınızı giriniz")

document.getElementById("myName").innerHTML = myName



function showTime() {

    const dateNow = new Date().toLocaleString()
    document.getElementById("myClock").innerText = dateNow

    
}

showTime()
