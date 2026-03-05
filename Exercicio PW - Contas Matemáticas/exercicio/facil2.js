export const facil2 = (resultado = "", respondido = false) => {

    if (respondido) {
        return `
            <h2>Exercício Fácil 2</h2>
            <p>Quanto é 5^3?</p>
            <p>${resultado}</p>
        `
    }

    return `
        <h2>Exercício Fácil 2</h2>
        <p>Quanto é 5^3?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicio" value="2">

            <input type="radio" name="resp2" value="10"> 10 <br>
            <input type="radio" name="resp2" value="125"> 125 <br>
            <input type="radio" name="resp2" value="150"> 150 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultado}</p>
    `
}