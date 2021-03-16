import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidorNoBD } from './config/db';
import { routerUsuario } from './router/usuario';
import { routerLancamento } from './router/lancamento'

/**
 * Cria a aplicação
 */

export const app = express();

/**
 * Libera o acesso aos serviços
 */
app.use(cors());

/**
 * Permite receber e enviar JSON
 */
app.use(bodyParser.json());

/**
 * Configura os Lods
 */
app.use(logger('dev'));

/**
 * Conecta ao DB
 */
conectarServidorNoBD();

/**
 * Configuração de rotas
 */
app.use('/usuario', routerUsuario);
app.use('/lancamento', routerLancamento);
app.use('', (req, res) => res.send('API de teste node!'));


