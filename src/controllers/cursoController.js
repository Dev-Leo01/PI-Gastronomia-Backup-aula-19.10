import CursoService from "../services/cursoService.js";
class CursoController {
 static async cadastrar(req, res) {
 try {
 const requisicao =
 await CursoService.cadastrar(
 req.usuario.id,
 req.body
 );
 return res.status(201).json({
 mensagem: "Curso cadastrado com sucesso",
 curso: requisicao
 });
 }
 catch (erro) {
 return res.status(400).json({
 erro: `Falha ao cadastrar curso: ${erro.message}`
 });
 }
 }
}
export default CursoController;