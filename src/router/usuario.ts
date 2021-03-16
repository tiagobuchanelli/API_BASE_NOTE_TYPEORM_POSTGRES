import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';
import { Usuario } from '../entity/Usuario';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

/**
 * Serviço para salvar um novo usuario
 */
routerUsuario.post('/', async (req, res) => {
    //outra forma: const dados = req.body; 
    //outra forma: const usuario = new Usuario(dados.nome, dados.email);
    const { nome, email } = req.body;
    const usuario = new Usuario(nome, email);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);  //teste rapido, mas o ideal é validar os dados antes de salvar

    //outra forma de fazer sem usar o construtor na classe
    //const dados = req.body;
    //const usuario = new Usuario();
    //usuario.nome = dados.nome;
    //usuario.email = dados.email;
});

/**
 * Listar todos os usuarios
 */
routerUsuario.get('/', async (req, res) => {
    const usuarios = await usuarioCtrl.recuperarTodos();
    res.json(usuarios);
});


/**
 * Serviço para recuperar os lançamentos de um determinado usuario
 */
routerUsuario.get('/lancamentos/:idUsuario', async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario); //convertido o dado para NUMBER/int
    const lancamentos = await usuarioCtrl.recuperarLancamentoDoUsuario(idUsuario);
    res.json(lancamentos);
});


