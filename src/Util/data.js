import dmotion from '../assets/dmotion.gif';
import moss from '../assets/moss.png';
import gfucb from '../assets/gfucb.png';
import expel from '../assets/expel.png';
import recon from '../assets/recon.png';
import seg from '../assets/seg.png';
import diverct from '../assets/diverct.png';
import azr from '../assets/azr.png';
import motion from '../assets/motion.png';
import surgery from '../assets/surgery.png';
import optim from '../assets/optim.png';
import limits from '../assets/limits.png';
import sr from '../assets/sr.png';
import carotid from '../assets/ultrabot.png';
import prompt from '../assets/prompt.png';
import forking from '../assets/forking.png';

export const FULL_NAME = "Andrew Zhao 赵启晨";
export const RESUME_LINK = "/assets/CV-Andrew.pdf";
export const FOOTER_TEXT = "Built by Yash Walia, Edited by Andrew Zhao/ChatGPT";
export const SOCIAL_LINKS = [
    {
        name: "Email",
        icon: "far fa-lg fa-envelope",
        link: "mailto:andrewzhao112@gmail.com",
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
        name: "X",
        icon: "fab fa-lg fa-x-twitter fa-x-icon",
        link: "https://x.com/_AndrewZhao",
        customIcon: "x"
    },
];

