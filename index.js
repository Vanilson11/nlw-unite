let participantes = [
    {
        nome: "Vanilson Sousa",
        email: "vanilson.sousa@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0)
    },
    {
        nome: "Maria Oliveira",
        email: "maria.oliveira@gmail.com",
        dataInscricao: new Date(2024, 2, 23, 14, 45),
        dataCheckIn: new Date(2024, 2, 25, 20, 30)
    },
    {
        nome: "João Silva",
        email: "joao.silva@hotmail.com",
        dataInscricao: new Date(2024, 2, 21, 10, 15),
        dataCheckIn: new Date(2024, 2, 25, 21, 0)
    },
    {
        nome: "Ana Costa",
        email: "ana.costa@yahoo.com",
        dataInscricao: new Date(2024, 2, 24, 16, 0),
        dataCheckIn: new Date(2024, 2, 25, 19, 45)
    },
    {
        nome: "Carlos Lima",
        email: "carlos.lima@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 9, 30),
        dataCheckIn: new Date(2024, 2, 25, 18, 30)
    },
    {
        nome: "Fernanda Almeida",
        email: "fernanda.almeida@outlook.com",
        dataInscricao: new Date(2024, 2, 23, 11, 0),
        dataCheckIn: new Date(2024, 2, 25, 20, 0)
    },
    {
        nome: "Rafael Souza",
        email: "rafael.souza@gmail.com",
        dataInscricao: new Date(2024, 2, 20, 17, 15),
        dataCheckIn: new Date(2024, 2, 25, 21, 30)
    },
    {
        nome: "Bruna Nunes",
        email: "bruna.nunes@gmail.com",
        dataInscricao: new Date(2024, 2, 21, 13, 20),
        dataCheckIn: new Date(2024, 2, 25, 19, 0)
    },
    {
        nome: "Felipe Barbosa",
        email: "felipe.barbosa@gmail.com",
        dataInscricao: new Date(2024, 2, 24, 15, 30),
        dataCheckIn: new Date(2024, 2, 25, 20, 15)
    },
    {
        nome: "Gabriela Martins",
        email: "gabriela.martins@gmail.com",
        dataInscricao: new Date(2024, 2, 23, 18, 45),
        dataCheckIn: new Date(2024, 2, 25, 22, 0)
    },
    {
        nome: "Leonardo Pereira",
        email: "leonardo.pereira@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 14, 0),
        dataCheckIn: new Date(2024, 2, 25, 21, 15)
    }
];


const criarNovoParticipane = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

    if(participante.dataCheckIn == null){
        dataCheckIn = `
        <button onclick="fazerCheckIn(event)" data-email="${participante.email}">
            Confirmar check-in
        </button>
        `
    }

    return `
    <tr>
        <td>
            <strong>${participante.nome}</strong>
            <br>
            <small>${participante.email}</small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
    `
}

const atualizarLista = (participantes) => {
    document.querySelector('tbody').innerHTML = "";

    participantes.forEach(participante => {
        document.querySelector('tbody').innerHTML += criarNovoParticipane(participante);
    });
}

atualizarLista(participantes);

const adicionarParticipante = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    const participante = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        dataInscricao: new Date(),//pega a data atual da máquina do usuário
        dataCheckIn: null //null pq a data de check-in ainda não exisite
    }

    const participanteExiste = participantes.find(p => p.email == participante.email);
    
    if(participanteExiste){
        alert("Já existe um participante com esse email!");
        return;
    }

    participantes = [participante, ...participantes];//a ordem importa. Aqui, estamos primeiro adicionando o novo participante à variável e depois 'espalhando' o restante dos participantes dentro da variável.
    //isso significa que, na lista, quem vai aparecer em primeiro lugar será o participante que acabamos de adionar. Sacou?
    atualizarLista(participantes);

    event.target.reset();//o 'reset' limpa todo os campos do formulário
}

const fazerCheckIn = (event) => {
    const resultado = confirm("Tem certeza que deseja fazer o Check-In?");

    if(!resultado){
        return;
    }

    const emailParticipante = event.target.dataset.email;
    const participante = participantes.find(participante => participante.email === emailParticipante);
    
    participante.dataCheckIn = new Date();

    atualizarLista(participantes);
}