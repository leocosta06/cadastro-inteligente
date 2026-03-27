const form = document.getElementById('formCadastro');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const strengthBar = document.getElementById('password-strength');
const btnLogin = document.getElementById('login');
const btnText = document.getElementById('btn-text');
const spinner = document.getElementById('spinner');
const successMsg = document.getElementById('success-msg');

nome.addEventListener("blur", () => valiarCampo(nome, (v) => v.trim().length >= 3 ? {valido: true} : {valido: false, mensagem: 'Mínimo 3 caracteres'}));
email.addEventListener("blur", () => valiarCampo(email, (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? {valido: true} : {valido: false, mensagem: 'E-mail inválido'}));

password.addEventListener('input', () => {
    const status = validarSenhaDetalhada(password.value);
    atualizarBarraForca(status.pontos);
    valiarCampo(password, () => status);
});

confirm_password.addEventListener('input', () => {
    valiarCampo(confirm_password, (v) => v === password.value && v !== "" ? {valido: true} : {valido: false, mensagem: 'As senhas não conferem'});
});

function valiarCampo(input, funcaoValiar) {
    const mgsError = document.getElementById(input.id + '-error');
    const resultado = funcaoValiar(input.value);
    if (!resultado.valido) {
        input.classList.add("error");
        input.classList.remove('success');
        mgsError.textContent = resultado.mensagem;
    } else {
        input.classList.remove('error');
        input.classList.add("success");
        mgsError.textContent = '';
    }
}

function validarSenhaDetalhada(senha) {
    let erros = [];
    let pontos = 0;

    if (senha.length < 8) erros.push("8 caracteres"); else pontos++;
    if (!/[A-Z]/.test(senha)) erros.push("1 maiúscula"); else pontos++;
    if (!/[0-9]/.test(senha)) erros.push("1 número"); else pontos++;
    if (!/[^A-Za-z0-9]/.test(senha)) erros.push("1 especial"); else pontos++;

    if (erros.length > 0) {
        return { valido: false, mensagem: "Falta: " + erros.join(", "), pontos: pontos };
    }
    return { valido: true, pontos: pontos };
}

function atualizarBarraForca(pontos) {
    strengthBar.classList.remove('fraca', 'razoavel', 'boa', 'forte');
    if (pontos === 1) strengthBar.classList.add('fraca');
    else if (pontos === 2) strengthBar.classList.add('razoavel');
    else if (pontos === 3) strengthBar.classList.add('boa');
    else if (pontos === 4) strengthBar.classList.add('forte');
    else strengthBar.style.width = '0%';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const campos = [nome, email, password, confirm_password];
    const todosValidos = campos.every(input => input.classList.contains('success'));

    if (todosValidos) {
        btnLogin.disabled = true;
        btnText.textContent = "Enviando...";
        spinner.style.display = "block";

        setTimeout(() => {
            btnLogin.disabled = false;
            btnText.textContent = "Login";
            spinner.style.display = "none";
            successMsg.textContent = "Cadastro realizado com sucesso! ✓";
            successMsg.style.display = "block";
            form.reset();
            strengthBar.style.width = '0%';
            campos.forEach(c => c.classList.remove('success'));
        }, 2000);
    }
});