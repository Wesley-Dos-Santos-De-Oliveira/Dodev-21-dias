// 1 - Calculadora DoDev
//1.1 - Crie um algoritmo que peça 2 números ao usuário
//1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números
//1.3 - Exiba no console a operação feita e o resultado da conta


let valor1 = Number(prompt('Digite o primeiro valor:'))
let valor2 = Number(prompt('Digite o segundo valor'))
let operação = prompt('Qual operação matematica deseja realizar? Ex: +, *, -, /')

switch (operação){

    case '+':
        let resultado1 = valor1 + valor2
        console.log("O resultado de "+valor1,"+",valor2,"=",resultado1)
        break

    case '*':
        let resultado2 = valor1 * valor2
        console.log("O resultado de "+valor1, "x",valor2,"=",resultado2)
        break

    case '-':
        let resultado3 = valor1 - valor2
        console.log("O resultado de "+valor1,'-',valor2,'=', resultado3 )
        break

     case '/':
        let resultado4 = valor1 / valor2
        console.log('O resutado de '+valor1,'/',valor2,'=',resultado4)
        break
    
    default:
        console.log("OPÇÃO INVALIDA!!!")
    }