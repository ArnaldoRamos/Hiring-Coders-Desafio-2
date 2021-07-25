function validarCadastro(nome, email, endereco, complemento, bairro) {

  let nome = document.getElementById(nome).value;
  let email = document.getElementById(email).value;
  let endereco = document.getElementById(endereco).value;
  let complemento = document.getElementById(complemento).value;
  let bairro = document.getElementById(bairro).value;

  if (nome == "") {
    alert("O nome do cliente não pode estar em branco. Favor preenché-lo.");
  } else {
    cadastrarClientes(nome,
      email,
      endereco,
      complemento,
      bairro,
    )
  }
}


function cadastrarClientes(nome, email, endereco, complemento, bairro) {
  let novoCliente = {
    nome: nome, email: email, endereco: endereco, complemento: complemento, bairro: bairro
  };

  if (typeof (Storage) !== "undefined") {
    let clientes = localStorage.getItem("clientes");
    if (clientes == null) {
      clientes = []; // Nenhum produto foi cadastrado ainda
    } else {
      clientes = JSON.parse(clientes);
    }
    clientes.push(novoCliente); // Adiciona um novo produto
    localStorage.setItem("clientes", JSON.stringify(clientes))
    alert("Cliente cadastrado com sucesso!")
    location.reload();
  } else {
    alert("A versão do seu navegador é muito antiga!")
  }
}