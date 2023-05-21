// Função para ativar o Dark Mode
function activateDarkMode() {
    document.body.classList.add('dark-mode');
}

// Função para desativar o Dark Mode
function deactivateDarkMode() {
    document.body.classList.remove('dark-mode');
}

// Adicionando evento de clique ao botão de Dark Mode
document.getElementById('darkModeButton').addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
        deactivateDarkMode(); // Desativa o Dark Mode
    } else {
        activateDarkMode(); // Ativa o Dark Mode
    }
});

// Função para validar o formulário
function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Verifica se a senha e a confirmação de senha são iguais
    if (password !== confirmPassword) {
        return false;
    }

// Verifica se os campos possuem tamanho mínimo adequado
if (firstName.length < 5 || lastName.length < 5 || email.length < 5) {
    return false;
}

return true;
}

// Adicionando evento de submit ao formulário
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        console.log('Formulário válido. Enviando dados...'); // Mensagem de sucesso
        document.getElementById('cadastroForm').submit(); // Envia o formulário
    } else {
        console.log('Formulário inválido. Preencha corretamente os campos.'); // Mensagem de erro
    }
});