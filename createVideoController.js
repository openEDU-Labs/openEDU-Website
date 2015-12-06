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
    $scope.questionCount=1;
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
        var data ={
          breakpoint: $scope.breakpoint_time,
            fields: [
                {
                    tag: "form",
                    attr: {
                      id: "form"
                    },
                    content: [
                        {
                            tag: "h1",
                            attr: {
                              id: "question_title"
                            },
                            content: "Question "+$scope.questionCount
                        },
                        {
                            tag: "p",
                            attr: {
                                id: "question"
                            },
                            content: $scope.breakpoint_question
                        },
                        {
                            tag: "div",
                            attr: "",
                            content: [
                                {
                                    tag: "input",
                                    attr: {
                                        type: "radio",
                                        name: "question",
                                        id: "id1"
                                    },
                                    content: ""
                                },
                                {
                                    tag: "label",
                                    attr: {
                                        for: "id1"
                                    },
                                    content: $scope.breakpoint_answer_1
                                }
                            ]
                        },
                        {
                            tag: "div",
                            attr: "",
                            content: [
                                {
                                    tag: "input",
                                    attr: {
                                        type: "radio",
                                        name: "question",
                                        id: "id2"
                                    },
                                    content: ""
                                },
                                {
                                    tag: "label",
                                    attr: {
                                        for: "id2"
                                    },
                                    content: $scope.breakpoint_answer_2
                                }
                            ]
                        },
                        {
                            tag: "div",
                            attr: "",
                            content: [
                                {
                                    tag: "input",
                                    attr: {
                                        type: "radio",
                                        name: "question",
                                        id: "id3"
                                    },
                                    content: ""
                                },
                                {
                                    tag: "label",
                                    attr: {
                                        for: "id3"
                                    },
                                    content: $scope.breakpoint_answer_3
                                }
                            ]
                        },
                        {
                            tag: "div",
                            attr: "",
                            content: [
                                {
                                    tag: "input",
                                    attr: {
                                        type: "radio",
                                        name: "question",
                                        id: "id4"
                                    },
                                    content: ""
                                },
                                {
                                    tag: "label",
                                    attr: {
                                        for: "id4"
                                    },
                                    content: $scope.breakpoint_answer_4
                                }
                            ]
                        },
                        {
                            tag: "div",
                            attr: "",
                            content: [
                                {
                                    tag: "input",
                                    attr: {
                                        class: "question_button",
                                        type: "submit",
                                        value: "Submit and Continue"
                                    },
                                    content: ""
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        $scope.breakpointObject.breakpoints.push(data);
        $scope.creatingBreakpoint=false;
        video.play();
        $scope.questionCount+=1;
        console.log(JSON.stringify($scope.breakpointObject));
    }
    
});
