export const desafio5 = (resultadoDesafio = "", respondidoDesafio = false) => {
    
    if (respondidoDesafio) {
        return `
            <h2>Desafio 5<h2>
            <p>Em um sítio há 12 árvores. Cada árvore possui 12 galhos e em cada galho tem 12 maçãs. Quantas maçãs existem no sítio?<p>
            <p>${resultadoDesafio}<p>
        `
    }

    return `
            <h2>Desafio 5</h2>
            <p>Em um sítio há 12 árvores. Cada árvore possui 12 galhos e em cada galho tem 12 maçãs. Quantas maçãs existem no sítio?</p>
    
            <form method="POST" action="/">
                <input type="hidden" name="desafio" value="5">
                <input type="radio" name="respDesafio5" value="1728"> 1728 <br>
                <input type="radio" name="respDesafio5" value="2128"> 2128 <br>
                <input type="radio" name="respDesafio5" value="1564"> 1564 <br><br>
    
                <button type="submit">Verificar</button>
            </form>
    
            <p>${resultadoDesafio}</p>
            `
}