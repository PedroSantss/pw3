export const dificil1 = (resultadoDificil = "", respondidoDificil = false) => {

    if (respondidoDificil) {
        return `
            <h2>Exercício Difícil 1</h2>
            <p>Quanto é 6^2 * 6^2?</p>
            <p>${resultadoDificil}</p>
            `
    }

    return `
        <h2>Exercício Difícil 1</h2>
        <p>Quanto é 6^2 * 6^2?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicioDificeis" value="6">

            <input type="radio" name="resp6" value="1296"> 1296 <br>
            <input type="radio" name="resp6" value="364"> 364 <br>
            <input type="radio" name="resp6" value="752"> 752 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultadoDificil}</p>
    `
}