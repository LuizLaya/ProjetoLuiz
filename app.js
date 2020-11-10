(() => {
  "use strict";

  angular.module('app', []);

  angular.module('app').controller('controlador', controlador);

  controlador.$inject = ['exemploService', '$window'];

  function controlador(exemploService, $window) {
    const vm = this;
    vm.cepDigitado = null;
    vm.resultadoCEP = null;
    vm.titulo = 'Exemplo CEP';

    vm.buscarCEP = buscarCEP;
    vm.sucesso = sucesso;
    vm.erro = erro;

    function buscarCEP() {
      if (!vm.cepDigitado) {
        return;
      }

      exemploService.consultarCEP(vm.cepDigitado, vm.sucesso, vm.erro);
    }

    function sucesso(resposta) {
      // console.log(resposta);
      // vm.resultadoCEP = resposta.data;
      vm.nome = [];
      vm.descricao = [];

      vm.cep = resposta.data.cep;
      vm.logradouro = resposta.data.logradouro;
      vm.complemento = resposta.data.complemento;
      vm.bairro = resposta.data.bairro;
      vm.localidade = resposta.data.localidade;
      vm.uf = resposta.data.uf;
      vm.ibge = resposta.data.ibge;
      vm.gia = resposta.data.gia;
      vm.ddd = resposta.data.ddd;
      vm.siafi = resposta.data.siafi;
    }
    vm.conta = [
      { nome: "Camila", descricao: "baixa" },
      { nome: "Pedro", descricao: "alto" },
      { nome: "Murilo", descricao: "baixo" },
      { nome: "João", descricao: "baixo" },
      { nome: "Ana", descricao: "baixo" }
    ];
    vm.apareceForm = function () {
      vm.nome = null;
      vm.descricao = null;
      vm.form = true;
    }
    vm.salvar = function (nome, descricao) {

      vm.form = false;
      vm.conta.push({ "nome": nome, "descricao": descricao });
      // vm.conta.push(descricao);
      $window.alert("Adicionado com sucesso");
    }

    vm.removerCrud = function (nome) {
      vm.nomeRetirar = [];
      vm.descricaoRetirar = [];
      var serveParaEncontrarNome = Object.keys(vm.conta);
      for (var j = 0; j < serveParaEncontrarNome.length; j++) {
        vm.nomeRetirar.push({});
        vm.descricaoRetirar.push({});
        vm.nomeRetirar[j] = vm.conta[serveParaEncontrarNome[j]].nome;
        vm.descricaoRetirar[j] = vm.conta[serveParaEncontrarNome[j]].descricao;
      }

      vm.nomeSelecionado = vm.nomeRetirar.indexOf(nome);
      vm.conta.splice(vm.nomeSelecionado, 1);
      $window.alert("removido com sucesso");
    }

    vm.altera = function(nome, descricao){
      vm.alterarNome = [];
      vm.alterarDescricao = [];
      var serveParaEncontrarNome = Object.keys(vm.conta);
      for (var j = 0; j < serveParaEncontrarNome.length; j++) {
        vm.alterarNome.push({});
        vm.alterarDescricao.push({});
        vm.alterarNome[j] = vm.conta[serveParaEncontrarNome[j]].nome;
        vm.alterarDescricao[j] = vm.conta[serveParaEncontrarNome[j]].descricao;
      }
      vm.nomeAlteradoSelecionado = vm.alterarNome.indexOf(nome);
      vm.conta.splice(vm.nomeAlteradoSelecionado, 1);
      vm.descricaoAlteradoSelecionado = vm.alterarDescricao.indexOf(descricao);
      vm.conta.splice(vm.descricaoAlteradoSelecionado, 1);
      vm.adicionar();
    }

    vm.adicionar = function(){
      vm.alterando = true;
    }
    vm.alterandoSucesso = function (nome, descricao) {

      vm.alterando = false;
      vm.conta.push({ "nome": nome, "descricao": descricao });
      console.log(vm.conta)
      // vm.conta.push(descricao);
      $window.alert("alterado com sucesso");
    }
    function erro(erro) {
      console.log(erro);
    }

  }
})();