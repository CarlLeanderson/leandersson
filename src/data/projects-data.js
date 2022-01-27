const projectsData = [
  {
    id: "1",
    project: "UniBook",
    category: "Mobile",
    title: "UniBook",
    type: "iOS Application",
    tag: "UniBokApp is an app where a user can sell and buy second hand course literature.",
    description:
      "UniBokApp is an app where a user can sell and buy second hand course literature. A user logs in using Facebook and can then browse popular titles ans latest views. They can also search among ads and create their on ads. An add contains title, ISBN, price, condition and images of the book, which the user can upload from it's cameraroll. UniBook is an iOS app built in SwitftUI. A NodeJS server for push notifications was made as well.",
    videourl: "",
    img: "https://lehambergson.com/assets/ub.gif",
    techlist: ["Swift", "SwiftUI", "Firebase", "NodeJS"],
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
      "Course picker is a website where students at KTH can search for elective courses that are relevant to their program. The user is presented with a tree diagram that expands when users add courses to it.",
    videourl: "",
    img: "https://lehambergson.com/assets/coursepicker.gif",
    techlist: ["React", "Javascript", "SQL queries", "NodeJS"],
    links: [
      {
        linktitle: "Website",
        link: "https://coursepicker-dh2465.herokuapp.com/",
      },
    ],
  },
  {
    id: "3",
    project: "Iprog Word Quiz",
    title: "Iprog Word Quiz",
    category: "Web",
    type: "React Web Application",
    tag: "A react web application made for the course 'Iprog' at KTH.",
    description:
      "A quiz application where users can log in, play and create random word quizzes.",
    videourl: "",
    img: "https://lehambergson.com/assets/iprog.gif",
    techlist: ["React", "Javascript", "Firebase"],
    links: [{}],
  },

  {
    id: "4",
    project: "Steamind",
    title: "Steamind",
    type: "Website",
    category: "Web",
    tag: "Visualizing data from the popular game service Steam.",
    description:
      "Steamind is a tool for visualizing games from your own Steam library as well as other games from Steam that might suit your interests.",
    videourl: "526182623",
    img: "",
    techlist: ["Data Visualization", "HTML/CSS", "Javascript", "D3.js"],
    links: [],
  },
  {
    id: "5",
    project: "The post-pandemic soundscapes of Stockholm",
    title: "The post-pandemic soundscapes of Stockholm",
    type: "AR application",
    category: "AR",
    tag: "What will the soundscapes of post-pandemic Stockholm sound like?",
    description: "An Augmented Reality application.",
    videourl: "548755071",
    img: "",
    techlist: ["C#", "Unity", "Vuforia", "Sound design"],
    links: [
      {
        linktitle: "Download projet",
        link: "https://drive.google.com/file/d/1_Li6P4pvq6dF2xKwp1glIE0MmAFIjPFf/view?usp=sharing",
      },
    ],
  },
  {
    id: "6",
    project: "User (Dis)Satisfaction Estimation in Human-Robot Interactions",
    title: "User (Dis)Satisfaction Estimation in Human-Robot Interactions",
    type: "User Evaluation",
    tag: "A human-robot interaction evaluation",
    category: "Other",
    description:
      "With the use of the social robot Furhat, two human-robot interactions were created where one interaction encountered simulated failures. The subjects where recorded to see if it is possible to estimate user satisfaction from their facial traits during the interaction.",
    videourl: "500393975",
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
    id: "7",
    project: "SL - pandemic",
    title: "SL - pandemic mockup",
    category: "Other",
    type: "Mockup",
    tag: "Mockup for SL",
    description: "Mockup for the SL app to better avoid crowdedness",
    videourl: "548756580",
    img: "",
    techlist: ["Evaluation", "Mockup/prototype", "Develop idea"],
    links: [],
  },
];

export default projectsData;
