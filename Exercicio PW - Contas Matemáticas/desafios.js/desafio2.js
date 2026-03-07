export const desafio2 = (resultadoDesafio = "", respondidoDesafio = false) => {
    
    if (respondidoDesafio) {
        return `
            <h2>Desafio 2<h2>
            <p>As potências (-2)4 e -24 são iguais.<p>
            <p>${resultadoDesafio}<p>
        `
    }

    return `
            <h2>Desafio 2</h2>
            <p>As potências (-2)4 e -24 são iguais.</p>
    
            <form method="POST" action="/">
                <input type="hidden" name="desafio" value="2">
                <input type="radio" name="respDesafio2" value="Verdadeiro"> Verdadeiro <br>
                <input type="radio" name="respDesafio2" value="Falso"> Falso <br><br>
    
                <button type="submit">Verificar</button>
            </form>
    
            <p>${resultadoDesafio}</p>
            `
}