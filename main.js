const form = document.getElementById("form_atividade");
const imgPositivo = '<img src="./image/checkLogo3.png" alt="emogiCheck" />';
const numeros = [];
const inicio0 = calculaReg();
let linhas = " ";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome_Cadastro = document.getElementById("nomeCadastro");
    const numero_Cadastro = document.getElementById("numeroCadastro");

    calculaReg2();

    numeros.push(numero_Cadastro.value);

    let linha = "<tr>";
    linha += "<td>"+nome_Cadastro.value+"</td>"; //linha = linha + outro conteúdo*
    linha += "<td>"+numero_Cadastro.value+"</td>";
    linha += "<td>"+imgPositivo+"</td>";
    linha += "</tr>";

    linhas += linha;

    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;

    nome_Cadastro.value ="";
    numero_Cadastro.value = "";

})

/*
function calculaReg (){
const registroDeCadastro = document.getElementById("registroCadastros");
const td = document.createElement("td");
td.innerHTML = numeros.length;
registroDeCadastro.append(td) };
*/

function calculaReg2 () {
    document.getElementById("registroCadastros").
    innerHTML =numeros.length +1 };

function calculaReg () {
    document.getElementById("registroCadastros").
    innerHTML =numeros.length};