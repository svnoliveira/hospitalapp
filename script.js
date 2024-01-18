function extrairInformacoes(texto) {
    // Verifica se 'texto' é indefinido ou nulo
    if (texto === undefined || texto === null) {
      console.error("Erro: 'texto' é indefinido ou nulo.");
      return { data: '', entrada: '', saida: '' };
    }
  
    // Procura pela string "Data:" e extrai as informações
    var regexData = /Data: (\d{1,2}\/\d{1,2}\/\d{4})/;
    var regexEntrada = /ENTRADA: (\d{1,2}:\d{1,2}:\d{1,2})/;
    var regexSaida = /SAÍDA: (\d{1,2}:\d{1,2}:\d{1,2})/;
  
    var matchData = texto.match(regexData);
    var matchEntrada = texto.match(regexEntrada);
    var matchSaida = texto.match(regexSaida);
  
    var informacoes = {
      data: matchData ? matchData[1] : '',
      entrada: matchEntrada ? matchEntrada[1] : '',
      saida: matchSaida ? matchSaida[1] : ''
    };
  
    return informacoes;
}

// console.log(extrairInformacoes('Marina Belkin (17645) => Data: 12/1/2024 | ENTRADA: 18:17:51'))

function calcularHorasTrabalhadas(data, horaEntrada, horaSaida) {
    var dateParts = data.split("/");
    var formattedDate = dateParts[1] + "/" + dateParts[0] + "/" + dateParts[2];
    console.log(formattedDate)

    var entrada = new Date(formattedDate + ' ' + horaEntrada);
    var saida = new Date(formattedDate + ' ' + horaSaida);

    console.log(data + ' ' + horaEntrada)
    console.log(entrada)
    console.log(data + ' ' + horaSaida)
    console.log(saida)
  
    // Verifica se a saída é anterior à entrada (o que indica que ocorreu no dia seguinte)
    if (saida < entrada) {
      // Adiciona um dia à data de saída
      saida.setDate(saida.getDate() + 1);
    }
  
    // Garante que a data de saída é após a data de entrada
    if (saida <= entrada) {
      console.error('Erro: A data de saída é anterior ou igual à data de entrada.');
      return { horas: 0, minutos: 0, segundos: 0 };
    }
  
    // Calcula a diferença de tempo em milissegundos
    var milissegundosTrabalhados = saida - entrada;
  
    // Converte para horas, minutos e segundos
    var segundosTotais = Math.round(milissegundosTrabalhados / 1000);
    var horas = Math.floor(segundosTotais / 3600);
    var minutos = Math.floor((segundosTotais % 3600) / 60);
    var segundos = segundosTotais % 60;
  
    // Logger.log("Horas:", horas);
    // Logger.log("Minutos:", minutos);
    // Logger.log("Segundos:", segundos);
  
    return { horas: horas, minutos: minutos, segundos: segundos };
  }

  console.log(calcularHorasTrabalhadas('26/1/2024', '15:29:47', '16:31:38'));
