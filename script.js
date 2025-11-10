// fatores de conversão pra uidade base que são os segundos
const fatores = {
        segundos: 1,
        minutos: 60,
        horas: 3600,
        dias: 86400,
    };

    function converter() {
        // obtendo valores de entrada e unidades que foram escolhidas
        const valorInput = document.getElementById('valor');
        const unidadeDe = document.getElementById('de').value;
        const unidadePara = document.getElementById('para').value;
        const resultadoDiv = document.getElementById('resultado');

        // validação da entrada do usuário
        const valor = parseFloat(valorInput.value);
        if (isNaN(valor) || valor < 0) {
            resultadoDiv.innerHTML = "🚫🚫🚫 Digite um valor numérico positivo. 🚫🚫🚫";
            return;
        }

        // lógica de conversão, convertendo valor de entrada para unidade base
        const valorEmSegundos = valor * fatores[unidadeDe];

        // convertendo o valor base para a unidade de destino
        const resultado = valorEmSegundos / fatores[unidadePara];

        // exibição do resultado
        const resultadoFormatado = resultado.toLocaleString('pt-BR', { maximumFractionDigits: 4 });

        // mensagem do resultado
        resultadoDiv.innerHTML = `✅ ${valor} ${unidadeDe} equivalem a ${resultadoFormatado} ${unidadePara} ✅`;
    }