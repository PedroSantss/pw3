export const dificil3 = (resultadoDificil = "", respondidoDificil = false) => {

    if (respondidoDificil) {
        return `
            <h2>Exercício Difícil 3</h2>
            <p>Quanto é 9^3 * 9^3?</p>
            <p>${resultadoDificil}</p>
            `
    }

    return `
        <h2>Exercício Difícil 3</h2>
        <p>Quanto é 9^3 * 9^3?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicioDificeis" value="8">

            <input type="radio" name="resp8" value="531441"> 531441 <br>
            <input type="radio" name="resp8" value="986422"> 986422 <br>
            <input type="radio" name="resp8" value="127690"> 127690 <br><br>
            <button type="submit">Verificar</button>
        </form>

        <p>${resultadoDificil}</p>
    `
}