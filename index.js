let listaParticipantePalestrante=[]
let data=21/09/2021
let idade=19
let limiteParticipante=99
let podeCadastrar=true

if (data<=new Date){
console.log('Data Inválida')
podeCadastrar=false
}

if (idade<18){
    console.log ('Não pode Cadastrar menor de idade')
    podeCadastrar=false
}

if (limiteParticipante>100){
    console.log('Limite de Participantes atingido')
    podeCadastrar=false
}

if (podeCadastrar){
    console.log('Cadastramente efetuado com sucesso')
} 

console.log('listando Participantes e Palestrantes.')
for (let i=0;i<listaParticipantePalestrante.length;i++){
    console.log(listaParticipantePalestrante[i])
}