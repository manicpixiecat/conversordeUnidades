const categoriaSelect = document.getElementById('categoria');
const unidadeOrigemSelect = document.getElementById('unidadeOrigem');
const unidadeDestinoSelect = document.getElementById('unidadeDestino');
const valorInput = document.getElementById('valor');
const converterBtn = document.getElementById('converterBtn');

// Adiciona um evento para o botão de conversão // Adiciona um evento para a mudança da categoria selecionada
converterBtn.addEventListener('click', converter);
categoriaSelect.addEventListener('change', atualizarOpcoesDestino);

// Função chamada quando a categoria selecionada é alterada
function atualizarOpcoesDestino() {
  const categoria = categoriaSelect.value;
  console.log('Categoria:', categoria);
    
  // Limpa as opções de unidade de origem e destino
  unidadeOrigemSelect.innerHTML = '';
  unidadeDestinoSelect.innerHTML = '';


    // Verifica a categoria selecionada e cria as opções correspondentes

  if (categoria === 'peso') {
    criarOpcoes(unidadeOrigemSelect, ['kilograma', 'gramas']);
    criarOpcoes(unidadeDestinoSelect, ['libras', 'onca']);
  } else if (categoria === 'comprimento') {
    criarOpcoes(unidadeOrigemSelect, ['metros', 'centimetros']);
    criarOpcoes(unidadeDestinoSelect, ['polegadas',]);
  } else if (categoria === 'temperatura') {
    criarOpcoes(unidadeOrigemSelect, ['celsius', 'fahrenheit', 'kevin']);
    criarOpcoes(unidadeDestinoSelect, ['fahrenheit', 'celsius', 'kevin']);
  }
}
// Função para criar as opções do elemento select
function criarOpcoes(selectElement, unidades) {
  unidades.forEach(unidade => {
    const option = document.createElement('option');
    option.value = unidade;
    option.text = unidade;
    selectElement.appendChild(option);
  });
}

// Função chamada quando o botão de conversão é clicado
function converter() {
  const categoria = categoriaSelect.value;
  const unidadeOrigem = unidadeOrigemSelect.value;
  const unidadeDestino = unidadeDestinoSelect.value;
  const valor = parseFloat(valorInput.value);

  console.log('Categoria:', categoria);
  console.log('Unidade Origem:', unidadeOrigem);
  console.log('Unidade Destino:', unidadeDestino);
  console.log('Valor:', valor);

    // Verifica se todos os campos foram preenchidos corretamente
  if (!categoria || !unidadeOrigem || !unidadeDestino || isNaN(valor)) {
    document.getElementById('resultado').textContent = 'Preencha todos os campos corretamente.';
    return;
  }

  let resultado;

    // Verifica a categoria selecionada e chama a função de conversão correspondente

  if (categoria === 'peso') {
    resultado = converterPeso(valor, unidadeOrigem, unidadeDestino);
  } else if (categoria === 'comprimento') {
    resultado = converterComprimento(valor, unidadeOrigem, unidadeDestino);
  } else if (categoria === 'temperatura') {
    resultado = converterTemperatura(valor, unidadeOrigem, unidadeDestino);
  }

  console.log('Resultado:', resultado);
 
  // Exibe o resultado da conversão na página

  document.getElementById('resultado').textContent = resultado;
}
// Função para converter unidades de peso

function converterPeso(valor, unidadeOrigem, unidadeDestino) {
  let resultado;
  
  // Condição que faz a conversão de acordo com as unidades de origem e destino

  if (unidadeOrigem === 'kilograma') {
    if (unidadeDestino === 'gramas') {
      resultado = valor * 1000;
    } else if (unidadeDestino === 'libras') {
      resultado = valor * 2.20462;
    } else if (unidadeDestino === 'onca') {
      resultado = valor * 35.274;
    }
  } else if (unidadeOrigem === 'gramas') {
    if (unidadeDestino === 'kilograma') {
      resultado = valor / 1000;
    } else if (unidadeDestino === 'libras') {
      resultado = valor / 453.592;
    } else if (unidadeDestino === 'onca') {
      resultado = valor / 28.3495;
    }
  } else if (unidadeOrigem === 'libras') {
    if (unidadeDestino === 'kilograma') {
      resultado = valor / 2.20462;
    } else if (unidadeDestino === 'gramas') {
      resultado = valor * 453.592;
    } else if (unidadeDestino === 'onca') {
      resultado = valor * 16;
    }
  } else if (unidadeOrigem === 'onca') {
    if (unidadeDestino === 'kilograma') {
      resultado = valor / 35.274;
    } else if (unidadeDestino === 'gramas') {
      resultado = valor * 28.3495;
    } else if (unidadeDestino === 'libras') {
      resultado = valor / 16;
    }
  }

  return `O resultado da sua conversão é: ${resultado.toFixed(2)}`
}

// Função para converter unidades de comprimento

function converterComprimento(valor, unidadeOrigem, unidadeDestino) {
  let resultado;

    // Condições que faz a conversão de acordo com as unidades de origem e destino

  if (unidadeOrigem === 'metros') {
    if (unidadeDestino === 'centimetros') {
      resultado = valor * 100;
    } else if (unidadeDestino === 'polegadas') {
      resultado = valor * 39.3701;
    }
  } else if (unidadeOrigem === 'centimetros') {
    if (unidadeDestino === 'metros') {
      resultado = valor / 100;
    } else if (unidadeDestino === 'polegadas') {
      resultado = valor * 0.393701;
    }
  } else if (unidadeOrigem === 'polegadas') {
    if (unidadeDestino === 'metros') {
      resultado = valor / 39.3701;
    } else if (unidadeDestino === 'centimetros') {
      resultado = valor / 0.393701;
    }
  }

  return `O resultado da sua conversão é: ${resultado.toFixed(2)}`
}

// Função para converter unidades de temperatura

function converterTemperatura(valor, unidadeOrigem, unidadeDestino) {
  let resultado;

    // Condições para conversão de acordo com as unidades de origem e destino

  if (unidadeOrigem === 'celsius') {
    if (unidadeDestino === 'fahrenheit') {
      resultado = (valor * 9 / 5) + 32;
    } else if (unidadeDestino === 'kelvin') {
      resultado = valor + 273.15;
    }
  } else if (unidadeOrigem === 'fahrenheit') {
    if (unidadeDestino === 'celsius') {
      resultado = (valor - 32) * 5 / 9;
    } else if (unidadeDestino === 'kelvin') {
      resultado = (valor + 459.67) * 5 / 9;
    }
  } else if (unidadeOrigem === 'kelvin') {
    if (unidadeDestino === 'celsius') {
      resultado = valor - 273.15;
    } else if (unidadeDestino === 'fahrenheit') {
      resultado = (valor * 9 / 5) - 459.67;
    }
  }
  return `O resultado da sua conversão é: ${resultado.toFixed(2)}`
}

// Botão para inverter as unidades de origem e destino
const inverterBtn = document.getElementById('inverterBtn');
inverterBtn.addEventListener('click', inverterConversao());
function inverterConversao() {
  const unidadeOrigem = unidadeOrigemSelect.value;
  const unidadeDestino = unidadeDestinoSelect.value;

  // Inverter as unidades de origem e destino
  const temp = unidadeOrigemSelect.innerHTML;
  unidadeOrigemSelect.innerHTML = unidadeDestinoSelect.innerHTML;
  unidadeDestinoSelect.innerHTML = temp;

  // Atualizar as opções selecionadas
  unidadeOrigemSelect.value = unidadeDestino;
  unidadeDestinoSelect.value = unidadeOrigem;

  // Executar a conversão novamente
  converter();
}

