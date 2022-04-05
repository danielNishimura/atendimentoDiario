const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const Storage = {
    get() {
        return JSON.parse(localStorage.getItem("atendimento:transactions")) || []
    },

    set(transactions) {
        localStorage.setItem("atendimento:transactions", JSON.stringify(transactions))
    } 
}

const transactions = [
    {
        id: 1,
        cnpj: '11.111.000/0001-11',
        razaoSocial: 'Nome da Empresa',
        nomeFantasia: 'Nome Fantasia',
        nomeFuncionario: 'Nome do Funcionario',
        date: '10/08/2021',
    },
    {
        id: 2,
        cnpj: '22.222.000/0001-22',
        razaoSocial: 'Nome da Empresa',
        nomeFantasia: 'Nome Fantasia',
        nomeFuncionario: 'Nome do Funcionario',
        date: '08/04/2021',
    },
    {
        id: 3,
        cnpj: '33.333.000/0001-33',
        razaoSocial: 'Nome da Empresa',
        nomeFantasia: 'Nome Fantasia',
        nomeFuncionario: 'Nome do Funcionario',
        date: '15/9/2021',
    },
]

const Transaction = {
 all: Storage.get(),
 /*[
    {
        id: 1,
        cnpj: '11.111.000/0001-11',
        razaoSocial: 'Nome da Empresa',
        nomeFantasia: 'Nome Fantasia',
        nomeFuncionario: 'Nome do Funcionario',
        date: '10/08/2021',
    },
    {
        id: 2,
        cnpj: '22.222.000/0001-22',
        razaoSocial: 'Nome da Empresa',
        nomeFantasia: 'Nome Fantasia',
        nomeFuncionario: 'Nome do Funcionario',
        date: '08/04/2021',
    },
    {
        id: 3,
        cnpj: '33.333.000/0001-33',
        razaoSocial: 'Nome da Empresa',
        nomeFantasia: 'Nome Fantasia',
        nomeFuncionario: 'Nome do Funcionario',
        date: '15/9/2021',
    },
],*/

 add(transaction){
     Transaction.all.push(transaction)
     App.reload()
 },
 
 asoAtual(index){
     document.querySelector(".selected", index, 1)
 },
 
 preencheAso(){
     var text = document.querySelector(".data-index") 
 },
 
 remove(index) {
     if(confirm('Deseja realmente deletar o registro numero' +' '+index+'?')){
         Transaction.all.splice(index, 1)
         App.reload()
        }
    }
    
}

const aso = {
}
console.log(aso)


const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
        tr.classList.add('selected')
        tr.dataset.index = index

        DOM.transactionsContainer.appendChild(tr)
        
    },
    innerHTMLTransaction(transaction, index) {

        const html = `
            <td>${index}</td>
            <td>${transaction.cnpj}</td>
            <td>${transaction.razaoSocial}</td>
            <td>${transaction.nomeFantasia}</td>
            <td>${transaction.nomeFuncionario}</td>
            <td>${transaction.date}</td>
            <td>${transaction.tipoExame}</td>
            <td>${transaction.cpf}</td>
            <td>${transaction.cargo}</td>
            <td>${transaction.nascimento}</td>
            <td>${transaction.riscoFisico}</td>
            <td>${transaction.riscoQuimico}</td>
            <td>${transaction.riscoBiologico}</td>
            <td>${transaction.riscoErgonomico}</td>
            <td>${transaction.riscoAcidente}</td>
            <td>${transaction.exame1}</td>
            <td>${transaction.dateExame1}</td>
            <td>${transaction.exame2}</td>
            <td>${transaction.dateExame2}</td>
            <td>${transaction.exame3}</td>
            <td>${transaction.dateExame3}</td>
            <td>${transaction.exame4}</td>
            <td>${transaction.dateExame4}</td>
            <td>${transaction.exame5}</td>
            <td>${transaction.dateExame5}</td>
            <td>${transaction.exame6}</td>
            <td>${transaction.dateExame6}</td>
            <td>${transaction.exame7}</td>
            <td>${transaction.dateExame7}</td>
            <td>${transaction.exame8}</td>
            <td>${transaction.dateExame8}</td>
            <td>${transaction.exame9}</td>
            <td>${transaction.dateExame9}</td>

            <td>${transaction.exame10}</td>
            <td>${transaction.dateExame10}</td>
            <td>${transaction.exame11}</td>
            <td>${transaction.dateExame11}</td>
            <td>${transaction.exame12}</td>
            <td>${transaction.dateExame12}</td>
            <td>${transaction.exame13}</td>
            <td>${transaction.dateExame13}</td>
            <td>${transaction.exame14}</td>
            <td>${transaction.dateExame14}</td>
            <td>${transaction.exame15}</td>
            <td>${transaction.dateExame15}</td>
            <td>${transaction.exame16}</td>
            <td>${transaction.dateExame16}</td>
            <td>${transaction.exame17}</td>
            <td>${transaction.dateExame17}</td>
            <td>${transaction.exame18}</td>
            <td>${transaction.dateExame18}</td>

            <td>${transaction.aptidao}</td>
            <td>${transaction.medicoCoordenador}</td>
            <td>${transaction.observacao}</td>
            <td>${transaction.convenio}</td>

            <td>
                <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover Atendimento">
            </td>

            <td>
                <a onclick="Transaction.aso(${index})" href="aso.html" target="blank"><img src="./assets/send.svg" alt="imprimir aso"></a>
            </td>

        `

        return html
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    formatDate(date) {
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    }
}



