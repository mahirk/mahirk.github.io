/**
 * Career and Education Data
 * Centralized data source for work experience pages
 */

// Full work details for work and experiences pages
const WORK_DETAILS = [
    // Education entries for comprehensive timeline
    {
        startDate: "2021,8,1",
        endDate: "2022,5,1",
        headline: "Cornell Tech",
        title: "Master of Engineering",
        location: "New York, NY",
        type: "education",
        text: ["Focused on technical entrepreneurship, product development, and engineering management. Completed coursework in distributed systems, product management, and startup studio projects."],
        asset: {
            media: "/assets/images/cornell.png",
            thumbnail: "/assets/images/cornell.png",
            caption: "Cornell Tech"
        }
    },
    {
        startDate: "2013,9,1",
        endDate: "2017,6,15",
        headline: "University of Washington",
        title: "Bachelor of Science in Computer Science",
        location: "Seattle, WA",
        type: "education",
        text: ["Minor in Entrepreneurship. Completed coursework in algorithms, data structures, software engineering, and database systems. Active in student organizations and hackathons."],
        asset: {
            media: "/assets/images/uw.png",
            thumbnail: "/assets/images/uw.png",
            caption: "University of Washington"
        }
    },
    // Leadership experience
    {
        startDate: "2014,1,1",
        endDate: "2017,6,15",
        headline: "Student Leadership",
        title: "Multiple Leadership Roles",
        location: "Seattle, WA",
        type: "leadership",
        text: [
            "Executive Organizer for <a href='https://dubhacks.co' target='_blank'>DubHacks</a> - Organized Pacific Northwest's largest collegiate hackathon.",
            "Vice Chair of <a href='https://www.cs.washington.edu/acm/' target='_blank'>UW-ACM</a> - Led computer science student organization.",
            "Co-President of <a href='https://startupuw.com' target='_blank'>StartupUW</a> - Managed entrepreneurship club and events."
        ],
        asset: {
            media: "/assets/images/uw.png",
            thumbnail: "/assets/images/uw.png",
            caption: "University of Washington"
        }
    },
    // Work experiences follow
    {
        startDate: "2022,7,11",
        endDate: "Present",
        headline: "Stripe",
        title: "Software Engineer, Terminal",
        location: "Seattle WA",
        text: [""],
        asset: {
            media: "/assets/images/stripe.png",
            thumbnail: "/assets/images/stripethumb.png",
            caption: "Stripe"
        }
    },
    {
        startDate: "2021,4,1",
        endDate: "2021,8,7",
        headline: "HBO",
        title: "Staff Eng, Subscriber Lifecycle",
        location: "Seattle, WA",
        text: [
            "Lead cross team feature crews for the international expansion of HBO Commerce Services into LATAM and EU.",
            "Designed systems to enable rule-based and multi-plan purchasing options for US and international experiences.",
            "Architected plans and led prototyping for internal tooling to help the organization make the move to using OpenAPI for build and testing systems"
        ],
        asset: {
            media: "/assets/images/hbo.png",
            thumbnail: "/assets/images/hbothumb.png",
            caption: "HBO"
        }
    },
    {
        startDate: "2018,7,7",
        endDate: "2021,4,1",
        headline: "HBO",
        title: "Software Engineer II / Sr Software Engineer, Direct Commerce",
        location: "Seattle, WA",
        text: [
            "Lead a small team over a span of 2 months to design and reestablish an end to end commerce system using Stripe.",
            "Developed systems to interact with existing third party commerce solutions and built accompanying financial tooling.",
            "Designed multi-stack architectures to create the first in house credit card processing and billing system.",
            "Design and execute large scale load testing for commerce services to enable subscriber signups for Game of Thrones."
        ],
        asset: {
            media: "/assets/images/hbo.png",
            thumbnail: "/assets/images/hbothumb.png",
            caption: "HBO"
        }
    },
    {
        startDate: "2017,8,7",
        endDate: "2018,7,7",
        headline: "HBO",
        title: "Software Engineer I, In App Commerce",
        location: "Seattle, WA",
        text: ["Working on backend services with the Purchase and Identity team, focussing on interaction with payment providers, billing databases and testing."],
        asset: {
            media: "/assets/images/hbo.png",
            thumbnail: "/assets/images/hbothumb.png",
            caption: "HBO"
        }
    },
    {
        startDate: "2016,6,13",
        endDate: "2015,8,19",
        headline: "HBO",
        title: "Software Engineering Intern",
        location: "New York City, NY",
        text: ["Worked on the User and Accounts team. Developed new authentication strategies for internal service communication. Improved validation across all services to meet HBO standards. Created project plans for intern project as well as future projects stemming from the summer project."],
        asset: {
            media: "/assets/images/hbo.png",
            thumbnail: "/assets/images/hbothumb.png",
            caption: "HBO"
        }
    },
    {
        startDate: "2015,6,15",
        endDate: "2015,8,28",
        headline: "Shippable",
        title: "Software Engineering Intern",
        location: "Seattle, WA",
        text: ["Worked in a group of 4 front and back-end interns and helped in post-development fixes and changes for the Shippable 3.0 platform, used Angular and Node, working on multi-stack."],
        asset: {
            media: "/assets/images/shippable.png",
            thumbnail: "/assets/images/shippablethumb.png",
            caption: "Shippable"
        }
    },
    {
        startDate: "2014,7,2",
        endDate: "2014,8,15",
        headline: "IBM",
        title: "Software Marketing Intern",
        location: "Mumbai, India",
        text: ["Created marketing and competitive reports on various IBM products/services (Cognos BI, SPSS). Created personas of various executive officers from companies in the IBM client list. Generated reports for Watson, its use cases and possible companies under the current client list which can use Watson to benefit their industry along with possible efficiency changes."],
        asset: {
            media: "/assets/images/ibmmain.gif",
            thumbnail: "/assets/images/ibmthumb.png",
            caption: "IBM"
        }
    },
    {
        startDate: "2013,6,7",
        endDate: "2013,6,31",
        headline: "Fine 'Linnen' Company",
        location: "Mumbai, India",
        title: "Web Developer",
        text: [
            "Helped redesign the company website according specification provided by the CEO. The company is in the business of bed and bath linen for hotels and other chains."
        ],
        asset: {
            media: "/assets/images/flcmain.png",
            thumbnail: "/assets/images/flcthumb.png",
            caption: "Fine 'Linnen' Company"
        }
    },
    {
        startDate: "2012,7,2",
        endDate: "2012,8,15",
        headline: "VMware",
        location: "Singapore",
        title: "Consulting and Developing Intern",
        text: ["Used previously learnt Java knowledge to learn different Application Programming Interfaces and create a log in system and alarm to read the data from different VMs (virtual machines). Assisted a group of consultants to learn the benefits of using virtualization as well as joined in on to the VMSTART, a program for the new recruits."],
        asset: {
            media: "/assets/images/vmware.png",
            thumbnail: "/assets/images/vmthumb.png",
            caption: "VMware"
        }
    },
    {
        startDate: "2012,6,7",
        endDate: "2012,6,30",
        headline: "Datamatics Global Services",
        location: "Mumbai, India",
        title: "Consulting and Developing Intern",
        text: ["Completed a course in learning Android programming alongside the 'Sencha' Platform, as well as iOS application programming, and applied them successfully in the assignments given. Assisted in designing and mobile enabling an e-Process Manager with a single sign on for Android, iOS and BB-OS devices."],
        asset: {
            media: "/assets/images/datamatics.png",
            thumbnail: "/assets/images/datamaticsthumb.png",
            caption: "Datamatics: GSS"
        }
    },
    {
        startDate: "2011,5,1",
        endDate: "2011,9,30",
        headline: "Harvard Model United Nations",
        location: "Mumbai, India",
        title: "Business, Revenue and Social Media Intern",
        text: ["Member of hotel relations team for the conference; helped market rooms and organized transport for MUN attendees. In charge of designing merchandise and creating a 5-month social media marketing plan to implement pre- and post-conference. Maintained relations with the hotel to manage the guests while maximizing profit"],
        asset: {
            media: "/assets/images/hmun.png",
            thumbnail: "/assets/images/hmunthumb.png",
            caption: "Harvard Model United Nations"
        }
    },
    {
        startDate: "2010,7,1",
        endDate: "2010,7,31",
        headline: "Viacom 18",
        location: "Mumbai, India",
        title: "Digital Services Intern",
        text: ["Worked in creating and editing of live data trends between hits on Media Channels and Twitter/Google for MTV. Submitted creative ideas for Social Media Marketing which were later implemented."],
        asset: {
            media: "/assets/images/viacom18.jpg",
            thumbnail: "/assets/images/viacom18.jpg",
            caption: "Viacom 18"
        }
    }
];