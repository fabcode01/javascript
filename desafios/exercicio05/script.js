
let num = document.getElementById('txtnum')
let res = document.querySelector('div#res')
let lista = document.querySelector('select#flista')

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
    
      valores.push(Number(num.value))
      
      let item = document.createElement('option')
      
      item.text = `Valor ${num.value}`

      lista.appendChild(item)
      res.innerHTML = ''
        

    }else {
        alert('Valor em branco/invalido ou já adicionado!')
    }

    num.value = ''
    num.focus()
 
    } 

    function finalizar() {
        if (valores.length == 0){
            alert('A lista está vazia')
        } else {
            let total = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            

            for(let pos in valores){
                soma += valores[pos]
              
            }

            media = soma / total
            


            res.innerHTML = ''
            res.innerHTML += `<p> Ao todo temos <strong>${total}</strong> números cadastrados </p>`
            
            res.innerHTML += `<p>A soma dos elementos é: <strong>${soma}</strong></p>`
            
            res.innerHTML += `A média dos valores é: <strong>${media}</strong>`
        }
    }
      

    function limpar(){
        if (valores.length == 0 && lista.length == 0 && res.innerHTML == ''){
            alert('Já está tudo limpo!')
        } 

        valores.length = 0
        lista.length = 0
        res.innerHTML = ''
        
    }
    
