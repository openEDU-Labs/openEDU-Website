var app = angular.module('teacherClient', []);
var video = videojs("video");;
app.controller('teacherClientController', function ($scope, $http) {
    $scope.breakpointObject = {
      breakpoints:[]
    };// {"time":12, [answers], "correct":1"}
    $scope.url = 'https://www.youtube.com/watch?v=riXcZT2ICjA';
    //$scope.breakpoint_time = 3;
    $scope.breakpoint_time = video.currentTime();
    console.log(video);
    $scope.createBreakpointText = "Create Breakpoint";
    $scope.creatingBreakpoint = false;
    $scope.creatBreakpoint = function() {
        $scope.creatingBreakpoint = true;
        video.pause();
        $scope.breakpoint_time = video.currentTime();
        $scope.radio = 1;
       // $scope.breakpoint_question = "Type Question Here";
       // $scope.breakpoint_answer_1 = "Type Answer 1 Here";
       // $scope.breakpoint_answer_2 = "Type Answer 2 Here";
       // $scope.breakpoint_answer_3 = "Type Answer 3 Here";
       // $scope.breakpoint_answer_4 = "Type Answer 4 Here";
    };

    $scope.cancleBreakpoint = function() {
        $scope.creatingBreakpoint=false;
        video.play();
    }
    $scope.addBreakpoint = function() {
       // var data ={
       //   breakpoint: $,
       //     "fields": [
       //         {
       //             "tag": "form",
       //             "attr": {
       //                 "id": "form"
       //             },
       //             "content": [
       //                 {
       //                     "tag": "h1",
       //                     "attr": {
       //                         "id": "question_title"
       //                     },
       //                     "content": "Breakpoint 1 Title"
       //                 },
       //                 {
       //                     "tag": "p",
       //                     "attr": {
       //                         "id": "question"
       //                     },
       //                     "content": "Description Description Description"
       //                 },
       //                 {
       //                     "tag": "div",
       //                     "attr": "",
       //                     "content": [
       //                         {
       //                             "tag": "input",
       //                             "attr": {
       //                                 "type": "radio",
       //                                 "name": "question",
       //                                 "id": "id1"
       //                             },
       //                             "content": ""
       //                         },
       //                         {
       //                             "tag": "label",
       //                             "attr": {
       //                                 "for": "id1"
       //                             },
       //                             "content": "example 1 description"
       //                         }
       //                     ]
       //                 },
       //                 {
       //                     "tag": "div",
       //                     "attr": "",
       //                     "content": [
       //                         {
       //                             "tag": "input",
       //                             "attr": {
       //                                 "type": "radio",
       //                                 "name": "question",
       //                                 "id": "id2"
       //                             },
       //                             "content": "example answer 1"
       //                         },
       //                         {
       //                             "tag": "label",
       //                             "attr": {
       //                                 "for": "id2"
       //                             },
       //                             "content": "example 2 description"
       //                         }
       //                     ]
       //                 },
       //                 {
       //                     "tag": "div",
       //                     "attr": "",
       //                     "content": [
       //                         {
       //                             "tag": "input",
       //                             "attr": {
       //                                 "type": "radio",
       //                                 "name": "question",
       //                                 "id": "id3"
       //                             },
       //                             "content": "example answer 2"
       //                         },
       //                         {
       //                             "tag": "label",
       //                             "attr": {
       //                                 "for": "id3"
       //                             },
       //                             "content": "example 3 description"
       //                         }
       //                     ]
       //                 },
       //                 {
       //                     "tag": "div",
       //                     "attr": "",
       //                     "content": [
       //                         {
       //                             "tag": "input",
       //                             "attr": {
       //                                 "class": "question_button",
       //                                 "type": "submit",
       //                                 "value": "Submit and Continue"
       //                             },
       //                             "content": ""
       //                         }
       //                     ]
       //                 }
       //             ]
       //         }
       //     ]
       // }

        $scope.creatingBreakpoint=false;
        video.play();
    }
    
});
