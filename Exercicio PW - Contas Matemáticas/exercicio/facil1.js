export const facil1 = (resultado = "", respondido = false) => {

    if (respondido) {
        return `
            <h2>Exercício Fácil1</h2>
            <p>Quanto é 6^2?</p>
            <p>${resultado}</p>
        `
    }

    return `
        <h2>Exercício Fácil 1</h2>
        <p>Quanto é 6^2?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicio" value="1">

            <input type="radio" name="resp1" value="32"> 32 <br>
            <input type="radio" name="resp1" value="36"> 36 <br>
            <input type="radio" name="resp1" value="54"> 54 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultado}</p>
    `
}