import CursoModel from "../models/CursoModel.js";
class CursoService {
    static async cadastrar(id_usuario, dados) {
        const {
            titulo,
            cargaHoraria,
            modalidade,
            formato
        } = dados;
        const tituloLimpo = titulo.trim();
        const modalidadeLimpa = modalidade.trim();
        const formatoLimpo = formato.trim();
        if (
            !tituloLimpo ||
            !cargaHoraria ||
            !modalidadeLimpa ||
            !formatoLimpo
        ) {
            throw new Error(
                "Todos os campos são obrigatórios!"
            );
        }
        const curso = await CursoModel.criar(
            id_usuario,
            {
                titulo: tituloLimpo,
                cargaHoraria,
                modalidade: modalidadeLimpa,
                formato: formatoLimpo
            }
        );
        return curso;
    }
}

export default CursoService;