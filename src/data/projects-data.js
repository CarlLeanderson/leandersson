const projectsData = [
  {
    id: "1",
    project: "UniBook",
    category: "Mobile",
    title: "UniBook",
    type: "iOS Application",
    tag: "iOS app for acquiring and selling course literature.",
    description:
      "UniBokApp is an app where users can sell and buy second-hand course literature. Users log in using Facebook and create ads using Google API for books. The ads are then stored on Firebase, where users can remove their ads once a book is sold. The app was built using SwitftUI. A NodeJS server for push notifications was made as well.",
    videourl: "",
    img: "https://lehambergson.com/assets/ub.gif",
    still: "https://lehambergson.com/assets/ub-low.webp",
    techlist: ["Swift", "Async/await", "Firebase", "NodeJS"],
    links: [
      {
        linktitle: "GitHub - App",
        link: "https://github.com/CALIELSA-BOOK/UniBookApp",
      },
      {
        linktitle: "GitHub - Push notification server",
        link: "https://github.com/CALIELSA-BOOK/UniBookApp",
      },
    ],
  },

  {
    id: "2",
    project: "Course picker",
    title: "Course picker",
    category: "Web",
    type: "React Web Application",
    tag: "A website for picking elective courses at KTH",
    description:
      "Course picker is a website where students at KTH can search for elective courses relevant to their program. The user is presented with a tree diagram that expands when users add courses. The course information is fetched from KTH Kopps API. Firebase was used to save reviews from students. Implementation was made for desktop.",
    videourl: "",
    img: "https://lehambergson.com/assets/coursepicker.gif",
    still: "https://lehambergson.com/assets/coursepicker-low.webp",
    techlist: ["React", "Firebase", "SQL queries", "Async/await"],
    links: [
      {
        linktitle: "Website",
        link: "https://coursepicker-dh2465.herokuapp.com/",
      },
    ],
  },
  {
    id: "3",
    project: "CL Projects",
    title: "Carl Leandersson Projects",
    category: "Web",
    type: "React Web Application",
    tag: "Project website",
    description:
      "This is the website you're currently viewing. It was built using React and optimised for Google Lighthouse until it reached a 100 score for desktop.",
    videourl: "",
    img: "https://lehambergson.com/assets/lpdev.gif",
    still: "https://lehambergson.com/assets/Ldevp.webp",
    techlist: ["React", "Lazy-Loading", "Lighthouse"],
    links: [
      {
        linktitle: "Lighthouse report",
        link: "https://lehambergson.com/assets/leandersson.dev-lighthouse.html",
      },
      {
        linktitle: "GitHub",
        link: " https://github.com/CarlLeanderson/leandersson",
      },
    ],
  },
  {
    id: "4",
    project: "Tomode",
    category: "Web",
    title: "Tomode",
    type: "Website",
    tag: "Tomodemusic.com",
    description:
      "A website for the band Tomode. It's a static website made with Javascript, HTML and CSS",
    videourl: "",
    img: "https://lehambergson.com/assets/tomode-small.gif",
    still: "https://lehambergson.com/assets/tomode.webp",
    techlist: ["Javascript", "HTML", "CSS"],
    links: [
      {
        linktitle: "Website",
        link: "https://tomodemusic.com",
      },
    ],
  },
  {
    id: "5",
    project: "Word Quiz",
    title: "Word Quiz",
    category: "Web",
    type: "React Web Application",
    tag: "A react web application made during a course at KTH.",
    description:
      "A quiz application where users can log in, play and create random word quizzes. The random quizzes are created using the Words API and stored on Firebase.",
    videourl: "",
    img: "https://lehambergson.com/assets/iprog.gif",
    still: "https://lehambergson.com/assets/iprog.webp",

    techlist: ["React", "Javascript", "Firebase", "Async/await"],
    links: [],
  },

  {
    id: "6",
    project: "Steamind",
    title: "Steamind",
    type: "Website",
    category: "Web",
    tag: "Visualizing data from the popular game service Steam.",
    description:
      "Steamind is a tool for visualizing games from your own Steam library and other games from Steam that might suit your interests.",
    videourl: "https://vimeo.com/526182623",
    img: "",
    techlist: ["Data Visualization", "API", "Javascript", "D3.js"],
    links: [],
  },
  {
    id: "7",
    project: "The post-pandemic soundscapes of Stockholm",
    title: "The post-pandemic soundscapes of Stockholm",
    type: "AR application",
    category: "AR",
    tag: "What will the soundscapes of post-pandemic Stockholm sound like?",
    description: "An Augmented Reality application.",
    videourl: "https://vimeo.com/548755071",
    img: "",
    techlist: ["C#", "Unity", "Vuforia", "Sound design"],
    links: [
      {
        linktitle: "Download project",
        link: "https://drive.google.com/file/d/1_Li6P4pvq6dF2xKwp1glIE0MmAFIjPFf/view?usp=sharing",
      },
    ],
  },
  {
    id: "8",
    project: "User (Dis)Satisfaction Estimation in Human-Robot Interactions",
    title: "User (Dis)Satisfaction Estimation in Human-Robot Interactions",
    type: "User Evaluation",
    tag: "A human-robot interaction evaluation",
    category: "Other",
    description:
      "With the use of the social robot Furhat, two human-robot interactions were created where one interaction encountered simulated failures. The subjects where recorded to see if it is possible to estimate user satisfaction from their facial traits during the interaction.",
    videourl: "https://vimeo.com/500393975",
    techlist: [
      "Human-Robot interaction",
      "Facial recognition",
      "OpenFace",
      "Google Blockly",
    ],
    img: "",
    links: [],
  },
  {
    id: "9",
    project: "SL - pandemic",
    title: "SL - pandemic mockup",
    category: "Other",
    type: "Mockup",
    tag: "Mockup for SL",
    description: "Mockup for the SL app to better avoid crowdedness",
    videourl: "https://vimeo.com/548756580",
    img: "",
    techlist: ["Evaluation", "Mockup/prototype", "Develop idea"],
    links: [],
  },
];

export default projectsData;
