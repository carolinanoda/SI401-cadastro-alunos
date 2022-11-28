let ArrayAlunos = [];

const getArrayAlunos = async () => {
  const response = await fetch("./../cadastro-alunos/AlunosCadastrados.json");
  const disorderlyArrayAlunos = await response.json();

  ArrayAlunos = sortArrayAlunosByIdentifer(disorderlyArrayAlunos);
  gerarLista();
};

const gerarLista = () => {
  ArrayAlunos.forEach((aluno) => {
    document.getElementById("aluno-tabela").innerHTML += 
      `<tr>
        <td>${aluno.RA}</td>
        <td>${aluno.Genero}</td>
        <td>${aluno.Idade}</td>
        <td>${aluno.Nome}</td>
        <td>${aluno.Endereco}</td>
        <td>${aluno.Telefone}</td>
        <td>${aluno.Email}</td>
      </tr>
      <div id="aluno-info" style="display:none">
        <h4>${aluno.RA}</h4>
        <h4>${aluno.Nome}</h4>
      </div>`;
  });
};

const sortArrayAlunosByIdentifer = ArrayAlunosToSort => {
  return ArrayAlunosToSort.sort((nextAluno, previousAluno) => {
    if (nextAluno.RA > previousAluno.RA) {
      return 1;
    } else if (nextAluno.RA === previousAluno.RA) {
      if (nextAluno.nome > previousAluno.nome) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });
}

getArrayAlunos();