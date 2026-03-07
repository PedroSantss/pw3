export const facil4 = (resultado = "", respondido = false) => {

    if (respondido) {
        return `
            <h2>Exercício Fácil 4</h2>
            <p>Quanto é 15^2?</p>
            <p>${resultado}</p>
        `
    }

return `
    <h2>Exercício Fácil 4</h2>
        <p>Quanto é 15^2?</p>

        <form method="POST" action="/">
            <input type="hidden" name="exercicio" value="4">

            <input type="radio" name="resp4" value="175"> 175 <br>
            <input type="radio" name="resp4" value="225"> 225 <br>
            <input type="radio" name="resp4" value="355"> 355 <br><br>
            
            <button type="submit">Verificar</button>

        </form>

        <p>${resultado}</p>
`
}
    