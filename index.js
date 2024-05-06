const e = require('express');
const express = require('express');
const {Pool} = require('pg');

const app = express();
const port = 4000;

app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'herois',
    password: 'ds564',
    port: 7007
});

app.get('/heroi', async (req, res) => {
    try{
        const resultado = await pool.query('SELECT * FROM herois');
        res.json({
            total: resultado.rowCount,
            herois: resultado.rows,
        });
    } catch(error){
        console.log('Erro ao obter todos os herois', error);
        res.status(500).send({message: 'Erro ao obter todos os herois'});
    }
});

app.post('/heroi', async (req, res) => {
    try {
        const { nome, poder, nivel, hp } = req.body;
  
        await pool.query('INSERT INTO herois (nome, poder, nivel, hp) VALUES ($1, $2, $3, $4)', [nome, poder, nivel, hp]);
        res.status(201).send({ mensagem: 'Heroi criada com sucesso 🎇' });
    } catch (error) {
        console.error('Erro ao adicionar heroi', error);
        res.status(500).send('Erro ao criar heroi');
    }
  });






//rota teste
app.get('/',(req,res) =>{
    res.send('Servidor funcionando');
}
)

//inicializar o servidor
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port} 🎇`)
});