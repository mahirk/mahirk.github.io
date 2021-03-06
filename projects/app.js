(function() {
  var app = angular.module('projectStore', []);

  // app.filter('checks', function() {
  //   return function
  // });

  app.filter('selectedType', function() {
    return function(projects, type) {
        return projects.filter(function(project) {

            for (var i in project.type) {
                if (type.indexOf(project.type[i]) != -1 || type == '') {
                    return true;
                }
            }
            return false;

        });
    };
  });

  app.controller('StoreController', function($scope){
   $scope.projects = details;
   $scope.typefilter = '';
   $scope.clicked = function(type){
     $scope.typefilter = type;
   };
   $scope.selected = {
     item: $scope.projects[0]
   };
  });

  var details = [
    { name: 'AuTix', img: '/images/autix.png', data: 'Android Developer. Created a promotional treasure hunt application for store owners based on Maps API. Placed in the top 5 at Angel Hack Seattle'  , type: [ 'app'], link:"https://github.com/mahirk/autixdev"},
    { name: 'Chowdown', img: '/images/Chowdown.png', data: 'Helps control the quantum of ‘Husky’ money spent on food. Built a Parse Backend with JS and (partially) Ruby on Rails ' , type:['web', 'app'], link:"https://github.com/mahirk/chowdown" },
    { name: 'Pathify', img: '/images/pathify.jpg', data: 'A supplement to general advising, based on selected categories and majors, it provides data on them. Used JS to create the selection algorithm.', type:[ 'web','app'] , link:"https://github.com/mahirk/pathify" },
    { name: 'Devour Catering', img: '/images/devour.png', data: 'Developed website for Mumbai based catering company, Devour. Using AngularJS to generate dynamic and easy access to the various menus.'  , type: [ 'web'], link:"http://devourcatering.co"},
    { name: 'HackerCollective', img: '/images/hc.png', data: 'Part of a team accumulating all programming resources for developers. Responsible for organzing and writing data for Android, JS and Chrome Ext.' , type:['fp'], link:"http://bit.ly/hackcol" },
    { name: 'CatLyft', img: '/images/catlyft.png', data: 'An app which can be used to rent cats in the area, charged per rental w/ PAWS Shelter i.e. Lyft for Cats (Learning Project for CodeDay 2014)' , type:['app'], link:"https://github.com/mahirk/CatLyft" },
    { name: 'Fine \'Linnen\' Company', img: '/images/flc.jpeg', data: 'Revamped according to designs provided; used SEO optimization to increase page hits. Increased sales and compliments noted.' , type:['web'] , link:"http://flc.co.in"},
    { name: 'Startup UW', img: '/images/SUW.jpg', data: 'Maintain design and content of the website. Responsible for developing systems to make communication quick and easy.' , type:['web'] , link:"http://startupuw.com"},
    { name: 'Rise of Virtualization', img: '/images/rise.jpg', data: 'Studied how the introduction of virtualization in industries and schools can benefit, while tackling data security, integrity and reliability issues.' , type:['paper'], link:"#" },
    { name: 'USB: On The Go', img: '/images/OTG.jpg', data: 'A small, low cost device which can be connected to your phone and use to link other USB powered devices.', type:['hardware'] , link:"#" },
    { name: 'AAA', img: '/images/aaa.png', data: 'ABWA Alumni Association: Created and restored the website for the ABWA Alumni Association. Included a social network for all alumni.' , type:['web'], link:"http://abwaalumni.com" },
    { name: 'ABWA ModelUN', img: '/images/abmun.png', data: 'Used the second revamp of the ABWA MUN website. Used WordPress + HTML/JS to create interactive online forms and tables for the participants.', type:['web'] , link:"#" },
    { name: 'Interaa', img: '/images/interaa.png', data: 'Revamped the website, included newsrooms and contact forms, for Interaa, a financial advisory and IT company based out of Mumbai.' , type:['web' ], link:"http://interaa.in"},
  ];
})();
