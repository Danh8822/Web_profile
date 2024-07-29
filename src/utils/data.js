import frontendIcon from '../Assets/frontend.png';
import backendIcon from '../Assets/backend.png';
import toolIcon from '../Assets/tool.png';
import skillIcon from '../Assets/skill.png';

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontendIcon,
        skills: [
            { skill: "HTML", percentage: "70%" },
            { skill: "CSS", percentage: "70%" },
            { skill: "JavaScrips", percentage: "70%" },
            { skill: "React.js", percentage: "65%" },
        ],
    },

    {
        title: "Backend",
        icon: backendIcon,
        skills: [
            { skill: "Node.js", percentage: "70%" },
            { skill: "Express.js", percentage: "65%" },
        ],
    },

    {
        title: "Tools",
        icon: toolIcon,
        skills: [
            { skill: "Git & GitHub", percentage: "80%" },
            { skill: "Visual Studio Code", percentage: "65%" },
            { skill: "Webpack", percentage: "60%" },
            { skill: "Responsive Design", percentage: "70%" },
        ],
    },

    {
        title: "Soft Skills",
        icon: skillIcon,
        skills: [
            { skill: "Problem-solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "75%" },
            { skill: "Attention to Detail", percentage: "70%" },
        ],
    },
]


export const PROJECTS = [
    {
        title: "MOBILEMART E-COMMERCE WEBSITE",
        date: "April 2024 - June 2024",
        description: [
            "Customer: Registration, login, view products, order and pay online ,product reviews, manage user information.",
            "Administrator: Manage products, orders, category, slider, userpermissions, and sales statistics."
        ]
    },
    {
        title: "Profile-Web",
        date: "June 2020 - December 2021",
        description: [
            " This website showcases an individual's skills, experience, projects and contact information in a professional and visually appealing manner.",
        ]
    },
];
