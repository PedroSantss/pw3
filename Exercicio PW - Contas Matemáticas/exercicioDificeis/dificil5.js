export const dificil5 = (resultadoDificil = "", respondidoDificil = false) => {

    if (respondidoDificil) {
        return `
            <h2>Exercício Difícil 5</h2>
            <p>Quanto é 12^3 * 12^3?</p>
            <p>${resultadoDificil}</p>
            `
    }

    return `
        <h2>Exercício Difícil 5</h2>
        <p>Quanto é 12^3 * 12^3?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicioDificeis" value="10">
            <input type="radio" name="resp10" value="2985984"> 2985984 <br>
            <input type="radio" name="resp10" value="5422345"> 5422345 <br>
            <input type="radio" name="resp10" value="9843345"> 9843345 <br><br>

            <button type="submit">Verificar</button>
        </form>

        <p>${resultadoDificil}</p>
    `
}