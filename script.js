function mensagem(btn, msg) {
    btn.addEventListener("mouseover", function() {
        if (isDesignResponsivo()) {
            exibirMensagem(btn, msg, div_mensagem_response);
        } else {
            exibirMensagem(btn, msg, div_mensagem);
        }
    });

    btn.addEventListener("mouseout", function() {
        const hoverAtivo = verificarHoverAtivo();
        if (!hoverAtivo) {
            div_mensagem.style.display = "none";
            div_mensagem_response.style.display = "none";
        }
    });
}
function exibirMensagem(btn, msg, targetDiv) {
    if (isDesignResponsivo()) {
        targetDiv.innerHTML = "";
        targetDiv.style.top = "185px";
        targetDiv.style.left = "160px";
        targetDiv.style.display = "flex";
        targetDiv.insertAdjacentHTML('beforeend', `<pre>${msg}</pre>`);
    } else {
        const btnRect = btn.getBoundingClientRect();
        const btnTop = btnRect.top + btnRect.height;
        const btnLeft = btnRect.left;
        targetDiv.innerHTML = "";
        targetDiv.style.top = `${btnTop}px`;
        targetDiv.style.left = `${btnLeft}px`;
        targetDiv.style.display = "flex";
        targetDiv.insertAdjacentHTML('beforeend', `<pre>${msg}</pre>`);
    }
}
function isDesignResponsivo() {
    return window.innerWidth <= 767;
}
function verificarHoverAtivo() {
    const botoes = [btn_1, btn_2, btn_3, btn_4, btn_5];
    for (let i = 0; i < botoes.length; i++) {
        if (botoes[i].matches(":hover")) {
            return true;
        }
    }
    return false;
}
const div_mensagem = document.getElementById("div_mensagem");
const div_mensagem_response = document.getElementById("div_mensagem_response");
div_mensagem.style.display = "none";
div_mensagem_response.style.display = "none";
const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");
const btn_3 = document.getElementById("btn_3");
const btn_4 = document.getElementById("btn_4");
const btn_5 = document.getElementById("btn_5");
mensagem(btn_1, `
#btn_1::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%; 
    width: 100%;
    height: 100%;
    background:var(--bg-01); 
    transition: left 0.4s ease; 
    z-index: -1; 
}
#btn_1:hover {
    color: var(--color-02);
    transition: 0.4s;
}
#btn_1:hover::after {
    left: 0; 
    color: var(--color-02);
}
`);
mensagem(btn_2, `
#btn_2::after {
    content: "";
    position: absolute;
    top: 0;
    right: 100%; 
    width: 100%;
    height: 100%;
    background:var(--bg-01); 
    transition: right 0.4s ease; 
    z-index: -1; 
}
#btn_2:hover {
    color: var(--color-02);
    transition: 0.4s;
}
#btn_2:hover::after {
    right: 0; 
    color: var(--color-02);
}
`);
mensagem(btn_3, `
#btn_3 {
    position: relative;
    overflow: hidden;
    background: var(--bg-01);
    color: var(--color-02);
}
#btn_3::after {
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 1000%;
    height: 100%;
    background: var(--bg-white); 
    transition: bottom 0.4s ease;
    z-index: -1;
}
#btn_3:hover {
    color: var(--color-01);
    transition: 0.4s;
}
#btn_3:hover::after {
    bottom: 0;
    color: var(--color-01);
}
`);
mensagem(btn_4, `
#btn_4 {
    position: relative;
    overflow: hidden;
    background: var(--bg-01);
    color: var(--color-02);
    border: none;
}
#btn_4::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 1000%;
    height: 100%;
    background: var(--bg-white);
    transition: top 0.4s ease;
    z-index: -1;
}
#btn_4:hover {
    color: var(--color-01);
    transition: 0.4s;
}
#btn_4:hover::after {
    top: -3px; 
    color: var(--color-01);
}
`);
mensagem(btn_5, `
#btn_5 {
    background: 
    linear-gradient(to top right, 
    transparent 50%, 
    var(--bg-01) 50%);
    background-size: 200% 200%;
    background-position: bottom left;
}
#btn_5::after {
    content: "";
    position: absolute;
    background: var(--bg-01);
    transition: top 0.4s ease;
    z-index: -1;
}
#btn_5:hover {
    color: var(--color-02);
    transition: 0.4s;
    background-position: top right;
    border: none;
}
#btn_5:hover::after {
    color: var(--color-01);
}
`);
const confirm_copy = document.getElementById("confirm_copy")
function confirm_click(btn, texto){
    btn.addEventListener("click", () =>{
        const textarea = document.createElement("textarea");
        textarea.value = texto;

        // Adicionar o textarea à página para poder copiar o texto
        document.body.appendChild(textarea);

        // Selecionar o texto no textarea
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);

        // Copiar o texto para a área de transferência
        document.execCommand("copy");

        // Remover o textarea da página
        document.body.removeChild(textarea);
        confirm_copy.classList.add("confirmado")

        setTimeout(() => {
            confirm_copy.classList.remove("confirmado");
        }, 3000);
    })
}
confirm_click(btn_1, `
#btn_1::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%; 
    width: 100%;
    height: 100%;
    background:var(--bg-01); 
    transition: left 0.4s ease; 
    z-index: -1; 
}
#btn_1:hover {
    color: var(--color-02);
    transition: 0.4s;
}
#btn_1:hover::after {
    left: 0; 
    color: var(--color-02);
}
`)
confirm_click(btn_2, `
#btn_2::after {
    content: "";
    position: absolute;
    top: 0;
    right: 100%; 
    width: 100%;
    height: 100%;
    background:var(--bg-01); 
    transition: right 0.4s ease; 
    z-index: -1; 
}
#btn_2:hover {
    color: var(--color-02);
    transition: 0.4s;
}
#btn_2:hover::after {
    right: 0; 
    color: var(--color-02);
}
`)
confirm_click(btn_3, `
#btn_3 {
    position: relative;
    overflow: hidden;
    background: var(--bg-01);
    color: var(--color-02);
}
#btn_3::after {
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 1000%;
    height: 100%;
    background: var(--bg-white); 
    transition: bottom 0.4s ease;
    z-index: -1;
}
#btn_3:hover {
    color: var(--color-01);
    transition: 0.4s;
}
#btn_3:hover::after {
    bottom: 0;
    color: var(--color-01);
}
`)
confirm_click(btn_4, `
#btn_4 {
    position: relative;
    overflow: hidden;
    background: var(--bg-01);
    color: var(--color-02);
    border: none;
}
#btn_4::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 1000%;
    height: 100%;
    background: var(--bg-white);
    transition: top 0.4s ease;
    z-index: -1;
}
#btn_4:hover {
    color: var(--color-01);
    transition: 0.4s;
}
#btn_4:hover::after {
    top: -3px; 
    color: var(--color-01);
}
`)
confirm_click(btn_5, `
#btn_5 {
    background: 
    linear-gradient(to top right, 
    transparent 50%, 
    var(--bg-01) 50%);
    background-size: 200% 200%;
    background-position: bottom left;
}
#btn_5::after {
    content: "";
    position: absolute;
    background: var(--bg-01);
    transition: top 0.4s ease;
    z-index: -1;
}
#btn_5:hover {
    color: var(--color-02);
    transition: 0.4s;
    background-position: top right;
    border: none;
}
#btn_5:hover::after {
    color: var(--color-01);
}
`)

