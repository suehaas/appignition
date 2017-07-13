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

    function BlogController ($scope) {
        $scope.createPost = createPost;

        function createPost (post) {
            console.log(post);
        }
    }

})();