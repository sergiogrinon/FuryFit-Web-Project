(function () {
    'use strict';

    angular
        .module('ffapp')
        .controller('contactPageController', contactPageController);

    function contactPageController() {
        var vm = this;
        activate();

        function activate() {
            vm.nameOfUserToContact = null;
            vm.emailOfUserToContact = null;
            vm.messageOfUserToContact = null;

            vm.errorInMailIntroduction = false;
            vm.showErrorInDataIntroduction = false;
        }

        vm.sendMail = function () {
            checkMail(vm.emailOfUserToContact);
            checkInputs(vm.nameOfUserToContact, vm.messageOfUserToContact, vm.emailOfUserToContact);
        }

        function checkMail(mailToCheck) {
            if (mailToCheck !== null) {
                if (!mailToCheck.includes('@')) {
                    vm.errorInMailIntroduction = true;
                } else {
                    vm.errorInMailIntroduction = false;
                 }
            } else {
                vm.errorInMailIntroduction = true;
            }
        }

        function checkInputs(nameUser, messageUser, mailUser) {
            if (nameUser === null || messageUser === null || mailUser === null || nameUser === '' || messageUser === '' || mailUser === '' || vm.errorInMailIntroduction === true) {
                vm.showErrorInDataIntroduction = true;
            } else { 
                vm.showErrorInDataIntroduction = false;
                //Se hace la llamada si todo ha ido bien
                //Puedo poner un gif de cargando
            }
        }
    }
})();