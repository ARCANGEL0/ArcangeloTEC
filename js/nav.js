

$("#enus").on('click',() => {

window.location.href = 'https://arcangelo.dev/EN-US'
})


$("#ptbr").on('click',() => {

window.location.href = 'https://arcangelo.dev'
})



$("#mandaremail").on('submit', (e) => {

  e.preventDefault();


  body = "<h2><strong>Contato enviado do formulário do site:</strong></h2><br><br>" + "Nome: " + $("#nome_form").val() + " <br><br>" + "Email:  " + $("#email_form").val() + '<br><br><br><br>___________________<br><br><br>' + $("#mensagem_form").val(),

    Email.send({
      SecureToken: "74d83c5b-691d-4972-8309-a773d45fbd16",
      To: 'rick_arcangelo@hotmail.com',
      From: 'ryuusakis@gmail.com',
      Subject: $("#assunto_form").val(),
      Body: body
    }).then(
      (message) => {
          if(message == 'OK'){
          toastr.success('Email enviado!', 'Sucesso!');
         console.log(s);
       }
          else {
           toastr.error('Houve algum erro ao enviar o email.', 'Ops!');
           console.log(message);         
            }
      }
    );
});


function inicio() {
  
    document.getElementById('home').style.display = 'block';
    document.getElementById('particles-js').style.display = 'block';
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('servicos').style.display = 'none';
            document.getElementById('portfolio').style.display = 'none';

    document.getElementById('contato').style.display = 'none';


}

function sobre() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('particles-js').style.display = 'none';
    document.getElementById('sobre').style.display = 'block';
    document.getElementById('servicos').style.display = 'none';
            document.getElementById('portfolio').style.display = 'none';

    document.getElementById('contato').style.display = 'none';


}

function servicos() {
  
    document.getElementById('home').style.display = 'none';
    document.getElementById('particles-js').style.display = 'none';
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('servicos').style.display = 'block';
    document.getElementById('contato').style.display = 'none';
            document.getElementById('portfolio').style.display = 'none';



}



function portfolio() {
  
    document.getElementById('home').style.display = 'none';
    document.getElementById('particles-js').style.display = 'none';
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('servicos').style.display = 'none';
        document.getElementById('contato').style.display = 'none';

    document.getElementById('portfolio').style.display = 'block';


}

function contato() {
  
    document.getElementById('home').style.display = 'none';
    document.getElementById('particles-js').style.display = 'none';
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('servicos').style.display = 'none';
        document.getElementById('portfolio').style.display = 'none';

    document.getElementById('contato').style.display = 'block';


}
