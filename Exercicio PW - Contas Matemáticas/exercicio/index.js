import express from 'express'
import { facil1 } from './facil1.js'
import { facil2 } from './facil2.js'
import { facil3 } from './facil3.js'
import { facil4 } from './facil4.js'
import { facil5 } from './facil5.js'

import { dificil1} from '../exercicioDificeis/dificil1.js'
import { dificil2} from '../exercicioDificeis/dificil2.js'
import { dificil3} from '../exercicioDificeis/dificil3.js'
import { dificil4} from '../exercicioDificeis/dificil4.js'
import { dificil5} from '../exercicioDificeis/dificil5.js'

import { desafio1} from '../desafios.js/desafio1.js'
import { desafio2} from '../desafios.js/desafio2.js'
import { desafio3} from '../desafios.js/desafio3.js'
import { desafio4} from '../desafios.js/desafio4.js'
import { desafio5} from '../desafios.js/desafio5.js'


const router = express.Router()

// estado simples (para aprendizado)
let estado = {
    resultado1: "",
    respondido1: false,
    resultado2: "",
    respondido2: false,
    resultado3: "",
    respondido3: false,
    resultado4: "",
    respondido4: false,
    resultado5: "",
    respondido5: false,
    
    resultadoDificil1: "",
    respondidoDificil1: false,
    resultadoDificil2: "",
    respondidoDificil2: false,
    resultadoDificil3: "",
    respondidoDificil3: false,
    resultadoDificil4: "",
    respondidoDificil4: false,
    resultadoDificil5: "",
    respondidoDificil5: false,

    resultadoDesafio1: "",
    respondidoDesafio1: false,
    resultadoDesafio2: "",
    respondidoDesafio2: false,
    resultadoDesafio3: "",
    respondidoDesafio3: false,
    resultadoDesafio4: "",
    respondidoDesafio4: false,
    resultadoDesafio5: "",
    respondidoDesafio5: false,
    
}

router.get('/', (req, res) => {
    res.send(pagina())
})

