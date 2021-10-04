import { Field } from 'pg-protocol/dist/messages';
import * as Yup from 'yup';
import User from '../model/User';


class UserController {
    //===================================================================================================    
    //Criar usuario.
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            cpf: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na validação.' });
        }

        const userExists = await User.findOne({
            where: { cpf: req.body.cpf }
        });

        if (userExists) {
            return res.status(400).json({ error: "Usuario ja cadastrado" })
        }

        const { id, name, cpf, email } = await User.create(req.body);
        return res.json({
            id,
            name,
            cpf,
            email,
        })

    }

    //===================================================================================================    
    async selectedUserId(req, res) {

        //Selecionar usuario.
        const userId = await User.findOne({
            where: { cpf: req.query.cpf, password_hash: req.query.password }
        });

        if (userId) {
            return res.status(200).json({ sucesso: "Usuario validado com sucesso" })
        }

        return res.status(400).json({ erro: "Usuario não cadastrado ou senha ou senha incorreta" })
    }

    //===================================================================================================    
    async updateUser(req, res) {
        // Alteração de dados usuario.
        const schema = Yup.object().shape({
            name: Yup.string(),
            cpf: Yup.string(),
            email: Yup.string().email(),
            oldPassword: Yup.string().min(6),
            password: Yup.string()
                .min(6)
                .when('oldPassword', (oldPassword, field) =>
                    oldPassword ? field.required() : field),
            confirmPassword: Yup.string().when('password', (password, field) =>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            ),
        });


        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na validação.' });
        }

        const { cpf, oldPassword } = req.body;

        //selecionando id do usuario.
        const user = await User.findByPk(req.userId);


        if (cpf !== user.cpf) {
            const userExists = await User.findOne({
                where: { cpf: req.body.cpf }
            });

            if (userExists) {
                return res.status(400).json({ error: "Usuario ja cadastrado" })
            }
        }

        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json({ error: "Senha incorreta." })
        }

        const { id, name, email } = await user.update(req.body);

        return res.json({
            id,
            cpf,
            name,
            email
        });
    }
}

export default new UserController();