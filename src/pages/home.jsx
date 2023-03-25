import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [alunos, setAlunos] = useState([]);

    const navigate = useNavigate();

    async function getAlunos() {
        try {
          const response = await axios.get("https://api-aluno.vercel.app/aluno");
          setAlunos(response.data);
        } catch (error) {
          alert("Erro ao buscar dados");
        }
    }

    async function deleteAluno(id) {
        try {
          await axios.delete(`https://api-aluno.vercel.app/aluno/${id}`);
          getAlunos();
          alert("Aluno Apagado");
        } catch (error) {
          alert("Erro ao tentar remover Aluno");
        }
      }

    useEffect(() => {
        getAlunos();
      }, []);
  
    return (
      <div className={{}}>
            <h1>Aluno Page</h1>
            <div id="cadastrar">
            <button onClick={() => navigate("/form/nenhum")}>
                Cadastrar novo aluno
            </button>
            </div>
            <div className="home">
            <div id="home">
             
                {alunos.map((aluno) => (
                    <div
                       className="cards"
                        key={aluno._id}
                        style={{ border: "1px solid #999", marginBottom: 5, listStyleType:"none" }}
                    >
                        <h3>{aluno.nome}</h3>
                        <p>{aluno.matricula}</p>
                        <p>{aluno.curso}</p>
                        <p>{aluno.bimestre}</p>
                        <div id="button">
                        <button onClick={() => deleteAluno(aluno._id)}>Apagar</button>
                        <button onClick={() => navigate(`/form/${aluno._id}`)}>Editar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     </div>
    );
}