function addList() {

    let li = document.createElement("li") // li değişkeni çağırıldığında liste oluşturur
    let getValue = document.getElementById("task").value //getValue değişkeni çağırıldığında id si task olan inputa girilen değerleri alır

    var t = document.createTextNode(getValue) // t değişkenini çağırdığımızda inputtan aldığımız değerleri metine çevirir
    li.appendChild(t) // listeye t değerlerinin olduğu bir metin ekler. Bu metinler listenin sonuna her yazdığımızda yan yana tek satır metin halinde geliyor bunu önlemek için koşul döngümüze appendChild fonksiyonunda liste tanımlıyoruz. Böylece her butona basıldığında her metin ayrı liste oluyor.

    // Bu eklenen elemanları göstermek için listeye bağlayıp if else dögüsüyle koşula bağladık.

    

    if (getValue === "") {
        alert("Boş bırakamazsınız")
    } else {
        document.getElementById("list").appendChild(li)
    }

    task.value = "" // input değeri girildikten sonra silinmesini sağlar



    //liste ekleme fonkisyonu çalıştığında text i silmeye yarayan butonu tanımladık
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var close = document.getElementsByClassName("close");
    var i;

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}

// mouse tıklandığında listeye yapılacak işlem.
let listDOM = document.querySelector('ul')

listDOM.addEventListener('click', function(ev){

    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked')
    }

}, false)




