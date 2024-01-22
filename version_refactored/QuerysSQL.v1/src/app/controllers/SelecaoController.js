import SelecaoRepository from '../repositories/SelecaoRepository.js';

class SelcaoController
{
    async index(req, res) 
    {
        const row = await SelecaoRepository.findAll();
        res.status(200).json(row);
    };
    //===================================================
    async show(req, res) 
    {   
        const id = req.params.id;
        const row = await SelecaoRepository.findById(id);
        res.status(200).json(row);
    };
    //===================================================
    async store(req, res) 
    {
        const selecao = req.body;
        const row = await SelecaoRepository.create(selecao);
        res.status(201).json(row);
    };
    //===================================================
    async update(req, res) 
    {
        const id = req.params.id
        const dados = req.body
        const row = await SelecaoRepository.update(dados, id);
        res.status(201).json(row);
    };
    //===================================================
    async delete(req, res) 
    {   
        const id = req.params.id;
        const row = await SelecaoRepository.delete(id);
        res.status(200).json(row);
    }
    //===================================================
}
export default new SelcaoController;