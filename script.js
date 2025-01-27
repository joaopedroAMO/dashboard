document.getElementById('profile-picture-input').addEventListener('change', image);

function handleCadastro(event) {
    event.preventDefault();  // Prevent form submission

    const userNameInput = document.getElementById("username").value;
    const username = document.getElementById("name");
    const username2 = document.getElementById("nome");
    
    const fileInput = document.getElementById('profile-picture-input');
    const file = fileInput.files[0];
    const noImgInfos = document.getElementById("content-infos-img");
    const noImgNav = document.getElementById("content-nav-img");

    const userHabilidadeInput = document.getElementById("userHabilidade").value;
    const userHabilidade = document.getElementById("user-habilidade");

    if (userNameInput.trim() === "") {
        alert("Por favor, preencha o nome de usuário.");
        return;
    }
    if (userHabilidadeInput.trim() === "") {
        alert("Por favor, escolha uma habilidade.");
        return;
    }

    // Update username
    username.textContent = userNameInput;
    username2.textContent = userNameInput;

    // Update profile picture
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-picture").src = e.target.result;
            document.getElementById("user-img").src = e.target.result;
            document.getElementById("usuario-img").src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        noImgInfos.style.backgroundImage = "url('./img/user.png')";
        noImgNav.style.backgroundImage = "url('./img/user.png')";
    }

    // Update user skill
    userHabilidade.textContent = userHabilidadeInput;

    // Call the cadastrar function to finalize
    cadastrar();
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

function openLogoutContainer() {
    const containerconfirm = document.getElementById("confirmContainer");
    containerconfirm.style.display = containerconfirm.style.display === "none" ? "flex" : "none";
}

function image(event) {
    const userImg = document.getElementById("user-img");
    const userImg2 = document.getElementById("usuario-img");

    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-picture").src = e.target.result;
            userImg.src = e.target.result;
            userImg2.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function abrirMenu() {
    const menuResponsivo = document.getElementById("menu-reponsivo");
    const menu = document.getElementById("menu");

    if (menu.style.display === "none" || !menu.style.display) {
        menu.style.display = "flex";
        menu.classList.remove('close-animation');
        menu.classList.add('open-animation');
        menuResponsivo.style.display = "none";
        menu.addEventListener('animationend', function() {
            menu.classList.remove('open-animation');
            menu.classList.add('open');
        }, { once: true });
        menu.style.overflow = "visible";
    } else {
        menu.classList.remove('open-animation');
        menu.classList.add('close-animation');
        menuResponsivo.style.display = "block";
        menu.addEventListener('animationend', function() {
            menu.style.display = 'none';
            menu.classList.remove('close-animation');
            menu.classList.remove('open');
        }, { once: true });
    }
}
