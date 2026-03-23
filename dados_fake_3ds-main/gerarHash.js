import bcrypt from 'bcrypt';

const senhaUsuario = "bruno@access#99"; // Coloque aqui a senha que você quer transformar
const saltRounds = 10;

bcrypt.hash(senhaUsuario, saltRounds, (err, hash) => {
    console.log(`Senha original: ${senhaUsuario}`);
    console.log(`Hash gerado: ${hash}`);
});
