import Express from 'express';
const app = Express();

//indicar para o express que irá receber reponses do body em formato json
app.use(Express.json())

//mock
const selecoes=[
    {id:1, selecao:"Brasil", ['cabeça de chave']: "sim", grupo:"G"},
    {id:2, selecao:"Suíça", ['cabeça de chave']: "não", grupo:"G"},
    {id:3, selecao:"Sérvia", ['cabeça de chave']: "não", grupo:"G"},
    {id:4, selecao:"Camarões", ['cabeça de chave']: "não", grupo:"G"},
];

//buscar seleção por ID
function selecaoPorID(id)
{
    return selecoes.filter(res=> res.id == id)
}

//Buscar seleção por id e usar o index em que ela se encontra no array
function indexDoArraySelecao(id){
    return selecoes.findIndex(res => res.id == id)
}


        //rotas get//

//caminho raiz
app.get('/',(req, res)=>
{ 
    res.send("Hello!!");
});

//get de todos os dados
app.get('/selecoes',(req,res)=>{
   res.status(200).send(selecoes);
});

//get com uso de query
app.get('/selecoes/:id',(req,res)=>{
    // teste de retorno
    // let index = req.params.id;
    res.send(selecaoPorID(req.params.id))
});
            //fim rotas get

            //rota de inserção
app.post('/selecoes',(req,res)=>{
    selecoes.push(req.body);
    res.status(201).send("Seleção cadastrada com sucesso");
})
            //fim rota de inserção

            //rota update
app.put('/selecoes/:id',(req,res)=>{
    // const index = req.params.id-1
    const index = indexDoArraySelecao(req.params.id)
    selecoes[index].selecao=req.body.selecao
    selecoes[index].grupo=req.body.grupo
    res.status(201).json(selecoes[index])
})
            //fim rota update

            //rota delete
app.delete('/selecoes/:id',(req,res)=>{
    // const index = req.params.id-1 => serve somente para o teste com dados em um array
    //const index = selecaoPorID(req.params.id) => server bem para fazer o que a função abaixo faz, porém não é a mais pertinente.
    const index = indexDoArraySelecao(req.params.id)
    selecoes.splice(index,1)
    res.send(`seleção de id:${index+1} excluída com suesso`)
})
//fim rota delete

export default app;