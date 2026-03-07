export const facil5 = (resultado = "", respondido = false) => {
    if (respondido) {
        return `
            <h2>Exercício Fácil 5</h2>
            <p>Quanto é 8^3?</p>
            <p>${resultado}</p>
        `
    }

return `
    <h2>Exercício Fácil 5</h2>
        <p>Quanto é 8^3?</p>  

        <form method="POST" action="/">
            <input type="hidden" name="exercicio" value="5">

            <input type="radio" name="resp5" value="312"> 312 <br>
            <input type="radio" name="resp5" value="512"> 512 <br>
            <input type="radio" name="resp5" value="410"> 410 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultado}</p>
`
}