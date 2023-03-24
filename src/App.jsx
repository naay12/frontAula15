import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
//const [aluno, setAluno] =useState([]);


 async function getAluno(){
   
  try {
    const response = await axios.get('https://api-aluno.vercel.app/aluno');
    console.log(response.data)
  
    //const alunos = 
    //setAluno(response.data);
    
  } catch (error) {
    alert("erro ao buscar dados")
  }

}


useEffect(() =>{
  getAluno;
}, []);

return(
  <div>
    <h1> Hello word</h1>
    {/*{todos.map}*/}
   {/* <p>{JSON.stringify(products)}</p>*/}
  </div>
);
}

export default App
