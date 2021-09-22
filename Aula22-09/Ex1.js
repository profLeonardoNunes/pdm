function cronometro(tempo, modo) {
    let tempoInicial = 0;
    const f = setInterval(() => {
        switch (modo) {
            case 1:
                if (tempo >= 0) {
                    console.log(tempo);
                    tempo--;
                }
                else {
                    clearInterval(f);
                }
                break;
            case 2:

                if (tempoInicial <= tempo) {
                    console.log(tempoInicial);
                    tempoInicial++;
                }
                else {
                    clearInterval(f);
                }
                break;
            default:
                console.log('Opção inválida');
                break;
        }
    }, 1000);

}

cronometro(10, 2);