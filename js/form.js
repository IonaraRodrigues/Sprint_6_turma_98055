
//class contato

class contato {
    construtor(nome, email,telefone, tipo, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;
    }
}

function Post(form) {

  let data = new contato
           (form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
  
    console.log("Dados do  formulário:", data);

    alert(`Obrigado, ${data.nome}! Sua mensagem de ${data.tipo} foi enviado com sucesso.`);
    
    form.reset();
}