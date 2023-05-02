let contador = document.getElementById('contador')
    let number = document.getElementById(Number('numero'))
    function adicionar(){
        let contar = number++
        if(contar === 5){
            alert('Chegou no 5 parabéns!')
        }else if(contar === 15){
            alert('Chegou no 15 parabéns!, mas ainda não tem prêmios')
        }else if(contar === 25){
            alert('Você ta chegando lá')
        }else if(contar === 50){
            alert('Você ta chegando lá')
        }else if(contar === 100){
            alert('Você vai ganhar 3 horas de pica! UHUUUUUUUUUUUUUUUUUUUU, MAS AINDA TEM MAIS! ACREDITE EM MIM')
        }else if(contar === 70){
            alert('Você ta chegando lá')
        }else if(contar === 1000){
            alert('Você ACABOU DE GANHAR 5 HORAS DE MASSAGEM, UM PRATO COM CAMARÃO QUE VOCÊ ESCOLHER, UM DIA DE PRINCESA, CINEMA COM DIREITO A HAMBURGUER, E UMA MASSAGEM NO PÉ ATÉ VC DIZER CHEGA')
        }
        numero.innerHTML = contar
    }