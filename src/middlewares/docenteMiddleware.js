import AuthService from "../services/authService"

class docenteMiddleware {
    static async validarPerfil(req, res) {
        try {
            const perfil = await AuthService
            .buscarPorIdUsuario(req.usuario.id_usuario);
            if (!perfil) {
                return res.status(403).json({
                    erro: `Usuário não encontrado no sistema, portanto,
                    não possui um perfil`
                });
            }
                if (perfil.perfil_usuario !== "Docente") {
                    return res.status(403).json ({
                        erro: `Acesso permitido apenas para o perfil Docente`
                    });
                }
                req.usuario = perfil;
        }
        catch (erro) {
            return res.status(500).json({
                erro: `Erro ao validar perfil de docente: ${erro.message}`
            })
        }
    }
}
export default docenteMiddleware;