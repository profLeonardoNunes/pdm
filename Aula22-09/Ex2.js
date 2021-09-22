
function muda(cor) {
    if (cor === "verde") {
        return "amarelo";
    }
    else if (cor === "amarelo") {
        return "vermelho";
    }
    else {
        return "verde"
    }
}
let cor = "";
setInterval(() => {
    cor = muda(cor);
    console.log(cor);
}, 2000);