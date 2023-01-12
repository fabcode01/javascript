let amigo = {nome:'jose', 
    idade: '14',
    peso: 84.4,
    engordar(p=0){
        console.log('Engordou!')
        this.peso += p
    }

}

amigo.engordar(0)
console.log(amigo.peso)