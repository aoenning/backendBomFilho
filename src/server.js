import dotenv from 'dotenv';
import app from './app';


dotenv.config();


app.listen(process.env.PORT || 3333, () => {
    console.log('Servidor rodando na porta 33333')
});