var app = angular.module('openEDU', []);
app.controller('videoDisplay', function ($scope, $http) {
    var config = 
    $http.get('https://open-edu.herokuapp.com/openedudatabase/lectures/1.json', config).then(successCallBack,errorCallBack);
    function successCallBack(response) {
        console.log(response);
    }
    function errorCallBack(response) {
        console.log(response);
    }

    var dataSetupAttr = { "techOrder": ["youtube"], "sources": [{"type": "video/youtube", "src": "https://www.youtube.com/watch?v=riXcZT2ICjA"}] };
    $scope.datasetup = dataSetupAttr;
    // fireo up the plugin
    setTimeout( function() {
        var video = videojs('video');
        video.openEDU('{"breakpoints":[{"breakpoint":10.2,"fields":[{"tag":"form","attr":{"id":"form"},"content":[{"tag":"h1","attr":{"id":"question_title"},"content":"Question #1"},{"tag":"p","attr":{"id":"question"},"content":"What is all of calculus based on?"},{"tag":"div","attr":"","content":[{"tag":"input","attr":{"type":"radio","name":"question","id":"id1"},"content":""},{"tag":"label","attr":{"for":"id1"},"content":"Magic"}]},{"tag":"div","attr":"","content":[{"tag":"input","attr":{"type":"radio","name":"question","id":"id2"},"content":""},{"tag":"label","attr":{"for":"id2"},"content":"Limits"}]},{"tag":"div","attr":"","content":[{"tag":"input","attr":{"type":"radio","name":"question","id":"id3"},"content":""},{"tag":"label","attr":{"for":"id3"},"content":"Hell"}]},{"tag":"div","attr":"","content":[{"tag":"input","attr":{"type":"radio","name":"question","id":"id4"},"content":""},{"tag":"label","attr":{"for":"id4"},"content":"Rainbows and Unicorns"}]},{"tag":"div","attr":"","content":[{"tag":"input","attr":{"class":"question_button","type":"submit","value":"Submit and Continue"},"content":""}]}]}]},{"breakpoint":17,"fields":[{"tag":"form","attr":{"id":"form"},"content":[{"tag":"h1","attr":"","content":"Question #2"},{"tag":"p","attr":"","content":"Are Limits really that simple?"},{"tag":"div","attr":"","content":[{"tag":"input","attr":{"type":"radio","name":"question","id":"id1"},"content":""},{"tag":"label","attr":{"for":"id1"},"content":"I think they are"}]},{"tag":"div","attr":"","content":[{"tag":"input","attr":{"type":"radio","name":"question","id":"id2"},"content":""},{"tag":"label","attr":{"for":"id2"},"content":"I hate limits"}]},{"tag":"div","attr":"","content":[{"tag":"input","attr":{"type":"radio","name":"question","id":"id3"},"content":""},{"tag":"label","attr":{"for":"id3"},"content":"I am already confused"}]},{"tag":"div","attr":"","content":[{"tag":"input","attr":{"type":"radio","name":"question","id":"id4"},"content":""},{"tag":"label","attr":{"for":"id4"},"content":"Yes"}]},{"tag":"div","attr":"","content":[{"tag":"input","attr":{"type":"submit","class":"question_button","value":"Submit and Continue"},"content":""}]}]}]}]}');
    }, 10);
});
