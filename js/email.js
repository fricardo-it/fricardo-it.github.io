document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    
    // Pegue os valores do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Construa o corpo do e-mail
    var message = "Name: " + name + "\n";
    message += "Email: " + email;
  
    // Envie o e-mail usando a API do Gmail
    Email.send({
      Host: "smtp.gmail.com",
      Username: "seuemail@gmail.com",
      Password: "sua_senha",
      To: 'destinatario@example.com',
      From: "seuemail@gmail.com",
      Subject: "Contact from website",
      Body: message
    }).then(
      message => alert("E-mail sent successfully!")
    );
  });
  