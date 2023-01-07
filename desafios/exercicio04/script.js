function tabuada(){
    let num = document.querySelector('input#txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {      
        tab.innerHTML = ''
                
       let n = num.value
       

       for(let c = 1;c <= 10;c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)
       }
        


        
        
    }
    }

    

