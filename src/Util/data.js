import dmotion from '../assets/dmotion.gif';
import moss from '../assets/moss.png';
import gfucb from '../assets/gfucb.png';
import expel from '../assets/expel.png';
import recon from '../assets/recon.png';
import seg from '../assets/seg.png';
import diverct from '../assets/diverct.png';
import motion from '../assets/motion.png';
import sr from '../assets/sr.png';

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
        date: "June 2024",
        content: "Started internship at Microsoft Research, Redmond. Working on LLM based agents.",
    },
    {
        date: "May 2024",
        content: "New preprint up on automatic red teaming with DiveR-CT https://arxiv.org/abs/2405.19026.",
    },
    {
        date: "Dec 2023",
        content: "Two new papers accepted to AAAI 2024!",
    },
    {
        date: "Nov 2023",
        content: "New preprint on unsupervised reinforcement learning https://arxiv.org/abs/2311.09692.",
    },
    {
        date: "Aug 2023",
        content: "New arXiv preprint on LLM-based agents https://arxiv.org/abs/2308.10144.",
    },
    {
        date: "Nov 2023",
        content: "Personal website updated!",
    },
];

export const FEATUREDPUBLICATIONS = [
    {
        id: 4,
        name: "DiveR-CT: Diversity-enhanced Red Teaming with Relaxing Constraints",
        journal: "arXiv Preprint",
        date: "May 2024",
        authors: "Andrew Zhao, Quentin Xu, Matthieu Lin, Shenzhi Wang, Yong-jin Liu, Zilong Zheng, Gao Huang",
        link: "https://arxiv.org/abs/2405.19026",
        image: diverct,
        projectPage: "https://andrewzh112.github.io/#diverct"
    },
    {
        id: 3,
        name: "ExpeL: LLM Agents are Experiential Learners",
        journal: "Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI 2024) (Oral)",
        date: "Aug 2023",
        authors: "Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, Gao Huang",
        link: "https://arxiv.org/abs/2308.10144",
        image: expel,
        code: "https://github.com/LeapLabTHU/ExpeL",
        projectPage: "https://andrewzh112.github.io/#expel"
    },
    {
        id: 2,
        name: "Augmenting Unsupervised Reinforcement Learning with Self-Reference",
        journal: "arXiv Preprint",
        date: "Nov 2023",
        authors: "Andrew Zhao, Erle Zhu, Rui Lu, Matthieu Lin, Yong-Jin Liu, Gao Huang",
        link: "https://arxiv.org/abs/2311.09692",
        image: sr,
    },
    {
        id: 1,
        name: "A Mixture Of Surprises for Unsupervised Reinforcement Learning",
        journal: "36th Conference on Neural Information Processing Systems (NeurIPS 2022)",
        date: "Oct 2022",
        authors: "Andrew Zhao, Matthieu Lin, Yangguang Li, Yong-jin Liu, Gao Huang",
        link: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/a7667ee5d545a43d2f0fda98863c260e-Abstract-Conference.html",
        image: moss, // Optional
        code: "https://github.com/LeapLabTHU/MOSS", // Optional
        // projectPage: "https://example.com/projects/project1" // Optional
    },
]

export const PUBLICATIONS = [
    {
        id: 8,
        name: "DiveR-CT: Diversity-enhanced Red Teaming with Relaxing Constraints",
        journal: "arXiv Preprint",
        date: "May 2024",
        authors: "Andrew Zhao, Quentin Xu, Matthieu Lin, Shenzhi Wang, Yong-jin Liu, Zilong Zheng, Gao Huang",
        link: "https://arxiv.org/abs/2405.19026",
        image: diverct,
        projectPage: "https://andrewzh112.github.io/#diverct"
    },
    {
        id: 7,
        name: "Exploring Temporal Feature Correlation for Efficient and Stable Video Semantic Segmentation",
        journal: "Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI 2024)",
        date: "Oct 2023",
        authors: "Matthieu Lin, Jenny Sheng, Yubin Hu, Yangguang Li, Lu Qi, Andrew Zhao, Gao Huang, Yong-Jin Liu",
        link: "https://ojs.aaai.org/index.php/AAAI/article/view/28132",
        image: seg,
    },
    {
        id: 6,
        name: "Exploring Temporal Feature Correlation for Efficient and Stable Video Semantic Segmentation",
        journal: "CVPR 2024 Human Motion Generation (HuMoGen) Workshop",
        date: "April 2024",
        authors: "Jenny Sheng, Matthieu Lin, Andrew Zhao, Kevin Pruvost, Yu-Hui Wen, Yangguang Li, Gao Huang, Yong-Jin Liu",
        link: "https://arxiv.org/abs/2404.09445",
        image: motion,
    },
    {
        id: 5,
        name: "Avalon's Game of Thoughts: Battle Against Deception through Recursive Contemplation",
        journal: "Findings of the Association for Computational Linguistics: ACL 2024",
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
        journal: "Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI 2024) (Oral)",
        date: "Aug 2023",
        authors: "Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, Gao Huang",
        link: "https://arxiv.org/abs/2308.10144",
        image: expel,
        code: "https://github.com/LeapLabTHU/ExpeL",
        projectPage: "https://andrewzh112.github.io/#expel"
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

export const ACADEMIC_TALKS = [
    {
        title: "ExpeL: LLM Agents are Experiential Learners",
        date: "August 2024",
        venue: "IJCAI 2024 AI4Research Workshop",
        description: "Invited Paper Talk",
        link: "https://ai4research.github.io/"
    },
    {
        title: "ExpeL: LLM Agents are Experiential Learners",
        date: "February 2024",
        venue: "AAAI 2024",
        description: "Oral Presentation"
    },
    {
        title: "ExpeL: LLM Agents are Experiential Learners",
        date: "January 2024",
        venue: "AI TIME Youth PhD Talk"
    },
    {
        title: "A Mixture of Surprises for Unsupervised Reinforcement Learning",
        date: "February 2023",
        venue: "AI TIME Youth PhD Talk"
    }
];

export const ABOUT = [
    {
        icon: "🎓",
        title: "Education",
        text: "PhD student at Tsinghua University advised by Professor Gao Huang."
    },
    {
        icon: "💼",
        title: "Experience",
        text: "Ex. Research Intern at Microsoft Research, Research Intern at BIGAI."
    },
    {
        icon: "🔬",
        title: "Research Area",
        text: "Focusing on Reinforcement Learning and Automated Decision Making."
    }
];