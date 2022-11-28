function AddUser(event) {
    event.preventDefault();

    fetch('./register.php', { 
        method: 'POST', 
        body: new FormData(document.querySelector('#form-user'))
    })
    .then(() => alert("Cadastrado com sucesso!"))
    .catch(error => alert(error));
    document.getElementById("form-user").reset();
    return;
}

