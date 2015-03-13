(function() {
  var app = angular.module('workStore', []);

  // app.filter('checks', function() {
  //   return function
  // });
  app.filter('unsafe', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
  });


  app.controller('StoreController', function(){
   this.works = details;
  });

  var details = [
      {
              "startDate":"2010,7,1",
              "endDate":"2010,7,31",
              "headline":"Viacom 18",
              "text":"<i>Digital Intern</i><br/>Worked in creating and editing of live data trends between hits on Media Channels and Twitter/Google for MTV. Submitted creative ideas for Social Media Marketing which were later implemented.",
              "asset":
              {
                  "media":"/images/viacom18.jpg",
                  "thumbnail":"/images/viacom18.jpg",
                  "caption":"Viacom 18"
              }
          },
          {
                  "startDate":"2011,5,1",
                  "endDate":"2011,9,30",
                  "headline":"Harvard Model United Nations",
                  "text":"<i>Intern – Business, Revenue and Social Media Marketing</i><br/>Member of hotel relations team for the conference; helped market rooms and organized transport for MUN attendees. In charge of designing merchandise and creating a 5-month social media marketing plan to implement pre- and post-conference",
                  "asset":
                  {
                      "media":"/images/hmun.png",
                      "thumbnail":"/images/hmunthumb.png",
                      "caption":"Harvard Model United Nations"
                  }
              },
              {
                      "startDate":"2012,6,7",
                      "endDate":"2012,6,30",
                      "headline":"Datamatics Global Services Limited",
                      "text":"<i>General Intern</i><br/>Completed a course in learning Android programming alongside the ‘Sencha’ Platform, as well as iOS application programming, and applied them successfully in the assignments given. Assisted in designing and mobile enabling an e-Process Manager with a single sign on for Android, iOS and BB-OS devices.",
                      "asset":
                      {
                          "media":"/images/datamatics.png",
                          "thumbnail":"/images/datamaticsthumb.png",
                          "caption":"Datamatics: GSS"
                      }
                },
                {
                          "startDate":"2012,7,2",
                          "endDate":"2012,8,15",
                          "headline":"VMware",
                          "text":"<i>Intern: Consulting and Developing</i><br/>Used previously learnt Java knowledge to learn different Application Programming Interfaces and create a log in system and alarm to read the data from different VMs (virtual machines). Assisted a group of consultants to learn the benefits of using virtualization as well as joined in on to the VMSTART, a program for the new recruits.",
                          "asset":{
                              "media":"/images/vmware.png",
                              "thumbnail":"/images/vmthumb.png",
                              "caption":"VMware"
                          }
                    },
                    {
                              "startDate":"2013,6,7",
                              "endDate":"2013,6,31",
                              "headline":"Fine 'Linnen' Company",
                              "text":"<i>Web Developer</i><br/>Helped redesign the company website according specification provided by the CEO. The company is in the business of bed and bath linen for hotels and other chains.",
                              "asset":
                              {
                                  "media":"/images/flcmain.png",
                                  "thumbnail":"/images/flcthumb.png",
                                  "caption":"Fine 'Linnen' Company"
                              }
                        },
                        {
                                "startDate":"2014,7,2",
                                "endDate":"2014,8,15",
                                "headline":"IBM: International Business Machines",
                                "text":"<i>Project Intern - Marketing(Software Group)</i><br/>Created marketing and competitive reports on various IBM products/services (Cognos BI, SPSS). Created personas of various executive officers from companies in the IBM client list. Generated reports for Watson, its use cases and possible companies under the current client list which can use Watson to benefit their industry along with possible efficiency changes.",
                                "asset":
                                {
                                    "media":"/images/ibmmain.gif",
                                    "thumbnail":"/images/ibmthumb.png",
                                    "caption":"IBM"
                                }
                            }

      ];
})();
