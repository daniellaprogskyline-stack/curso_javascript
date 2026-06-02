var agora = new Date()
var hora = agora.getHours() //pega a hora atual do sistema
console.log(`A gora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora < 18) {
    console.log (`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}