/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tushar Garg",
  title: "Hello Everyone!!",
  subTitle: emoji(
    "I am Tushar Garg and currently doing my Undergraduate in Computer Science. I am an avid Problem Solver and a passinate Web Developer. I love to explore new tech stacks and upcoming global technologies."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Assassin1771",
  linkedin: "https://www.linkedin.com/in/tushar-garg-65663b190/",
  gmail: "tshrgarg2010@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "WEB DEVELOPER AND PROGRAMMING ENTHUSIAST",
  skills: [
    emoji(
      "⚡ Develop highly interactive FrontEnd User Interfaces for Web Applications"
    ),
    emoji("⚡ Knack for Competitive Programming in C++")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jaypee Institute of Information Technology",
      logo: require("./assets/images/jiit2.png"),
      subHeader: "Bachelor of Technology (Computer Science)",
      duration: "2019 - 2023",
      desc: "CGPA : 8.2"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Delhi Public School Ghaziabad Vasundhara",
      logo: require("./assets/images/dpsgv2.jpg"),
      subHeader: "Higher Secondary Education",
      duration: "2019",
      desc: "Class 12 : 91.6%"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Delhi Public School Ghaziabad Vasundhara",
      logo: require("./assets/images/dpsgv2.jpg"),
      subHeader: "Secondary Education",
      duration: "2017",
      desc: "Class 10 : 95%"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Development", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "70%"
    },
    {
      Stack: "Competitve Programming",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer Intern",
      company: "FilterPixel",
      companylogo: require("./assets/images/fp.png"),
      date: "November 2021 – Present",
      desc: "Currently working as a Web Developer and mostly on technologies Angular and Electron JS.",
      descBullets: [
        "Primary tasks include revamp of UI/UX design of the application and debugging of other frontend features.",
        "Also contributing to other domains including Deep Learning and Digital Marketing."
      ]
    }
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "FEW OF MY PROJECTS IN THE DOMAINS I AM PASSIONATE ABOUT!",
  projects: [
    {
      image: require("./assets/images/CRYPTOWORLD.jpg"),
      projectName: "CRYPTOWORLD",
      projectDesc:
        "CryptoWorld is a platform where one can get all the information regarding the various Cryptocurrencies in Real Time.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://crypto-app-assassin1771.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/WEATHER.png"),
      projectName: "WEATHER APP",
      projectDesc:
        "An innovative platform where user can find the weather details of any city they enter. Website is fully responsive and compatible on all devices.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://weather-app-assassin1771.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/TASK.png"),
      projectName: "TASKS TRACKER",
      projectDesc:
        "A CRUD Application, where user can store data and even modify and delete data as per required. Website is fully responsive and compatible on all devices.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tasks-tracker-assassin1771.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",

  achievementsCards: [
    {
      title: "PROBLEM SOLVING (BASIC) ",
      subtitle: "HACKERRANK",
      image: require("./assets/images/HACKERRANK.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
        // {
        //     name: "Award Letter",
        //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR 3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //     name: "Google Code-in Blog",
        //     url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "FULL STACK WEB DEVELOPMENT",
      subtitle: "UDEMY",
      image: require("./assets/images/UDEMY.png"),
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },

    {
      title: "DIGITAL MARKETING",
      subtitle: "GOOGLE",
      image: require("./assets/images/GOOGLE.png"),
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Wanna discuss something with me? My Inbox is open for all.",
  number: "+91-9313349392",
  email_address: "tshrgarg2010@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
