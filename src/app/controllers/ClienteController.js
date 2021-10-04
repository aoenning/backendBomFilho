import { Field } from 'pg-protocol/dist/messages';
import * as Yup from 'yup';
import Clientes from '../model/Clientes';


class ClienteController {
    //===================================================================================================    
    //Cadastro cliente.
    async store(req, res) {

        //Validar descrição.
        if (!req.body.nome) {
            return res.status(400).json({ error: "Informar o nome do cliente" })
        }


        //Validar .
        if (!req.body.telefone) {
            return res.status(400).json({ error: "Informar o telefone" })
        }


        //Validar .
        if (!req.body.endereco) {
            return res.status(400).json({ error: "Informar o endereço" })
        }


        //Validar .
        if (!req.body.cep) {
            return res.status(400).json({ error: "Informar o cep" })
        }

        //Validar .
        if (!req.body.cidade) {
            return res.status(400).json({ error: "Informar o cidade" })
        }

        //Validar .
        if (!req.body.estado) {
            return res.status(400).json({ error: "Informar o estado" })
        }

        const { id, nome, cnpj, cpf, email } = await Clientes.create(req.body);
        return res.json({
            id,
            nome,
            cnpj,
            cpf,
            email
        })
    }

    //Alterar dados cliente.
    async updateCliente(req, res) {

        const { cliente_id } = req.params;
        const cliente = await Clientes.findByPk(cliente_id);

        if (!cliente) {
            return res.status(400).json({ error: "Cliente não encontrado" });
        }

        await cliente.update(req.body);
        return res.json(cliente);
    }


    //Selecionar clientes.
    async selectedClientes(req, res) {
        const clientes = await Clientes.findAll();
        if (!clientes.length) {
            return res.status(400).json({ error: "Clientes não encontrado" });
        }
        return res.json(clientes);
    }
}

export default new ClienteController();