var date = new Date()
        var hora = date.getHours()
        var min = date.getMinutes()
        
        var h1 = document.getElementById('h1')
        var main = document.getElementById('main')
        var mainBack = document.getElementById('img')
        var pHour = document.querySelector('p#hour')
        var text = document.getElementById('text')
        var link = document.querySelector('p > a')

        pHour.innerHTML = `${hora}h${min}`

        if (hora >= 5 && hora < 12){
            mainBack.style.backgroundImage = 'url(img/dia.jpg)'
            body.style.backgroundColor = '#95e2f5'
            h1.style.color = '#202020'


        }else if (hora >= 12 && hora <= 18){
            mainBack.style.backgroundImage = 'url(img/tarde.jpg)'
            body.style.backgroundColor = '#f59241'
            h1.style.color = '#202020'

            
        }else{
            mainBack.style.background = 'url(img/night.jpg)'
            mainBack.style.backgroundSize = 'cover'
            body.style.backgroundColor = '#272727'
            main.style.backgroundColor = '#000000'
            text.style.color = 'aliceblue'
            pHour.style.color = 'aliceblue'
            link.style.color = 'aliceblue'

        }