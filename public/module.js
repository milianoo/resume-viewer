angular.module('ResumeViewer', [])
    .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit('ngRepeatFinished');
                    });
                }
            }
        }
    })
  .controller('ResumeController', function($scope, $http) {
      
      $scope.resume = {};
      
      $scope.dataLoaded = false;
      
      $scope.loadResume = function (){
          $http.get($scope.resume.url).success(function(data) {
              $scope.resume = data;
              $(".jumbotron").fadeOut("slow");
              $scope.dataLoaded = true;
          });
      };
      
      $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
          // this will run after 
          $('.item-skills').each(function() {
    		var newWidth = $(this).parent().width() * $(this).data().percent;
    		$(this).width(0);
    		$(this).animate({
    			width: newWidth,
    		}, 1000);
          });
            
      });
  });