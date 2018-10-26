angular.module('app').controller('SettingsController', [
    '$http',
    '$scope',
    SettingsController,
])

function SettingsController($http, $scope){
    var vm = this;
    vm.isTab1 = true;
    vm.usuarios = [];

    vm.usuario = {
        nome: '',
        email: '',
        tipo: '', //tipo 1 = usuarios, 2 = freela
        profissao: '',
        image: ''
    }

    populaUsuariosInicialmente();

    function populaUsuariosInicialmente(){
        vm.usuario = {};
        vm.usuario.nome = 'Aline Costa de Oliveira';
        vm.usuario.email = 'aline.costa@rockcontent.com';
        vm.usuario.tipo = 1;
        vm.usuario.profissao = 'Gerente';
        vm.usuario.image = 'assets/5.png';

        vm.usuarios.push(vm.usuario);

        vm.usuario = {};
        vm.usuario.nome = 'Bruno Pontes';
        vm.usuario.email = 'bruno.pontes@rockcontent.com';
        vm.usuario.tipo = 1;
        vm.usuario.profissao = 'Analista de negócios';
        vm.usuario.image = 'assets/4.png';

        vm.usuarios.push(vm.usuario);

        vm.usuario = {};
        vm.usuario.nome = 'Carla Alves Martins';
        vm.usuario.email = 'carla@rockcontent.com';
        vm.usuario.tipo = 1;
        vm.usuario.profissao = 'Gerente';
        vm.usuario.image = 'assets/1.png';

        vm.usuarios.push(vm.usuario);

        vm.usuario = {};
        vm.usuario.nome = 'Daniel henrique Corrêa';
        vm.usuario.email = 'daniel@rockcontent.com';
        vm.usuario.tipo = 1;
        vm.usuario.profissao = 'Developer';
        vm.usuario.image = 'assets/2.png';

        vm.usuarios.push(vm.usuario);

        vm.usuario = {};
        vm.usuario.nome = 'Juliana Costa';
        vm.usuario.email = 'juliana@gmail.com';
        vm.usuario.tipo = 2;
        vm.usuario.profissao = 'Developer';
        vm.usuario.image = 'assets/3.png';

        vm.usuarios.push(vm.usuario);

        console.log(vm.usuarios);
    }
}