export const NEWS = [
    {
        date: "Jan 2026",
        content: "LLM-optimizer safety paper accepted to EACL 2026 Main (Oral)!",
    },
    {
        date: "Dec 2025",
        content: "Limits-of-RLVR has been selected as the 🏆 Best Paper Runner-up @ NeurIPS 2025!",
    },
    {
        date: "Oct 2025",
        content: "Selected as Top Reviewer in NeurIPS 2025.",
    },
    {
        date: "Oct 2025",
        content: "New preprint on safety implications of LLM-based prompt optimizers.",
    },
    {
        date: "Sep 2025",
        content: "Three papers on LLM reasoning accepted to NeurIPS 2025 (1 Oral, 1 Spotlight)!",
    },
    {
        date: "Aug 2025",
        content: "Our Ultrasound Robotics paper was accepted to Nature Communications!",
    },
    {
        date: "May 2025",
        content: "Two new preprints on LLM Reasoning! Absolute Zero X thread: https://x.com/AndrewZ45732491/status/1919920459748909288, 490k views, 1.7k likes!",
    },
    {
        date: "Apr 2025",
        content: "Self-Reference has been accepted to Neural Networks!",
    },
    {
        date: "Feb 2025",
        content: "DiveR-CT was selected as an Oral Presentation at AAAI 2025, see you in Philly!",
    },
    {
        date: "Dec 2024",
        content: "One new paper accepted to AAAI 2025!",
    },
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
        id: 8,
        name: "Are My Optimized Prompts Compromised? Exploring Vulnerabilities of LLM-based Optimizers",
        journal: "EACL 2026, 🏆Oral",
        date: "Jan 2026",
        authors: "Andrew Zhao, Reshmi Ghosh, Vitor Carvalho, Emily Lawton, Keegan Hines, Gao Huang, Jack W. Stokes",
        link: "https://arxiv.org/abs/2510.14381",
        image: prompt,
    },
    {
        id: 7,
        name: "Towards expert-level autonomous carotid ultrasonography with large-scale learning-based robotic system",
        journal: "Nature Communications",
        date: "August 2025",
        authors: "Haojun Jiang*, Andrew Zhao*, Qian Yang*, Xiangjie Yan, Teng Wang, Yulin Wang, Ning Jia, Jiangshan Wang, Guokun Wu, Yang Yue, Shaqi Luo, Huanqian Wang, Ling Ren, Siming Chen, Pan Liu, Guocai Yao, Wenming Yang, Shiji Song, Xiang Li, Kunlun He, Gao Huang",
        link: "https://www.nature.com/articles/s41467-025-62865-w",
        image: carotid,
        code: "https://github.com/LeapLabTHU/ultrabot",
    },
    {
        id: 6,
        name: "Absolute Zero: Reinforced Self-play Reasoning with Zero Data",
        journal: "NeurIPS 2025, 🏆Spotlight",
        date: "May 2025",
        authors: "Andrew Zhao, Yiran Wu, Yang Yue, Tong Wu, Quentin Xu, Yang Yue, Matthieu Lin, Shenzhi Wang, Qingyun Wu, Zilong Zheng, Gao Huang",
        link: "https://www.arxiv.org/abs/2505.03335",
        image: azr,
        projectPage: "https://andrewzh112.github.io/absolute-zero-reasoner",
        code: "https://github.com/LeapLabTHU/absolute-zero-reasoner",
        models: "https://huggingface.co/collections/andrewzh/absolute-zero-reasoner-68139b2bca82afb00bc69e5b",
        logs: "https://wandb.ai/andrewzhao112/AbsoluteZeroReasoner",
        xLink: "https://x.com/_AndrewZhao/status/1919920459748909288?s=20",
        wiredLink: "https://www.wired.com/story/ai-models-keep-learning-after-training-research/",
    },
    {
        id: 5,
        name: "Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?",
        journal: "NeurIPS 2025, 🏆Best Paper Runner-up/Oral",
        date: "May 2025",
        authors: "Yang Yue, Zhiqi Chen, Rui Lu, Andrew Zhao, Zhaokai Wang, Yang Yue, Shiji Song, Gao Huang",
        link: "https://arxiv.org/abs/2504.13837",
        image: limits,
        projectPage: "https://limit-of-rlvr.github.io/",
        code: "https://github.com/LeapLabTHU/limit-of-RLVR",
    },
    {
        id: 4,
        name: "DiveR-CT: Diversity-enhanced Red Teaming with Relaxing Constraints",
        journal: "AAAI 2025, 🏆Oral",
        date: "May 2024",
        authors: "Andrew Zhao, Quentin Xu, Matthieu Lin, Shenzhi Wang, Yong-jin Liu, Zilong Zheng, Gao Huang",
        link: "https://arxiv.org/abs/2405.19026",
        image: diverct,
        projectPage: "https://andrewzh112.github.io/diver-ct",
        code: "https://github.com/LeapLabTHU/diver-ct",
    },
    {
        id: 3,
        name: "ExpeL: LLM Agents are Experiential Learners",
        journal: "AAAI 2024, 🏆Oral",
        date: "Aug 2023",
        authors: "Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, Gao Huang",
        link: "https://arxiv.org/abs/2308.10144",
        image: expel,
        code: "https://github.com/LeapLabTHU/ExpeL",
        projectPage: "https://andrewzh112.github.io/expel"
    },
    {
        id: 2,
        name: "Self-Referencing Agents for Unsupervised Reinforcement Learning",
        journal: "Neural Networks",
        date: "Apr 2025",
        authors: "Andrew Zhao*, Erle Zhu*, Rui Lu, Matthieu Lin, Yong-Jin Liu, Gao Huang",
        link: "https://www.sciencedirect.com/science/article/pii/S0893608025003272",
        image: sr,
    },
    {
        id: 1,
        name: "A Mixture Of Surprises for Unsupervised Reinforcement Learning",
        journal: "NeurIPS 2022",
        date: "Oct 2022",
        authors: "Andrew Zhao*, Matthieu Lin*, Yangguang Li, Yong-jin Liu, Gao Huang",
        link: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/a7667ee5d545a43d2f0fda98863c260e-Abstract-Conference.html",
        image: moss, // Optional
        code: "https://github.com/LeapLabTHU/MOSS", // Optional
        // projectPage: "https://example.com/projects/project1" // Optional
    },
]

