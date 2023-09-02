// Função para lidar com o envio do formulário
async function enviarFormulario() {
    

    // Enviar os dados para o servidor usando fetch ou outra abordagem
    
    const response = await fetch('/enviar-contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosFormulario)
    });

    if (response.ok) {
       
        Swal.fire({
            title: 'Dados Recebidos com Sucesso!',
            text: 'Seus dados foram enviados com sucesso!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else {
      
        Swal.fire({
            title: 'Erro!',
            text: 'Houve um erro ao enviar seus dados. Por favor, tente novamente mais tarde.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}
