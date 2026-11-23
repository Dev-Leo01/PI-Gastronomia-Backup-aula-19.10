import TurmaModel from "../models/TurmaModel.js";
class TurmaService {
    static async cadastrar(id_usuario, dados) {
        const {
            cod_oferta,
            dataInicio,
            periodo,
            fk_curso
        } = dados;
        const periodoLimpo = periodo.trim();
        if (
            !cod_oferta ||
            !dataInicio ||
            !periodoLimpo ||
            !fk_curso
        ) {
            throw new Error(
                "Todos os campos são obrigatórios!"
            );
        }
        const turma = await TurmaModel.criar(
            id_usuario,
            {
                cod_oferta,
                dataInicio,
                periodo: periodoLimpo,
                fk_curso
            }
        );
        return turma;
    }
}
export default TurmaService;