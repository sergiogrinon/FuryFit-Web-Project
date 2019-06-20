(function () {
    'use strict';

    angular
        .module('ffapp')
        .controller('appContainerController', appContainerController);

    appContainerController.$inject = ['furyFitService', '$window'];

    function appContainerController(furyFitService, $window) {
        var vm = this;
        activate();

        function activate() {
            vm.pageControlls = {
                isOnHome: true,
                isOnNutrition: false,
                isOnWorkouts: false,
                isOnMacrocalc: false,
                isOnInterestingLinks: false,
                isOnFAQ: false,
                isOnContact: false
            };

            furyFitService.getDietsFromDatabase().then(paintDietsOnPage, paintErrorOnPage);

            function paintDietsOnPage(response) {
                vm.dietsPackage = response;

                furyFitService.getWorkoutsFromDatabase().then(paintWorkoutsOnPage, paintError);

                function paintWorkoutsOnPage(resp) {
                    vm.workoutsPackage = resp;

                    furyFitService.getLinksFromDatabase().then(paintLinksOnPage, paintErrorOnLinkGetting);

                    function paintLinksOnPage(linksResponse) {
                        vm.linksPackage = linksResponse;

                        furyFitService.getFAQsFromDatabase().then(paintFAQsOnPage, paintErrorOnFaqGetting);

                        function paintFAQsOnPage(faqsresp) {
                            vm.faqsPackage = faqsresp;
                        }

                        function paintErrorOnFaqGetting(faqserr) { //KO in FAQs

                        }
                    }

                    function paintErrorOnLinkGetting() { //KO in links

                    }
                }

                function paintError(err) { //KO in workouts

                }
            }

            function paintErrorOnPage(error) { //KO in diets
                swal({
                    type: 'error',
                    title: 'Vaya...',
                    text: 'Algo ha ido mal durante la carga de la página, por favor, inténtalo de nuevo más tarde. Si el problema persiste, contacta con el administrador de la página'
                }, function () {
                    $window.location.href = 'src/error-pages/error404.html';
                });
            }
        }

    }
})();