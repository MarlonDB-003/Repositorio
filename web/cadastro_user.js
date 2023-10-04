document.getElementById('userForm').addEventListener('submit', async(e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const siape = document.getElementById('siape').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const res = await fetch('http://localhost:3002/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, cpf, siape, email, senha })
    });

    const data = await res.json();

    if (res.status === 201) {
        alert('Usuário registrado com sucesso!');
    } else {
        alert('Erro ao registrar usuário: ' + data.msg);
    }

});