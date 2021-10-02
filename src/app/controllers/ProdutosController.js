import { Field } from 'pg-protocol/dist/messages';
import * as Yup from 'yup';
import { password } from '../../config/database';
import Produtos from '../model/Produtos';


class ProdutosController {
    //===================================================================================================    
    //Criar produtos.
    async store(req, res) {

        //Validar descrição.
        if (!req.body.descricao) {
            return res.status(400).json({ error: "Informar a descrição do produto" })
        }


        //Validar .
        if (!req.body.unidade) {
            return res.status(400).json({ error: "Informar a unidade do produto" })
        }


        //Validar .
        if (!req.body.preco) {
            return res.status(400).json({ error: "Informar o preço" })
        }

        const { id, descricao, unidade, preco, status } = await Produtos.create(req.body);
        return res.json({
            id,
            descricao,
            unidade,
            preco,
            status
        })

    }

    //Alterar dados produtos.
    async updateProduto(req, res) {

        const { produto_id } = req.params;
        const produto = await Produtos.findByPk(produto_id);

        if (!produto) {
            return res.status(400).json({ error: "Produto não encontrado" });
        }

        await produto.update(req.body);
        return res.json(produto);
    }


    //Selecionar produtos.
    async selectedProdutos(req, res) {
        const produtos = await Produtos.findAll();
        return res.json(produtos);
    }
}

export default new ProdutosController();