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


export const WORK_EXPERIENCE = [
    {
        title: "Senior Frontend Developer at Tech Innovators",
        date: "January 2022 - Present",
        responsibilities: [
            "Led a team of frontend developers in the redesign of the company's flagship product, resulting in a 30% inc ",
            "Collaborated with UX/UI designers to translate wireframes and mockups into responsive and interactive web a ",
        ]
    },
    {
        title: "Junior Web Developer at Digital Solution",
        date: "June 2020 - December 2021",
        responsibilities: [
            "Developed and maintained client websites, ensuring high-quality standards and timely project delivery.",
            "Implemented SEO best practices, leading to a 25% increase in organic search traffic for key clients.",
            "Worked closely with the design team to create pixel-perfect, cross-browser-compatible web pages.",
            "Conducted code reviews and mentored junior developers in adopting best coding practices.",
        ]
    },
    {
        title: "Frontend Intern at Web Studio",
        date: "May 2019 August 2019",
        responsibilities: [
            "Assisted in the development of a new e-commerce platform, contributing to the implementation of frontend fe ",
            "Conducted performance optimization tasks, resulting in a 15 % improvement in page load times.", 
            "Participated in daily stand - up meetings and collaborated with senior developers to troubleshoot and resolve ",
            "Gained hands-on experience with version control systems, specifically Git, in a collaborative development ",
    ],
}
]