export const dificil2 = (resultadoDificil = "", respondidoDificil = false) => {

    if (respondidoDificil) {
        return `
            <h2>Exercício Difícil 2</h2>
            <p>Quanto é 8^2 * 8^2?</p>
            <p>${resultadoDificil}</p>
            `
    }

    return `
        <h2>Exercício Difícil 2</h2>
        <p>Quanto é 8^2 * 8^2?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicioDificeis" value="7">

            <input type="radio" name="resp7" value="4096"> 4096 <br>
            <input type="radio" name="resp7" value="3646"> 3646 <br>
            <input type="radio" name="resp7" value="7752"> 7752 <br><br>
            <button type="submit">Verificar</button>
        </form>

        <p>${resultadoDificil}</p>
    `
}