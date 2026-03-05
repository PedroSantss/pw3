export const facil3 = (resultado = "", respondido = false) => {

    if (respondido) {
        return `
            <h2>Exercício Fácil 3</h2>
            <p>Quanto é 7^3?</p>
            <p>${resultado}</p>
        `
    }

return `
    <h2>Exercício Fácil 3</h2>
        <p>Quanto é 7^3?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicio" value="3">

            <input type="radio" name="resp3" value="128"> 128 <br>
            <input type="radio" name="resp3" value="434"> 434 <br>
            <input type="radio" name="resp3" value="343"> 343 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultado}</p>
`
}