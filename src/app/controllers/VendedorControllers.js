import { Field } from 'pg-protocol/dist/messages';
import * as Yup from 'yup';
import { password } from '../../config/database';
import Vendedores from '../model/Vendedores';


class VendedorController {
    //===================================================================================================    
    //Criar vendedor.
    async store(req, res) {

        //Validar nome.
        if (!req.body.name) {
            return res.status(400).json({ error: "Informe o nome do vendedor" })
        }


        //Validar cpf
        if (!req.body.cpf) {
            return res.status(400).json({ error: "Informe cpf do vendedor" })
        }

        const userExists = await Vendedores.findOne({
            where: { cpf: req.body.cpf }
        });

        if (userExists) {
            return res.status(400).json({ error: "Usuario ja cadastrado" })
        }

        try {
            const { id, name, cpf, email } = await Vendedores.create(req.body);
            return res.json({
                id,
                name,
                cpf,
                email,
            })
        } catch (error) {
            return res.status(400).json({ error: "Erro ao cadastrar vendedor" })
        }

    }

    //Alterar dados vendedor.
    async updateVendedor(req, res) {

        const { vendedor_id } = req.params;
        const vendedor = await Vendedores.findByPk(vendedor_id);

        if (!vendedor) {
            return res.status(400).json({ error: "Vendedor não encontrado" });
        }

        await vendedor.update(req.body);
        return res.json(vendedor);
    }


    //Alterar dados vendedor.
    async deleteVendedor(req, res) {

        const { vendedor_id } = req.params;
        const vendedor = await Vendedores.findByPk(vendedor_id);

        if (!vendedor) {
            return res.status(400).json({ error: "Vendedor não encontrado" });
        }

        try {
            await vendedor.destroy(vendedor.id);
            return res.json({ msg: "Vendedor excluido com sucesso" });
        } catch (error) {
            return res.status(400).json({ error: "Não foi possivél excluir vendedor" });
        }

    }


    //Selecionar vendedores.
    async selectedVendedores(req, res) {
        const vendedores = await Vendedores.findAll();
        console.log(vendedores)
        if (!vendedores) {
            return res.status(401).json({ error: "Vendedores não localizados" });
        }

        return res.json(vendedores);
    }
}

export default new VendedorController();