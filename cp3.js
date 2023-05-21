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
