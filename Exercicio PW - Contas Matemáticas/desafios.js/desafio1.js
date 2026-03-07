export const desafio1 = (resultadoDesafio = "", respondidoDesafio = false) => {
    
    if (respondidoDesafio) {
        return `
            <h2>Desafio 1</h2>
            <p>Quanto é 6^3?</p>
            <p>${resultadoDesafio}</p>
            `
    }

    return `
        <h2>Desafio 1</h2>
        <p>Quanto é (- 6)^-1?</p>

        <form method="POST" action="/">
            <input type="hidden" name="desafio" value="1">
            <input type="radio" name="respDesafio" value="0,166..."> 0,166... <br>
            <input type="radio" name="respDesafio" value="2,166..."> 2,166... <br>
            <input type="radio" name="respDesafio" value="0,155..."> 0,155... <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultadoDesafio}</p>
     `
}
