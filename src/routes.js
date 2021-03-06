import { Router } from 'express';
import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';
import authMiddleware from './app/middlewares/auth';
import ProdutosController from './app/controllers/ProdutosController';
import VendedorController from './app/controllers/VendedorControllers';
import ClienteController from './app/controllers/ClienteController';


const routes = new Router();


//Rota de usuarios.
//====================================================
//Cadastro usuario.
routes.post('/users', UserController.store);

//Gerar token usuario.
routes.post('/session', SessionController.store);


//Validar primeiro o acesso do usuario.
routes.use(authMiddleware);

//Alterar dados usuario.
routes.put('/users', UserController.updateUser);

//Selecionar dados usuario.
routes.get('/user', UserController.selectedUserId);


//Rota de produtos.
//=================================================

//Cadastro de produtos.
routes.post('/produto', ProdutosController.store);

//Cadastro de produtos.
routes.put('/produto/:produto_id', ProdutosController.updateProduto);

//Selecionar produtos
routes.get('/produtos', ProdutosController.selectedProdutos);



//Rota de vendedores.
//=================================================

//Cadastro de vendedor.
routes.post('/vendedor', VendedorController.store);

//Alterar dados vendedores.
routes.put('/vendedor/:vendedor_id', VendedorController.updateVendedor);

//Deletar vendedor.
routes.delete('/vendedor/:vendedor_id', VendedorController.deleteVendedor);

//Selecionar vendedores
routes.get('/vendedores', VendedorController.selectedVendedores);




//Rota de cliente.
//=================================================

//Cadastro de cliente.
routes.post('/clientes', ClienteController.store);

//Alterar dados cliente.
routes.put('/cliente/:cliente_id', ClienteController.updateCliente);


//Selecionar clientes
routes.get('/clientes', ClienteController.selectedClientes);

export default routes;
