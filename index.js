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
        const resultado = await pool.query('SELECT * FROM heroi');
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


  app.put('/heroi/:id', async (req, res) => {

    
    try {
        const { id } = req.params;
        const { nome, poder, nivel, hp } = req.body;
  
        await pool.query('UPDATE herois SET nome = $1, poder = $2, nivel = $3, hp = $4 WHERE id = $5', [ nome, poder, nivel, hp , id]);
        res.status(200).send({ mensagem: 'Heroi atualizada com sucesso 🎇' });
    } catch (error) {
        console.error('Erro ao atualizar heroi', error);
        res.status(500).send('Erro ao atualizar heroi');
    }
  });

  app.delete('/heroi/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM heroi WHERE id = $1', [id]);
        res.status(200).send({ mensagem: 'Heroi deletado com sucesso 🎇' });
    } catch (error) {
        console.error('Erro ao excluir heroi ', error);
        res.status(500).send({ mensagem: 'Erro ao deletar o heroi ' });
    }
});

app.get('/batalha/:heroi1_id/:heroi2_id', async (req,res)=>{
    const {heroi1_id, heroi2_id} = req.params;

    try{
        const vencedorId = await calcularVencedor(heroi1_id, heroi2_id);
         
        await pool.query('INSERT INTO batalha (heroi1_id, heroi2_id, vencedor_id) VALUES ($1, $2, $3)', [heroi1_id, heroi2_id, vencedorId]);
        
        const {rows} = await pool.query('SELECT * FROM heroi WHERE id = $1', [vencedorId]);
        res.json({vencedor: rows[0], message: 'Batalha realizada🎇'});
    } catch(error){
        res.status(500).json({message:'error ao batalhar'});
    }
});

async function calcularVencedor (heroi1_id, heroi2_id){
    const heroi1 = await pool.query('SELECT *FROM heroi WHERE id = $1', [heroi1_id]);
    const heroi2 = await pool.query('SELECT *FROM heroi WHERE id = $1', [heroi2_id]);

    if (heroi1.rows[0].hp > heroi2.rows[0].hp){
        return heroi1_id;
    } else if (heroi1.rows[0].hp >heroi2.rows[0].hp){
        return heroi2_id;
    } else {
        if (heroi1.rows[0].hp > heroi2.rows[0].hp) {
            return heroi1_id;
        } else if (heroi1.rows[0].hp < heroi2.rows[0].hp){
            return heroi2_id;
        } else {
            return heroi1_id;
        }
    }

}

app.get('/batalha', async (req, res)=> {
    try{
        const resultado = await pool.query('SELECT * FROM batalha');
        res.json({
            total:resultado.rowCount,
            batalha: resultado.rows
        });
    } catch (error){
        console.log('Erro ao obter o historico de batalha', error);
        res.status(500).json({message:'error ao obter o historico de batalha'})
    }
});



app.get('/batalha/heroi', async (req,res)=> {
    try{
        const {rows} = await pool.query('SELECT batalha.id, heroi1_id, heroi2_id, vencedor_id, hero.nome as vencedor_nome, heroi.poder as vencedor_poder, heroi.nivel as vencedor_nivel, heroi.hp as vencedor_hp FROM batalha INNER JOIN heroi ON batalha.vencedor_id = heroi.id');
        res.json(rows);
    } catch (error) {
        console.log('erro ao obter o historico de batalha com dados do heroi', error);
        res.status(500).json({message: 'erro ao obter o historico de batalha com dados do heroi'})
    }
});



app.get('batalha/id/heroi_id', async (req, res)=>{
    try{
        const {nome} = req.params;
        console.log(nome);
        const resultado = await pool.query('SELECT * FROM batalha WHERE heroi_id = $1', [heroi_id]);
        if(resultado.rowCount === 0) {
          res.status(404).send({message: 'batalha com heroi por id ${heroi_id} não encontrada'});
        } else {
            res.status(200).json(resultado.rows[0]);
        }
    } catch(error){
        console.log('erro ao obter batalha por id', error);
        res.status(500).json({message: 'erro ao obter batalha por id'})
    }
})




//rota teste
app.get('/',(req,res) =>{
    res.send('Servidor funcionando');
}
)

//inicializar o servidor
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port} 🎇`)
});