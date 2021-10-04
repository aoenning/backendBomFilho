import jwt from 'jsonwebtoken';
import User from '../model/User';

class SessionController {
    //===================================================================================================    
    //Seleciona token do usuario.    
    async store(req, res) {
        const { cpf, password } = req.body;

        //Verificar usuario cadastrado.
        const user = await User.findOne({
            where: { cpf }
        });

        if (!user) {
            return res.status(401).json({ sucesso: 'Usuario não existe.' })
        }

        //Validar senha do usuario.
        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Senha incorreta.' })
        }

        const { id, name, email } = user;

        return res.json({
            user: {
                id,
                name,
                cpf,
                email,
            },

            token: jwt.sign({ id }, process.env.SECRET, {
                expiresIn: process.env.EXPIRESIN,
            }),

        });
    }
}

export default new SessionController();