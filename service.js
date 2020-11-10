(() => {

  angular.module('app').service('exemploService', exemploService);

  exemploService.$inject = ['$http'];

  function exemploService($http) {
    const vm = this;
    vm.url = 'https://viacep.com.br/ws';

    vm.consultarCEP = (cep, fnSucesso, fnErro) => {
      return $http.get(`${vm.url}/${cep}/json`).then(fnSucesso, fnErro);
    }
  }

})();