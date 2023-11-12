import dmotion from '../assets/dmotion.gif';
import moss from '../assets/moss.png';
import gfucb from '../assets/gfucb.png';
import expel from '../assets/expel.png';
import recon from '../assets/recon.png';

export const FULL_NAME = "Andrew Zhao 赵启晨";
export const RESUME_LINK = "https://Andrewzh112.github.io/resume/resume.pdf";
export const FOOTER_TEXT = "Built by Yash Walia, Edited by Andrew Zhao/ChatGPT";
export const SOCIAL_LINKS = [
    {
        name: "Email",
        icon: "far fa-lg fa-envelope",
        link: "mailto:zqc21@mails.tsinghua.edu.cn",
    },
    {
        name: "Google Scholar",
        icon: "fas fa-graduation-cap",
        link: "https://scholar.google.com/citations?user=Tlt5xsYAAAAJ&hl=en&authuser=1&oi=ao",
    },
    {
        name: "Github",
        icon: "fab fa-lg fa-github",
        link: "https://github.com/Andrewzh112",
    },
    {
        name: "Linkedin",
        icon: "fab fa-lg fa-linkedin-in",
        link: "https://www.linkedin.com/in/andrewqzhao",
    },
    {
        name: "Twitter",
        icon: "fab fa-lg fa-twitter",
        link: "https://twitter.com/AndrewZ45732491",
    },
];

export const NEWS = [
    {
        date: "Nov 2023",
        content: "Personal website updated!",
    },
    {
        date: "Aug 2023",
        content: "New arXiv preprint on LLM-based agents https://arxiv.org/abs/2308.10144",
    },
];

export const FEATUREDPUBLICATIONS = [
    {
        id: 1,
        name: "ExpeL: LLM Agents are Experiential Learners",
        journal: "arXiv Preprint",
        date: "Aug 2023",
        authors: "Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, Gao Huang",
        link: "https://arxiv.org/abs/2308.10144",
        image: expel,
        code: "https://github.com/username/project1",
        // projectPage: "https://example.com/projects/project1"
    },
]

export const PUBLICATIONS = [
    {
        id: 5,
        name: "Avalon's Game of Thoughts: Battle Against Deception through Recursive Contemplation",
        journal: "arXiv Preprint",
        date: "Oct 2023",
        authors: "Shenzhi Wang, Chang Liu, Zilong Zheng, Siyuan Qi, Shuo Chen, Qisen Yang, Andrew Zhao, Chaofei Wang, Shiji Song, Gao Huang",
        link: "https://arxiv.org/abs/2310.01320",
        image: recon,
        // code: "https://github.com/username/project1",
        // projectPage: "https://example.com/projects/project1"
    },
    {
        id: 4,
        name: "ExpeL: LLM Agents are Experiential Learners",
        journal: "arXiv Preprint",
        date: "Aug 2023",
        authors: "Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, Gao Huang",
        link: "https://arxiv.org/abs/2308.10144",
        image: expel,
        code: "https://github.com/username/project1",
        // projectPage: "https://example.com/projects/project1"
    },
    {
        id: 3,
        name: "A Mixture Of Surprises for Unsupervised Reinforcement Learning",
        journal: "36th Conference on Neural Information Processing Systems (NeurIPS 2022)",
        date: "Oct 2022",
        authors: "Andrew Zhao, Matthieu Lin, Yangguang Li, Yong-jin Liu, Gao Huang",
        link: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/a7667ee5d545a43d2f0fda98863c260e-Abstract-Conference.html",
        image: moss, // Optional
        code: "https://github.com/LeapLabTHU/MOSS", // Optional
        // projectPage: "https://example.com/projects/project1" // Optional
    },
    {
        id: 2,
        name: "Provable General Function Class Representation Learning in Multitask Bandits and MDP",
        journal: "36th Conference on Neural Information Processing Systems (NeurIPS 2022) (Spotlight)",
        date: "Oct 2022",
        authors: "Rui Lu, Andrew Zhao, Simon S Du, Gao Huang",
        link: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/4b121e627d3c5683f312ad168988f3f0-Abstract-Conference.html",
        image: gfucb, // Optional
        // code: "https://github.com/LeapLabTHU/MOSS", // Optional
        // projectPage: "https://example.com/projects/project1" // Optional
    },
    {
        id: 1,
        name: "DMotion: Robotic Visuomotor Control with Unsupervised Forward Model Learned from Videos",
        journal: "2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
        date: "Sep 2021",
        authors: "Haoqi Yuan, Ruihai Wu, Andrew Zhao, Haipeng Zhang, Zihan Ding, Hao Dong",
        link: "https://ieeexplore.ieee.org/abstract/document/9636362/",
        image: dmotion, // Optional
        // code: "https://github.com/username/project1", // Optional
        // projectPage: "https://example.com/projects/project1" // Optional
    },
];