export const PUBLICATIONS = [
    {
        id: 16,
        name: "Are My Optimized Prompts Compromised? Exploring Vulnerabilities of LLM-based Optimizers",
        journal: "Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (EACL 2026 Main), 🏆Oral",
        date: "Jan 2026",
        authors: "Andrew Zhao, Reshmi Ghosh, Vitor Carvalho, Emily Lawton, Keegan Hines, Gao Huang, Jack W. Stokes",
        link: "https://arxiv.org/abs/2510.14381",
        image: prompt,
    },
    {
        id: 15,
        name: "Towards expert-level autonomous carotid ultrasonography with large-scale learning-based robotic system",
        journal: "Nature Communications",
        date: "August 2025",
        authors: "Haojun Jiang*, Andrew Zhao*, Qian Yang*, Xiangjie Yan, Teng Wang, Yulin Wang, Ning Jia, Jiangshan Wang, Guokun Wu, Yang Yue, Shaqi Luo, Huanqian Wang, Ling Ren, Siming Chen, Pan Liu, Guocai Yao, Wenming Yang, Shiji Song, Xiang Li, Kunlun He, Gao Huang",
        link: "https://www.nature.com/articles/s41467-025-62865-w",
        image: carotid,
        code: "https://github.com/LeapLabTHU/ultrabot",
    },
    {
        id: 13,
        name: "Absolute Zero: Reinforced Self-play Reasoning with Zero Data",
        journal: "39th Conference on Neural Information Processing Systems (NeurIPS 2025), 🏆Spotlight",
        date: "May 2025",
        authors: "Andrew Zhao, Yiran Wu, Yang Yue, Tong Wu, Quentin Xu, Yang Yue, Matthieu Lin, Shenzhi Wang, Qingyun Wu, Zilong Zheng, Gao Huang",
        link: "https://arxiv.org/abs/2505.03335",
        image: azr,
        projectPage: "https://andrewzh112.github.io/absolute-zero-reasoner",
        code: "https://github.com/LeapLabTHU/absolute-zero-reasoner",
        models: "https://huggingface.co/collections/andrewzh/absolute-zero-reasoner-68139b2bca82afb00bc69e5b",
        logs: "https://wandb.ai/andrewzhao112/AbsoluteZeroReasoner",
    },
    {
        id: 14,
        name: "Beyond the 80/20 Rule: High-Entropy Minority Tokens Drive Effective Reinforcement Learning for LLM Reasoning",
        journal: "39th Conference on Neural Information Processing Systems (NeurIPS 2025)",
        date: "June 2025",
        authors: "Shenzhi Wang, Le Yu, Chang Gao, Chujie Zheng, Shixuan Liu, Rui Lu, Kai Dang, Xionghui Chen, Jianxin Yang, Zhenru Zhang, Yuqiong Liu, An Yang, Andrew Zhao, Yang Yue, Shiji Song, Bowen Yu, Gao Huang, Junyang Lin",
        link: "https://arxiv.org/abs/2506.01939",
        image: forking
    },
    {
        id: 12,
        name: "Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?",
        journal: "39th Conference on Neural Information Processing Systems (NeurIPS 2025), 🏆Best Paper Runner-up/Oral",
        date: "Sep 2025",
        authors: "Yang Yue, Zhiqi Chen, Rui Lu, Andrew Zhao, Zhaokai Wang, Yang Yue, Shiji Song, Gao Huang",
        link: "https://arxiv.org/abs/2504.13837",
        image: limits
    },
    {
        id: 11,
        name: "LLM-based Optimization of Compound AI Systems: A Survey",
        journal: "arXiv Preprint",
        date: "Oct 2024",
        authors: "Matthieu Lin, Jenny Sheng, Andrew Zhao, Shenzhi Wang, Yang Yue, Yiran Wu, Huan Liu, Jun Liu, Gao Huang, Yong-Jin Liu",
        link: "https://arxiv.org/abs/2410.16392",
        image: optim
    },
    {
        id: 10,
        name: "Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing",
        journal: "NAACL 2025",
        date: "July 2024",
        authors: "Huanqian Wang, Yang Yue, Rui Lu, Jingxin Shi, Andrew Zhao, Shenzhi Wang, Shiji Song, Gao Huang",
        link: "https://arxiv.org/abs/2407.08770",
        image: surgery
    },
    {
        id: 9,
        name: "DiveR-CT: Diversity-enhanced Red Teaming with Relaxing Constraints",
        journal: "Thirty-Ninth AAAI Conference on Artificial Intelligence (AAAI 2025), 🏆Oral",
        date: "May 2024",
        authors: "Andrew Zhao, Quentin Xu, Matthieu Lin, Shenzhi Wang, Yong-jin Liu, Zilong Zheng, Gao Huang",
        link: "https://arxiv.org/abs/2405.19026",
        image: diverct,
        projectPage: "https://andrewzh112.github.io/diver-ct",
        code: "https://github.com/LeapLabTHU/diver-ct"
    },
    {
        id: 8,
        name: "Exploring Temporal Feature Correlation for Efficient and Stable Video Semantic Segmentation",
        journal: "Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI 2024)",
        date: "Oct 2023",
        authors: "Matthieu Lin, Jenny Sheng, Yubin Hu, Yangguang Li, Lu Qi, Andrew Zhao, Gao Huang, Yong-Jin Liu",
        link: "https://ojs.aaai.org/index.php/AAAI/article/view/28132",
        image: seg,
    },
    {
        id: 7,
        name: "Exploring Temporal Feature Correlation for Efficient and Stable Video Semantic Segmentation",
        journal: "CVPR 2024 Human Motion Generation (HuMoGen) Workshop",
        date: "April 2024",
        authors: "Jenny Sheng, Matthieu Lin, Andrew Zhao, Kevin Pruvost, Yu-Hui Wen, Yangguang Li, Gao Huang, Yong-Jin Liu",
        link: "https://arxiv.org/abs/2404.09445",
        image: motion,
    },
    {
        id: 6,
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
        id: 5,
        name: "ExpeL: LLM Agents are Experiential Learners",
        journal: "Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI 2024), 🏆Oral",
        date: "Aug 2023",
        authors: "Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, Gao Huang",
        link: "https://arxiv.org/abs/2308.10144",
        image: expel,
        code: "https://github.com/LeapLabTHU/ExpeL",
        projectPage: "https://andrewzh112.github.io/expel"
    },
    {
        id: 4,
        name: "Self-Referencing Agents for Unsupervised Reinforcement Learning",
        journal: "Neural Networks",
        date: "Apr 2025",
        authors: "Andrew Zhao*, Erle Zhu*, Rui Lu, Matthieu Lin, Yong-Jin Liu, Gao Huang",
        link: "https://www.sciencedirect.com/science/article/pii/S0893608025003272",
        image: sr,
    },
    {
        id: 3,
        name: "A Mixture Of Surprises for Unsupervised Reinforcement Learning",
        journal: "36th Conference on Neural Information Processing Systems (NeurIPS 2022)",
        date: "Oct 2022",
        authors: "Andrew Zhao*, Matthieu Lin*, Yangguang Li, Yong-jin Liu, Gao Huang",
        link: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/a7667ee5d545a43d2f0fda98863c260e-Abstract-Conference.html",
        image: moss, // Optional
        code: "https://github.com/LeapLabTHU/MOSS", // Optional
        // projectPage: "https://example.com/projects/project1" // Optional
    },
    {
        id: 2,
        name: "Provable General Function Class Representation Learning in Multitask Bandits and MDP",
        journal: "36th Conference on Neural Information Processing Systems (NeurIPS 2022), 🏆Spotlight",
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
        authors: "Haoqi Yuan*, Ruihai Wu*, Andrew Zhao*, Haipeng Zhang, Zihan Ding, Hao Dong",
        link: "https://ieeexplore.ieee.org/abstract/document/9636362/",
        image: dmotion, // Optional
        // code: "https://github.com/username/project1", // Optional
        // projectPage: "https://example.com/projects/project1" // Optional
    },
];

export const ACADEMIC_TALKS = [
    {
        title: "Absolute Zero",
        date: "May-Sep 2025",
        venue: [
            { name: "Microsoft" },
            { name: "NVIDIA" },
            { name: "Snowflake" },
            { name: "Amazon AGI Labs", link: "https://labs.amazon.science/" },
            { name: "ByteDance" },
            { name: "HuggingFace" },
            { name: "and more..." },
        ],
        description: "Invited Talks",
    },
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

export const ACADEMIC_SERVICES = [
    {
        title: "Top Reviewer in NeurIPS 2025",
    },
    {
        title: "Academic Reviewer",
        detail: "NeurIPS 2023/2024/2025; ICLR 2024/2025/2026; AAAI 2025/2026; ICML 2024/2025; AISTATS 2025",
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
