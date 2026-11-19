import AuthService from "../services/authService"

class apoioMiddleware {
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
                if (perfil.perfil_usuario !== "Apoio") {
                    return res.status(403).json ({
                        erro: `Acesso permitido apenas para o perfil Apoio `
                    });
                }
                req.usuario = perfil;
        }
        catch (erro) {
            return res.status(500).json({
                erro: `Erro ao validar perfil de apoio: ${erro.message}`
            })
        }
    }
}
export default apoioMiddleware;