// export const SKILLS = [
//     {
//         name: "Python",
//         icon: "devicon-python-plain colored",
//     },
//     {
//         name: "Javascript",
//         icon: "devicon-javascript-plain colored",
//     },
//     {
//         name: "C/C++",
//         icon: "devicon-c-plain colored",
//     },
//     {
//         name: "Java",
//         icon: "devicon-java-plain colored",
//     },
//     {
//         name: "Reactjs",
//         icon: "devicon-react-original colored",
//     },
//     {
//         name: "Typescript",
//         icon: "devicon-typescript-plain colored",
//     },
//     {
//         name: "Flask",
//         svg: "https://user-images.githubusercontent.com/48391286/116382927-045e8080-a834-11eb-95bd-f2dacbd6b0f8.png",
//     },
//     {
//         name: "Django",
//         svg: "https://static.djangoproject.com/img/icon-touch.e4872c4da341.png",
//     },
//     {
//         name: "Node",
//         icon: "devicon-nodejs-plain colored",
//     },
//     {
//         name: "MongoDB",
//         icon: "devicon-mongodb-plain colored",
//     },
//     {
//         name: "Git",
//         icon: "devicon-git-plain colored",
//     },
//     {
//         name: "Docker",
//         icon: "devicon-docker-plain colored",
//     },
//     {
//         name: "Bash",
//         icon: "devicon-bash-plain colored",
//     },
//     {
//         name: "Linux",
//         svg: "https://user-images.githubusercontent.com/48391286/116357092-b63c8380-a819-11eb-8975-30668aa7d647.png",
//     },
// ];

export const ABOUT = [
    {
        index: "1",
        text: "I am a PhD student at Tsinghua University, advised by Professor Gao Huang.",
    },
    {
        index: "2",
        text: "I obtained my masters degree from USC in 2020, and undergrad degree from UBC in 2017.",
    },
    {
        index: "3",
        text: "My research interests are in reinforcement learning and automated decision making.",
    },
    {
        index: "4",
        text: "I have published works in unsupervised reinforcement learning and language model-based agents.",
    },
];

// export const WORK = [
//     {
//         title: "Dune API Landing Page",
//         description: "Documentation for the Dune API",
//         description2: "Reactjs",
//         ghlink: "https://github.com/ywalia01/dune-api-frontend",
//         extlink: "https://ywalia01.github.io/dune-api-frontend/",
//     },
//     {
//         title: "Dune API",
//         description:
//             "A simple API which provides you with book, character, movie and quotes JSON data",
//         description2: "Nodejs, Expressjs",
//         ghlink: "https://github.com/ywalia01/dune-api",
//         extlink: "https://the-dune-api.herokuapp.com/quotes/1",
//     },
//     {
//         title: "random-dune-quotes",
//         description:
//             "A simple NPM package that serves random quotes from the Dune franchise",
//         description2: "Nodejs, Expressjs",
//         ghlink: "",
//         extlink: "https://www.npmjs.com/package/random-dune-quotes",
//     },
//     {
//         title: "Developer Portfolio",
//         description: "A clean, minimal responsive portfolio for developers",
//         description2: "Reactjs",
//         ghlink: "https://github.com/ywalia01/ywalia01.github.io",
//         extlink: "https://ywalia01.netlify.app/",
//     },
//     {
//         title: "Artist Portfolio",
//         description: "A responsive grid portfolio template for artists",
//         description2: "Reactjs, Nodejs, Expressjs, MongoDB",
//         ghlink: "https://github.com/ywalia01/artist-portfolio",
//         extlink: "https://artist-pfolio.netlify.app/",
//     },
//     {
//         title: "Jchain",
//         description: "A simple blockchain simulation GUI application",
//         description2: "Java, Swing",
//         ghlink: "https://github.com/ywalia01/jchain",
//         extlink: "https://github.com/ywalia01/jchain",
//     },
//     {
//         title: "iHeard",
//         description: "A web app designed for the hard of hearing",
//         description2: "Machine Learning, Speech to text, Google Cloud API",
//         ghlink: "https://github.com/ywalia01/iheard",
//         extlink: "https://iheard.tech/",
//     },
//     {
//         title: "Yelpcamp",
//         description:
//             "An implementation of the popular crowd-sourced review service provider - Yelp. It has basic CRUD Functionality",
//         description2: "Nodejs, Expressjs, MongoDB",
//         ghlink: "https://github.com/ywalia01/yelpcampv9",
//         extlink: "https://github.com/ywalia01/yelpcampv9",
//     },
//     {
//         title: "CountDune",
//         description: "A simple countdown timer for Dune 2021",
//         description2: "Vanilla Javascript",
//         ghlink: "https://github.com/ywalia01/countdune",
//         extlink: "https://ywalia01.github.io/countdune/",
//     },
//     {
//         title: "Yodish Converter",
//         description: "A simple API interface for English to Yodish conversion",
//         description2: "Vanilla Javascript",
//         ghlink: "https://github.com/ywalia01/yodish",
//         extlink: "https://ywalia01.github.io/yodish/",
//     },
// ];
