import { SERVER } from "../server";

function HomeController ($scope, $http, $stateParams, $document) {
  $scope.imgs = [];
<<<<<<< HEAD
  	$scope.errors = {
		name:"Title is Requried!",
		Link:"Link cannot be left empty!"

	};

=======
  $scope.img = {};
  
>>>>>>> 0a772bf555d88b89732b9202e9748a8d8a1edf83
  function init () {
    $http.get(SERVER + '/post').then((resp) => {
      $scope.imgs = resp.data;
    });
  }

  $scope.addLike = (img) => {
      img.count++
      $document.find('button').eq(0).addClass('loved');
        setTimeout(()=>{
          $document.find('button').eq(0).removeClass('loved');
        }, 1000);

      if (img.count === 1) $scope.times = '';
      else $scope.times = '\'s';

      $http.put(SERVER + '/post/' + $stateParams.id, img)
    };

  init();

<<<<<<< HEAD
   $scope.validateName = function (name){
  	// console.log(title)
      if (name === ''){
		$scope.errors.name = "Title cannot be left empty!"
      }else{
      	$scope.errors.name =''
      }
  };

$scope.validateEmail = function (email){
  	// console.log(title)
      if (email === ''){
		$scope.errors.email = "Link cannot be left empty!"
      }else{
      	$scope.errors.email =''
      }
  };

};


HomeController.$inject = ['$scope', '$http'];
=======
};

HomeController.$inject = ['$scope', '$http', '$stateParams', '$document'];
>>>>>>> 0a772bf555d88b89732b9202e9748a8d8a1edf83
export { HomeController };
