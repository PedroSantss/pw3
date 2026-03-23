import express from 'express'
import bcrypt from 'bcrypt'
import { usuarios } from './dados/usuarios.js'
import { listaTarefas } from './dados/tarefas.js'
import { devs } from './dados/devs.js'

const app = express()
app.use(express.json()) // ler o corpo da requisição como JSON


app.post('/login', async (req, res) => {
  const {usuario, senha} = req.body;

  const user = usuarios.find(u => u.usuario === usuario); //buscar usuario

  if (!user) {
    return res.status(401).json({ error: 'Usuário não encontrado' });
  }

  bcrypt.compare(senha, user.senha, (err, result) => {
    if (err) {
      return res.status(500).json({ mensagem: "Erro no servidor" });
    } //comparar senha com o hash armazenado
      //Para isso funcionar, as senhas no usuarios.js precisam ser hashes gerados pelo bcrypt

    if (result) {
      // Gerando uma chave de acesso simples (Ex: um número aleatório em base 36)
      // Em um sistema real, você salvaria isso num banco de dados para validar depois
      const chaveAcesso = Math.random().toString(36).substring(2) + Date.now().toString(36);

  return res.json({ 
        usuario: true, 
        token: chaveAcesso, // Sua "Chave de Acesso" gerada manualmente
        mensagem: "Bem-vindo!" 
      });
    } else {
      return res.status(401).json({ mensagem: "Senha inválida" });
    }
  })
})


// Rota para filtrar por Relevância e Status, usando query params
app.get('/tarefas/relevancia', (req, res) => {
  const {tipo} = req.query;
  if (!tipo) return res.json(listaTarefas); // Se não tiver filtro, retorna tudo

  const tarefasFiltradas = listaTarefas.filter(tarefa => tarefa.relevancia.toLowerCase() === tipo.toLowerCase());
  res.json(tarefasFiltradas); //filtro de tarefas por relevancia, usando query params (ex: /tarefas/relevancia?tipo=alta)
})

app.get('/tarefas/status', (req, res) => {
  const {tipo} = req.query;
  if (!tipo) return res.json(listaTarefas); // Se não tiver filtro, retorna tudo

  const tarefasFiltradas = listaTarefas.filter(tarefa => tarefa.status.toLowerCase() === tipo.toLowerCase());
  res.json(tarefasFiltradas); //filtro de tarefas por status, usando query params (ex: /tarefas/status?tipo=pendente)
})

// filtrar por Relevância
// Exemplo: localhost:3000/tarefas/relevancia?tipo=importante
// filtrar por Status
// Exemplo: localhost:3000/tarefas/status?tipo=finalizada



app.get('/login', (req, res) => {
  res.json(usuarios)
})

app.get('/tarefas', (req, res) => {
  res.json(listaTarefas)
})

app.get('/usuarios', (req, res) => {
  res.json(devs)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})