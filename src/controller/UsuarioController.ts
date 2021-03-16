import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";

export class UsuarioController {
    async salvar(usuario: Usuario) {
        const usuarioSalvo = await getManager().save(usuario);
        return usuarioSalvo;
    }

    async recuperarTodos() {
        const usuarios = await getManager().find(Usuario);
        return usuarios;
    }

    async recuperarPorId(id: number) {
        const usuario = await getManager().findOne(Usuario, id);
        return usuario;
    }

    async recuperarLancamentoDoUsuario(id: number) {
        //const usuario = await this.recuperarPorId(id); Não vai funcionar por o metodo padrao nao tras os dados de reflexos
        const usuario = await getManager().findOne(Usuario, id, {
            relations: ['lancamentos']
        });
        return usuario.lancamentos;
    }
}