router.post('/', (req, res) => {

    if (req.body.exercicio === "1") {

        const resposta = req.body.resp1
        estado.respondido1 = true

        if (!resposta) {
            estado.resultado1 = "Escolha uma alternativa."
            estado.respondido1 = false
        } 
        else if (resposta === "36") {
            estado.resultado1 = "Correto."
        } 
        else {
            estado.resultado1 = "Errado."
        }
    }

    if (req.body.exercicio === "2") {

        const resposta = req.body.resp2
        estado.respondido2 = true

        if (!resposta) {
            estado.resultado2 = "Escolha uma alternativa."
            estado.respondido2 = false
        } 
        else if (resposta === "125") {
            estado.resultado2 = "Correto."
        } 
        else {
            estado.resultado2 = "Errado."
        }
    }

    if (req.body.exercicio === "3") {
        
        const resposta = req.body.resp3
        estado.respondido3 = true

        if (!resposta) {
            estado.resultado3 = "Escolha uma alternativa."
            estado.respondido3 = false
        }
        else if (resposta === "343") {
            estado.resultado3 = "Correto."
        }
        else {
            estado.resultado3 = "Errado."
        }
    }

    if (req.body.exercicio === "4") {
        
        const resposta = req.body.resp4
        estado.respondido4 = true

        if (!resposta) {
            estado.resultado4 = "Escolha uma alternativa."
            estado.respondido4 = false
        }
        else if (resposta === "225") {
            estado.resultado4 = "Correto."
        } 
        else {
            estado.resultado4 = "Errado."
        }
    }

    if (req.body.exercicio === "5") {
        
        const resposta = req.body.resp5
        estado.respondido5 = true

        if (!resposta) {
            estado.resultado5 = "Escolha uma alternativa."
            estado.respondido5 = false
        } 
        else if (resposta === "512") {
            estado.resultado5 = "Correto."
        } 
        else {
            estado.resultado5 = "Errado."
        }
    }

     if (req.body.exercicioDificeis === "6") {

        const resposta = req.body.resp6
        estado.respondidoDificil1 = true

        if (!resposta) {
            estado.resultadoDificil1 = "Escolha uma alternativa."
            estado.respondidoDificil1 = false
        } 
        else if (resposta === "1296") {
            estado.resultadoDificil1 = "Correto."
        } 
        else {
            estado.resultadoDificil1 = "Errado."
        }
}

 if (req.body.exercicioDificeis === "7") {

        const resposta = req.body.resp7
        estado.respondidoDificil2 = true

        if (!resposta) {
            estado.resultadoDificil2 = "Escolha uma alternativa."
            estado.respondidoDificil2 = false
        } 
        else if (resposta === "4096") {
            estado.resultadoDificil2 = "Correto."
        } 
        else {
            estado.resultadoDificil2 = "Errado."
        }
}

 if (req.body.exercicioDificeis === "8") {

        const resposta = req.body.resp8
        estado.respondidoDificil3 = true

        if (!resposta) {
            estado.resultadoDificil3 = "Escolha uma alternativa."
            estado.respondidoDificil3 = false
        } 
        else if (resposta === "531441") {
            estado.resultadoDificil3 = "Correto."
        } 
        else {
            estado.resultadoDificil3 = "Errado."
        }
}

if (req.body.exercicioDificeis === "9") {

        const resposta = req.body.resp9
        estado.respondidoDificil4 = true

        if (!resposta) {
            estado.resultadoDificil4 = "Escolha uma alternativa."
            estado.respondidoDificil4 = false
        } 
        else if (resposta === "2401") {
            estado.resultadoDificil4 = "Correto."
        } 
        else {
            estado.resultadoDificil4 = "Errado."
        }
}

if (req.body.exercicioDificeis === "10") {

        const resposta = req.body.resp10
        estado.respondidoDificil5 = true

        if (!resposta) {
            estado.resultadoDificil5 = "Escolha uma alternativa."
            estado.respondidoDificil5 = false
        } 
        else if (resposta === "2985984") {
            estado.resultadoDificil5 = "Correto."
        } 
        else {
            estado.resultadoDificil5 = "Errado."
        }
}

if (req.body.desafio === "1") {

        const resposta = req.body.respDesafio
        estado.respondidoDesafio1 = true

        if (!resposta) {
            estado.resultadoDesafio1 = "Escolha uma alternativa."
            estado.respondidoDesafio1 = false
        }
        else if (resposta === "0,166...") {
            estado.resultadoDesafio1 = "Correto."
        }
        else {
            estado.resultadoDesafio1 = "Errado."
        }
}

if (req.body.desafio === "2") {

        const resposta = req.body.respDesafio2
        estado.respondidoDesafio2 = true

        if (!resposta) {
            estado.resultadoDesafio2 = "Escolha uma alternativa."
            estado.respondidoDesafio2 = false
        }
        else if (resposta === "Falso") {
            estado.resultadoDesafio2 = "Correto."
        }
        else {
            estado.resultadoDesafio2 = "Errado."
        }
}

if (req.body.desafio === "3") {

        const resposta = req.body.respDesafio3
        estado.respondidoDesafio3 = true

        if (!resposta) {
            estado.resultadoDesafio3 = "Escolha uma alternativa."
            estado.respondidoDesafio3 = false
        }
        else if (resposta === "1") {
            estado.resultadoDesafio3 = "Correto."
        }
        else {
            estado.resultadoDesafio3 = "Errado."
        }
}

if (req.body.desafio === "4") {

        const resposta = req.body.respDesafio4
        estado.respondidoDesafio4 = true

        if (!resposta) {
            estado.resultadoDesafio4 = "Escolha uma alternativa."
            estado.respondidoDesafio4 = false
        }
        else if (resposta === "390 625") {
            estado.resultadoDesafio4 = "Correto."
        }
        else {
            estado.resultadoDesafio4 = "Errado."
        }
}

if (req.body.desafio === "5") {

        const resposta = req.body.respDesafio5
        estado.respondidoDesafio5 = true

        if (!resposta) {
            estado.resultadoDesafio5 = "Escolha uma alternativa."
            estado.respondidoDesafio5 = false
        }
        else if (resposta === "1728") {
            estado.resultadoDesafio5 = "Correto."
        }
        else {
            estado.resultadoDesafio5 = "Errado."
        }
}

    res.send(pagina())
})


function pagina() {
    return `
        <html>
        <body>
            ${facil1(estado.resultado1, estado.respondido1)}
            <hr>
            ${facil2(estado.resultado2, estado.respondido2)}
            <hr>
            ${facil3(estado.resultado3, estado.respondido3)}
            <hr>
            ${facil4(estado.resultado4, estado.respondido4)}
            <hr>
            ${facil5(estado.resultado5, estado.respondido5)}
            <hr>
            ${dificil1(estado.resultadoDificil1, estado.respondidoDificil1)}
            <hr>
            ${dificil2(estado.resultadoDificil2, estado.respondidoDificil2)}
            <hr>
            ${dificil3(estado.resultadoDificil3, estado.respondidoDificil3)}
            <hr>
            ${dificil4(estado.resultadoDificil4, estado.respondidoDificil4)}
            <hr>
            ${dificil5(estado.resultadoDificil5, estado.respondidoDificil5)}
            <hr>
            ${desafio1(estado.resultadoDesafio1, estado.respondidoDesafio1)}
            <hr>
            ${desafio2(estado.resultadoDesafio2, estado.respondidoDesafio2)}
            <hr>
            ${desafio3(estado.resultadoDesafio3, estado.respondidoDesafio3)}
            <hr>
            ${desafio4(estado.resultadoDesafio4, estado.respondidoDesafio4)}
            <hr>
            ${desafio5(estado.resultadoDesafio5, estado.respondidoDesafio5)}
            <hr>

        </body>
        </html>
    `
}

export default router