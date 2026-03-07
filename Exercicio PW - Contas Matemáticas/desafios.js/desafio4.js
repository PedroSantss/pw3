export const desafio4 = (resultadoDesafio = "", respondidoDesafio = false) => {
    
    if (respondidoDesafio) {
        return `
            <h2>Desafio 4<h2>
            <p>Sabendo que o valor de 57 é 78 125, qual o resultado de 58?<p>
            <p>${resultadoDesafio}<p>
        `
    }

    return `
            <h2>Desafio 4</h2>
            <p>Sabendo que o valor de 57 é 78 125, qual o resultado de 58?</p>
    
            <form method="POST" action="/">
                <input type="hidden" name="desafio" value="4">
                <input type="radio" name="respDesafio4" value="390 625"> 390 625 <br>
                <input type="radio" name="respDesafio4" value="312 500"> 312 500 <br>
                <input type="radio" name="respDesafio4" value="234 375"> 234 375 <br><br>
    
                <button type="submit">Verificar</button>
            </form>
    
            <p>${resultadoDesafio}</p>
            `
}