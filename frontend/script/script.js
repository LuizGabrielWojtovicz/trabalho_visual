
/**
 * Funções
 */

//atendimento

const cadastrar_atendimento = () =>
{
	//codigo
}

const mostrar_atendimento = () =>
{
	//codigo
}

const listar_atentimentos = () =>
{
	//da um GET no endpoint "atendimentos"
	fetch(url + 'atendimento')
	.then(response => response.json())
	.then((atendimento) =>
	{
		//pega div que vai conter a lista de atendimentos
		let listarAtendimento = document.getElementById('listar-atendimentos')
		
		//limpa div
		while(listarAtendimento.firstChild)
		{
			listarAtendimento.removeChild(listarAtendimento.firstChild)
		}
		
		//preenche div com usuarios recebidos do GET
		for(let atendimento of Atendimento)
		{
			//cria div para as informacoes de um atendimento
			let divAtendimento = document.createElement('div')
			divAtendimento.setAttribute('class', 'form')

			//pega o id do cliente
			let divIdCliente = document.createElement('input')
			divIdCliente.placeholder = 'Id do cliente'
			divIdCliente.value = atendimento.idCliente
			divAtendimento.appendChild(divIdCliente)
			
			//pega o id do funcionario
			let divIdFuncionario = document.createElement('input')
			divIdFuncionario.placeholder = 'Id do funcionario'
			divIdFuncionario.value = atendimento.idFuncionario
			divAtendimento.appendChild(divIdFuncionario)
			
			//pega o tipo do atendimento
			let divTipoAtendimento = document.createElement('input')
			divTipoAtendimento.placeholder = 'Tipo de atendimento'
			divTipoAtendimento.value = atendimento.tipo
			divAtendimento.appendChild(divTipoAtendimento)
			
			//pega a data do atendimento
			let divDataAtendimento = document.createElement('input')
			divDataAtendimento.placeholder = 'Data do atendimento'
			divDataAtendimento.value = atendimento.dataAtendimeto
			divAtendimento.appendChild(divDataAtendimento)
			
			//insere a div do usuario na div com a lista de usuarios
			listarAtendimento.appendChild(divAtendimento)
		}
	})
}

const excluir_atendimento = () =>
{
	//codigo
}

//funcionario

const cadastrar_funcionario = () =>
{
	//codigo
}

const mostrar_funcionario = () =>
{
	//codigo
}

const listar_funcionarios = () =>
{
	//da um GET no endpoint "funcionarios"
	fetch(url + 'funcionario')
	.then(response => response.json())
	.then((funcionario) =>
	{
		//pega div que vai conter a lista de funcionarios
		let listarFuncionario = document.getElementById('listar-funcionarios')
		
		//limpa div
		while(listarFuncionario.firstChild)
		{
			listarFuncionario.removeChild(listarFuncionario.firstChild)
		}
		
		//preenche div com funcionarios recebidos do GET
		for(let funcionario of Funcionario)
		{
			//cria div para as informacoes de um funcionario
			let divFuncionario = document.createElement('div')
			divFuncionario.setAttribute('class', 'form')

			//pega o nome do funcionario
			let divNomeFuncionario = document.createElement('input')
			divNomeFuncionario.placeholder = 'Nome Completo'
			divNomeFuncionario.value = funcionario.nome
			divFuncionario.appendChild(divNomeFuncionario)
			
			//pega o telefone do funcionario
			let divTelefoneFuncionario = document.createElement('input')
			divTelefoneFuncionario.placeholder = 'Telefone'
			divTelefoneFuncionario.value = funcionario.telefone
			divFuncionario.appendChild(divTelefoneFuncionario)
			
			//pega o email do funcionario
			let divEmailFuncionario = document.createElement('input')
			divEmailFuncionario.placeholder = 'Email'
			divEmailFuncionario.value = funcionario.email
			divFuncionario.appendChild(divEmailFuncionario)

			//pega o cargo do funcionario
			let divCargoFuncionario = document.createElement('input')
			divCargoFuncionario.placeholder = 'Cargo'
			divCargoFuncionario.value = funcionario.cargo
			divFuncionario.appendChild(divCargoFuncionario)

			//insere a div do funcionario na div com a lista de funcionarios
			listarFuncionario.appendChild(divFuncionario)
		}
	})
}

const excluir_funcionario = () =>
{
	//codigo
}

//cliente

const cadastrar_cliente = () =>
{
	//codigo
}

const mostrar_cliente = () =>
{
	//codigo
}

const listar_clientes = () =>
{
	//da um GET no endpoint "clientes"
	fetch(url + 'cliente')
	.then(response => response.json())
	.then((cliente) =>
	{
		//pega div que vai conter a lista de clientes
		let listarCliente = document.getElementById('listar-clientes')
		
		//limpa div
		while(listarCliente.firstChild)
		{
			listarCliente.removeChild(listarCliente.firstChild)
		}
		
		//preenche div com clientes recebidos do GET
		for(let cliente of Cliente)
		{
			//cria div para as informacoes de um cliente
			let divCliente = document.createElement('div')
			divCliente.setAttribute('class', 'form')

			//pega o nome do cliente
			let divNomeCliente = document.createElement('input')
			divNomeCliente.placeholder = 'Nome Completo'
			divNomeCliente.value = cliente.nome
			divCliente.appendChild(divNomeCliente)
			
			//pega o telefone do cliente
			let divTelefoneCliente = document.createElement('input')
			divTelefoneCliente.placeholder = 'Telefone'
			divTelefoneCliente.value = cliente.telefone
			divCliente.appendChild(divTelefoneCliente)
			
			//pega o email do cliente
			let divEmailCliente = document.createElement('input')
			divEmailCliente.placeholder = 'Email'
			divEmailCliente.value = cliente.email
			divCliente.appendChild(divEmailCliente)

			//insere a div do cliente na div com a lista de clientes
			listarCliente.appendChild(divCliente)
		}
	})
}

const excluir_cliente = () =>
{
	//codigo
}
