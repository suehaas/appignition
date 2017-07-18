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
        $scope.deletePost = deletePost;
        $scope.editPost = editPost;

        function init() {
            getAllPosts();
        }
        init();

        function editPost(postId) {
            $http
                .get("/api/blogpost/"+postId)
                .then(function(post){

                    $scope.post = post;

                    console.log(200);
                    // console shows we got here successfully. form fields not updating with $scope.post = post; though
                },function(post) {
                    console.log(400);
                });

        }

        function deletePost(postId) {
            $http
                .delete("/api/blogpost/"+postId)
                .then(getAllPosts);
        }

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