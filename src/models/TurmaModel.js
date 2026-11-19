import {connAdmin} from "../config/database.js"
 
class TurmaModel {
    static async criar(dados){
        const {
            data,
            error
        } = await connAdmin.from("curso").insert({
            id_usuario: id_usuario,
            cod_oferta: dados.cod_oferta,
            dataInicio: dados.dataInicio,
            periodo: dados.periodo,
            fk_curso: dados.id_curso
        }).select().single();
        if(error) {
            throw error;
        }
 
        return data;
    }
}
 
export default TurmaModel