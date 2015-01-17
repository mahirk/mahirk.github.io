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
   this.projects = details;
   $scope.typefilter = '';
   $scope.clicked = function(type){
     $scope.typefilter = type;
   }
  });

  var details = [
    { name: 'AuTix', img: '/images/autix.png', data: 'Android Developer. Created a promotional treasure hunt application for store owners based on Maps API. Placed in the top 5 at Angel Hack Seattle'  , type: ['fp', 'app']},
    { name: 'Chowdown', img: '/images/Chowdown.png', data: 'Helps control the quantum of ‘Husky’ money spent on food by providing quarterly estimates. Built a Parse Backend with JS and (partially) Ruby on Rails ' , type:['web', 'app'] },
    { name: 'Pathify', img: '/images/pathify.jpg', data: 'A supplement to general advising, based on selected categories and majors, it provides data on them. Used JS to create the selection algorithm.', type:['fp', 'web','app']  },
    { name: 'HackerCollective', img: '/images/hc.png', data: 'Part of a team accumulating all programming resources for developers. Responsible for organzing and writing data for Android, JS and Chrome Ext.' , type:['fp'] },
    { name: 'CatLyft', img: '/images/catlyft.png', data: 'An app which can be used to rent cats in the area, charged per rental w/ PAWS Shelter i.e. Lyft for Cats (Learning Project for CodeDay 2014)' , type:['app'] },
    { name: 'Fine \'Linnen\' Company', img: '/images/flc.jpeg', data: 'Revamped according to designs provided; used SEO optimization to increase page hits. Increased sales and compliments noted.' , type:['web'] },
    { name: 'Startup UW', img: '/images/SUW.jpg', data: 'Maintain design and content of the website. Responsible for developing systems to make communication quick and easy.' , type:['web'] },
    { name: 'Rise of Virtualization', img: '/images/rise.jpg', data: 'Studied how the introduction of virtualization in industries and schools can benefit, while tackling data security, integrity and reliability issues.' , type:['paper'] },
    { name: 'USB: On The Go', img: '/images/OTG.jpg', data: 'A small, low cost device which can be connected to your phone (usually Android or other open source systems) and use to link other USB powered devices.', type:['hardware']  },
    { name: 'AAA', img: '/images/aaa.png', data: 'ABWA Alumni Association: Created and restored the website for the ABWA Alumni Association. Included a social network for all alumni.' , type:['web'] },
    { name: 'ABWA ModelUN', img: '/images/abmun.png', data: 'Handled the second revamp of the ABWA MUN website. Used the WordPress with HTML and JS to create interactive online forms and tables for the participants.', type:['web']  },
    { name: 'Interaa', img: '/images/interaa.png', data: 'As a first project, revamped the website, included newsrooms and contact forms, for Interaa, a financial advisory and IT company based out of Mumbai India.' , type:['web' ]},
  ];
})();