const Form = {
    /*id: document.querySelector('input#id'),*/
    cnpj: document.querySelector('input#cnpj'),
    razaoSocial: document.querySelector('input#razaoSocial'),
    nomeFantasia: document.querySelector('input#nomeFantasia'),
    nomeFuncionario: document.querySelector('input#funcionario'),
    date: document.querySelector('input#date'),
    tipoExame: document.querySelector('input#tipoExame'),
    cpf: document.querySelector('input#cpf'),
    cargo: document.querySelector('input#cargo'),
    nascimento: document.querySelector('input#nascimento'),
    riscoFisico: document.querySelector('input#riscoFisico'),
    riscoQuimico: document.querySelector('input#riscoQuimico'),
    riscoBiologico: document.querySelector('input#riscoBiologico'),
    riscoErgonomico: document.querySelector('input#riscoErgonomico'),
    riscoAcidente: document.querySelector('input#riscoAcidente'),
    
    /* EXAMES 1*/

    exame1: document.querySelector('input#exame1'),
    dateExame1: document.querySelector('input#dateExame1'),
    exame2: document.querySelector('input#exame2'),
    dateExame2: document.querySelector('input#dateExame2'),
    exame3: document.querySelector('input#exame3'),
    dateExame3: document.querySelector('input#dateExame3'),
    exame4: document.querySelector('input#exame4'),
    dateExame4: document.querySelector('input#dateExame4'),
    exame5: document.querySelector('input#exame5'),
    dateExame5: document.querySelector('input#dateExame5'),
    exame6: document.querySelector('input#exame6'),
    dateExame6: document.querySelector('input#dateExame6'),
    exame7: document.querySelector('input#exame7'),
    dateExame7: document.querySelector('input#dateExame7'),
    exame8: document.querySelector('input#exame8'),
    dateExame8: document.querySelector('input#dateExame8'),
    exame9: document.querySelector('input#exame9'),
    dateExame9: document.querySelector('input#dateExame9'),

    /* EXAMES 2*/

    exame10: document.querySelector('input#exame10'),
    dateExame10: document.querySelector('input#dateExame10'),
    exame11: document.querySelector('input#exame11'),
    dateExame11: document.querySelector('input#dateExame11'),
    exame12: document.querySelector('input#exame12'),
    dateExame12: document.querySelector('input#dateExame12'),
    exame13: document.querySelector('input#exame13'),
    dateExame13: document.querySelector('input#dateExame13'),
    exame14: document.querySelector('input#exame14'),
    dateExame14: document.querySelector('input#dateExame14'),
    exame15: document.querySelector('input#exame15'),
    dateExame15: document.querySelector('input#dateExame15'),
    exame16: document.querySelector('input#exame16'),
    dateExame16: document.querySelector('input#dateExame16'),
    exame17: document.querySelector('input#exame17'),
    dateExame17: document.querySelector('input#dateExame17'),
    exame18: document.querySelector('input#exame18'),
    dateExame18: document.querySelector('input#dateExame18'),

    /* DIVIDER EXAMES 1*/

    aptidao: document.querySelector('input#aptidao'),
    medicoCoordenador: document.querySelector('input#medicoCoordenador'),
    observacao: document.querySelector('input#observacao'),
    convenio: document.querySelector('input#convenio'),

    getValues() {
        return {
            cnpj: Form.cnpj.value,
            razaoSocial: Form.razaoSocial.value,
            nomeFantasia: Form.nomeFantasia.value,
            nomeFuncionario: Form.nomeFuncionario.value,
            date: Form.date.value,
            tipoExame: Form.tipoExame.value,
            cpf: Form.cpf.value,
            cargo: Form.cargo.value,
            nascimento: Form.nascimento.value,
            riscoFisico: Form.riscoFisico.value,
            riscoQuimico: Form.riscoQuimico.value,
            riscoBiologico: Form.riscoBiologico.value,
            riscoErgonomico: Form.riscoErgonomico.value,
            riscoAcidente: Form.riscoAcidente.value,

            exame1: Form.exame1.value,
            dateExame1: Form.dateExame1.value,
            exame2: Form.exame2.value,
            dateExame2: Form.dateExame2.value,
            exame3: Form.exame3.value,
            dateExame3: Form.dateExame3.value,
            exame4: Form.exame4.value,
            dateExame4: Form.dateExame4.value,
            exame5: Form.exame5.value,
            dateExame5: Form.dateExame5.value,
            exame6: Form.exame6.value,
            dateExame6: Form.dateExame6.value,
            exame7: Form.exame7.value,
            dateExame7: Form.dateExame7.value,
            exame8: Form.exame8.value,
            dateExame8: Form.dateExame8.value,
            exame9: Form.exame9.value,
            dateExame9: Form.dateExame9.value,

            exame10: Form.exame10.value,
            dateExame10: Form.dateExame10.value,
            exame11: Form.exame11.value,
            dateExame11: Form.dateExame11.value,
            exame12: Form.exame12.value,
            dateExame12: Form.dateExame12.value,
            exame13: Form.exame13.value,
            dateExame13: Form.dateExame13.value,
            exame14: Form.exame14.value,
            dateExame14: Form.dateExame14.value,
            exame15: Form.exame15.value,
            dateExame15: Form.dateExame15.value,
            exame16: Form.exame16.value,
            dateExame16: Form.dateExame16.value,
            exame17: Form.exame17.value,
            dateExame17: Form.dateExame17.value,
            exame18: Form.exame18.value,
            dateExame18: Form.dateExame18.value,



            aptidao: Form.aptidao.value,
            medicoCoordenador: Form.medicoCoordenador.value,
            observacao: Form.observacao.value,
            convenio: Form.convenio.value
        }
    },
    
   formatData() {

    },

    validateFields() {
       const {cnpj, razaoSocial, nomeFantasia, nomeFuncionario, date, tipoExame, cpf, cargo, nascimento, riscoFisico, riscoQuimico, riscoBiologico, riscoErgonomico,
       riscoAcidente, exame1, dateExame1, exame2, dateExame2, exame3, dateExame3, exame4, dateExame4, exame5, dateExame5, exame6, dateExame6, exame7, dateExame7, exame8, dateExame8, exame9, dateExame9, exame10, dateExame10, exame11, dateExame11, exame12, dateExame12, exame13, dateExame13, exame14, dateExame14, exame15, dateExame15, exame16, dateExame16, exame17, dateExame17, exame18, dateExame18, aptidao, medicoCoordenador, observacao, convenio} = Form.getValues()

       

       if(cnpj.trim() === "" ||
       razaoSocial.trim() ==="" ||
       nomeFantasia.trim() ==="" ||
       nomeFuncionario.trim() ==="" ||
       date.trim() ==="" ||
       tipoExame.trim() ==="" ||
       cpf.trim() ==="" ||
       cargo.trim() ==="" ||
       nascimento.trim() ==="" ||
       riscoFisico.trim() ==="" ||
       riscoQuimico.trim() ==="" ||
       riscoBiologico.trim() ==="" ||
       riscoErgonomico.trim() ==="" ||
       riscoAcidente.trim() ==="" ||
       exame1.trim() ==="" ||
       dateExame1.trim() ==="" ||
       exame2.trim() ==="" ||
       dateExame2.trim() ==="" ||
       exame3.trim() ==="" ||
       dateExame3.trim() ==="" ||
       exame4.trim() ==="" ||
       dateExame4.trim() ==="" ||

       exame5.trim() ==="" ||
       dateExame5.trim() ==="" ||
       exame6.trim() ==="" ||
       dateExame6.trim() ==="" ||
       exame7.trim() ==="" ||
       dateExame7.trim() ==="" ||
       exame8.trim() ==="" ||
       dateExame8.trim() ==="" ||
       exame9.trim() ==="" ||
       dateExame9.trim() ==="" ||

       exame10.trim() ==="" ||
       dateExame10.trim() ==="" ||
       exame11.trim() ==="" ||
       dateExame11.trim() ==="" ||
       exame12.trim() ==="" ||
       dateExame12.trim() ==="" ||
       exame13.trim() ==="" ||
       dateExame13.trim() ==="" ||
       exame14.trim() ==="" ||
       dateExame14.trim() ==="" ||
       exame15.trim() ==="" ||
       dateExame15.trim() ==="" ||
       exame16.trim() ==="" ||
       dateExame16.trim() ==="" ||
       exame17.trim() ==="" ||
       dateExame17.trim() ==="" ||
       exame18.trim() ==="" ||
       dateExame18.trim() ==="" ||

       aptidao.trim() ==="" ||
       medicoCoordenador.trim() ==="" ||
       observacao.trim() ==="" ||
       convenio.trim() ==="" ) {
           throw new Error ("Por favor, preencha todos os campos obrigatórios")
       }
    },

    formatValues() {
        console.log(Form.getValues())       

        let {cnpj, razaoSocial, nomeFantasia, nomeFuncionario, date, tipoExame, cpf, cargo, nascimento, riscoFisico, riscoQuimico, riscoBiologico, riscoErgonomico,
        riscoAcidente, exame1, dateExame1, exame2, dateExame2, exame3, dateExame3, exame4, dateExame4, exame5, dateExame5, exame6, dateExame6, exame7, dateExame7, exame8, dateExame8, exame9, dateExame9, exame10, dateExame10, exame11, dateExame11, exame12, dateExame12, exame13, dateExame13, exame14, dateExame14, exame15, dateExame15, exame16, dateExame16, exame17, dateExame17, exame18, dateExame18, aptidao, medicoCoordenador, observacao, convenio} = Form.getValues()

        date = Utils.formatDate(date)
        nascimento = Utils.formatDate(nascimento)
        

        return {
            cnpj,
            razaoSocial,
            nomeFantasia,
            nomeFuncionario,
            date,
            tipoExame,
            cpf,
            cargo,
            nascimento,
            riscoFisico,
            riscoQuimico,
            riscoBiologico,
            riscoErgonomico,
            riscoAcidente,
            exame1,
            dateExame1,
            exame2,
            dateExame2,
            exame3,
            dateExame3,
            exame4,
            dateExame4,
            exame5,
            dateExame5,
            exame6,
            dateExame6,
            exame7,
            dateExame7,
            exame8,
            dateExame8,
            exame9,
            dateExame9,
            exame10,
            dateExame10,
            exame11,
            dateExame11,
            exame12,
            dateExame12,
            exame13,
            dateExame13,
            exame14,
            dateExame14,
            exame15,
            dateExame15,
            exame16,
            dateExame16,
            exame17,
            dateExame17,
            exame18,
            dateExame18,
            aptidao,
            medicoCoordenador,
            observacao,
            convenio
        }
    },

    saveTransaction(transaction) {
        Transaction.add(transaction)
    },

    clearFields() {
        Form.cnpj.value = ""
        Form.razaoSocial.value = ""
        Form.nomeFantasia.value = ""
        Form.nomeFuncionario.value = ""
        Form.date.value = ""
        Form.tipoExame.value = ""
        Form.cpf.value = ""
        Form.cargo.value = ""
        Form.nascimento.value = ""
        Form.riscoFisico.value = ""
        Form.riscoQuimico.value = ""
        Form.riscoBiologico.value = ""
        Form.riscoErgonomico.value = ""
        Form.riscoAcidente.value = ""
        Form.exame1.value = ""
        Form.dateExame1.value = ""
        Form.exame2.value = ""
        Form.dateExame2.value = ""
        Form.exame3.value = ""
        Form.dateExame3.value = ""
        Form.exame4.value = ""
        Form.dateExame4.value = ""
        Form.exame5.value = ""
        Form.dateExame5.value = ""
        Form.exame6.value = ""
        Form.dateExame6.value = ""
        Form.exame7.value = ""
        Form.dateExame7.value = ""
        Form.exame8.value = ""
        Form.dateExame8.value = ""
        Form.exame9.value = ""
        Form.dateExame9.value = ""
        Form.exame10.value = ""
        Form.dateExame10.value = ""
        Form.exame11.value = ""
        Form.dateExame11.value = ""
        Form.exame12.value = ""
        Form.dateExame12.value = ""
        Form.exame13.value = ""
        Form.dateExame13.value = ""
        Form.exame14.value = ""
        Form.dateExame14.value = ""
        Form.exame15.value = ""
        Form.dateExame15.value = ""
        Form.exame16.value = ""
        Form.dateExame16.value = ""
        Form.exame17.value = ""
        Form.dateExame17.value = ""
        Form.exame18.value = ""
        Form.dateExame18.value = ""
        Form.aptidao.value = ""
        Form.medicoCoordenador.value = ""
        Form.observacao.value = ""
        Form.convenio.value = ""

    },


    submit(event) {
        event.preventDefault()

        try {
           //verificar se os campos sao validos
        Form.validateFields()
           //pegar transacao formatada
        const transaction = Form.formatValues()
           //adicionar transação 
        Form.saveTransaction(transaction)
           //limpar formulario 
        Form.clearFields()
           //fechar formulario
        Modal.close()

        } catch (error) {
            alert(error.message)
        }



    }
}

const App = {
    init() {
        Transaction.all.forEach(function(transaction, index) {
            DOM.addTransaction(transaction, index)
        })

        Storage.set(Transaction.all)
    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()

