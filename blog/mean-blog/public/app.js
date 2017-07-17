/**
 * Created by suehaas on 7/13/17.
 */

(function () {
    angular
        .module("BlogApp", [])

        // Best practices would be to put this controller in a separate file,
        // but the tutorial we are following is doing it this way for
        // expediency. Improve this during a downtime. In Trello.
        .controller("BlogController", BlogController);

    function BlogController ($scope, $http) {
        $scope.createPost = createPost;

        function init() {
            getAllPosts();
        }
        init();

        function getAllPosts() {
            $http
                .get("/api/blogpost")
                .then(function(response){
                    $scope.posts = response.data;
                },function(response) {
                    console.log(response.data);
                });
        }

        function createPost(post) {
            console.log(post);
            $http
                .post("/api/blogpost", post)
                .then(getAllPosts);
        }
    }

})();