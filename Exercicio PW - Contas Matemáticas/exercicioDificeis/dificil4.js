export const dificil4 = (resultadoDificil = "", respondidoDificil = false) => {

    if (respondidoDificil) {
        return `
            <h2>Exercício Difícil 4</h2>
            <p>Quanto é 7^2 * 7^2?</p>
            <p>${resultadoDificil}</p>
            `
    }

    return `
        <h2>Exercício Difícil 4</h2>
        <p>Quanto é 7^2 * 7^2?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicioDificeis" value="9">
            <input type="radio" name="resp9" value="2401"> 2401 <br>
            <input type="radio" name="resp9" value="2464"> 2464 <br>
            <input type="radio" name="resp9" value="1752"> 1752 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultadoDificil}</p>
    `
}