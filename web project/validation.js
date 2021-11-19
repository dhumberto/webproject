function validar() {
    var name = formuser.name.value;
    var email = formuser.email.value;
    var phone = formuser.phone.value;
    var endereco = formuser.endereco.value;
    var pedido = formuser.pedido.value;

    if(name == ""){
        alert('Preencha o campo nome');
        formuser.name.focus
        return false
    }

    if(email == ""){
        alert('Preencha o campo e-mail');
        formuser.email.focus
        return false
    }

    if(phone == ""){
        alert('Preencha o campo telefone');
        formuser.phone.focus
        return false
    }

    if(endereco == ""){
        alert('Informe-nos seu endereço');
        formuser.name.focus
        return false
    }

    if(pedido == ""){
        alert('Por favor, detalhe o seu pedido');
        formuser.name.focus
        return false
    }
}