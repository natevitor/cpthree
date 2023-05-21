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