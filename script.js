function handleCadastro(event) {
    event.preventDefault();  // Previna a submissão do formulário

    const userNameInput = document.getElementById("username").value;
    if (userNameInput.trim() === "") {
        alert("Por favor, preencha o nome de usuário.");
        return;
    }

    const fileInput = document.getElementById('profile-picture-input');
    const file = fileInput.files[0];
    if (!file) {
        alert("Por favor, selecione uma imagem.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("profile-picture").src = e.target.result;
        document.getElementById("user-img").src = e.target.result;
        document.getElementById("usuario-img").src = e.target.result;
        document.getElementById("name").textContent = userNameInput;
        document.getElementById("nome").textContent = userNameInput;
        cadastrar();
    };
    reader.readAsDataURL(file);
}

function cadastrar() {
    const nav = document.getElementById("nav");
    const container = document.getElementById("container");
    const cadastro = document.getElementById("cadastrar");

    if (cadastro.style.display === "flex") {
        cadastro.style.display = "none";
        nav.style.display = "flex";
        container.style.display = "flex";
        document.getElementById("confirmContainer").style.display = "none";
    } else {
        cadastro.style.display = "flex";
        nav.style.display = "none";
        container.style.display = "none";
    }
}

function openLogoutContainer(){
    const containerconfirm = document.getElementById("confirmContainer");
    if(containerconfirm.style.display == "none"){
        containerconfirm.style.display = "flex";
    }else{
        containerconfirm.style.display = "none";
    }
}


function image(event) {
    const userNameInput = document.getElementById("username").value;
    const username = document.getElementById("name");
    const username2 = document.getElementById("nome");
    const userImg = document.getElementById("user-img");
    const userImg2 = document.getElementById("usuario-img");
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-picture").src = e.target.result;
            userImg.src = e.target.result;
            userImg2.src = e.target.result;
            username.textContent = userNameInput;
            username2.textContent = userNameInput;
        };
        reader.readAsDataURL(file);
    }
}
document.getElementById('profile-picture-input').addEventListener('change', image);

function abrirMenu(){
    const menuResponsivo = document.getElementById("menu-reponsivo");
    const menu = document.getElementById("menu");
    if(menu.style.display === "none"){
        menu.style.display = "flex"
        menuResponsivo.style.display = "none"
    }else{
         menu.style.display = "none"
        menuResponsivo.style.display = "block"
    }
}
