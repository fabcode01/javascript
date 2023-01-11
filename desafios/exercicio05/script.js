
let num = document.getElementById('txtnum')

let sel = document.getElementById('select#sel')

let res = document.querySelector('div#res')

let valores = []

function addNum(n){
    if (Number(n) >= 1 && Number(n) < 100){
        return true
    } else {
        return false
    }}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}



function adicionar(){
    if (addNum(num.value) && !inList(num.value, valores)){
      alert('tudo ok')
        

    }else {
        alert('Valor em branco ou já adicionado!')
    }
 
    } 
      

