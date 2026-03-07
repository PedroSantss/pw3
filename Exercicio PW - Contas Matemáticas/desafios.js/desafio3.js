export const desafio3 = (resultadoDesafio = "", respondidoDesafio = false) => {
    
    if (respondidoDesafio) {
        return `
            <h2>Desafio 3<h2>
            <p>Determine o valor da potência 150^0</p>
            <p>${resultadoDesafio}<p>
        `
    }

    return `
            <h2>Desafio 3</h2>
            <p>Determine o valor da potência 150^0</p>
    
            <form method="POST" action="/">
                <input type="hidden" name="desafio" value="3">
                <input type="radio" name="respDesafio3" value="25"> 25 <br>
                <input type="radio" name="respDesafio3" value="0"> 0 <br>
                <input type="radio" name="respDesafio3" value="1"> 1 <br><br>
    
                <button type="submit">Verificar</button>
            </form>
    
            <p>${resultadoDesafio}</p>
            `
}