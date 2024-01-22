import ClientRepository from "../models/selecoes.js";

//apenas para teste inicial para verificar se está realizando querys no banco
// async function findAll(req, res) 
//{
//   const selecoes = await ClientRepository.findAll();
//   res.json(selecoes);
// }

function findAllSelecao(req, res) 
{
  ClientRepository.findAll().then((result) => res.json(result));
}

async function findSelecaoId(req, res) 
{
 await  ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addSelecao(req, res) 
{
  ClientRepository.create({
    selecao: req.body.selecao,
    cabeca_chave: req.body.cabeca_chave,
    grupo: req.body.grupo,
  }).then((result) => res.json(result));
}

async function updateSelecao(req, res) 
{
  await ClientRepository.update(
    {
      selecao: req.body.selecao,
      cabeca_chave: req.body.cabeca,
      grupo: req.body.grupo,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteSelecao(req, res) 
  {
  await ClientRepository.findByPk(req.params.id).then((result) => res.json({Registo_excluída:result}));
  await ClientRepository.destroy({
    where: {
      id: req.params.id,
    },
  });
}

export default { findAllSelecao, findSelecaoId, addSelecao, updateSelecao,deleteSelecao };