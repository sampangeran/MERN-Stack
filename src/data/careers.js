import adimas from "../assets/Careers/testimonials/adimas.webp"
import renci from "../assets/Careers/testimonials/renci.webp"
import wiwit from "../assets/Careers/testimonials/wiwit.webp"
import joas from "../assets/Careers/testimonials/joas.webp"
import feby from "../assets/Careers/testimonials/feby.webp"
import * as Icon from 'react-bootstrap-icons';
import Image from 'next/image'


export let job = [
    {
        id: 1,
        title: 'Finance',
        icon: <Icon.CurrencyDollar />,
        vacancy: 0,
        work: 'Remote (Online), Indonesia',
        type: 'Internship'
    },
    {
        id: 2,
        title: 'General-Affairs',
        icon: <Icon.PersonWorkspace />,
        vacancy: 0,
        work: 'Remote (Online), Indonesia',
        type: 'Internship'
    },
    {
        id: 3,
        title: 'Curriculum-and-Education',
        icon: <Icon.BookHalf />,
        vacancy: 0,
        work: 'Remote (Online), Indonesia',
        type: 'Internship'
    },
    {
        id: 4,
        title: 'Marketing-and-Sales',
        icon: <Icon.BarChartLine />,
        vacancy: 10,
        work: 'Remote (Online), Indonesia',
        type: 'Internship',
        jobList: [
            {
                id: 1,
                subJob: 'Content Writer (SEO)',
                link: 'content-writer-seo',
                kitaLulus: 'content-writer-seo',
                desc: [
                    {
                        id: 1,
                        text: 'Writing and editing creative content that fits company’s niche'
                    },
                    {
                        id:2,
                        text:'Conducting research to formulate ideas or support the content writing'
                    },
                    {
                        id:3,
                        text:'Discovering about the target audience for copy'
                    },
                    {
                        id:4,
                        text: 'Assisting in other aspects of the creative or research processes to create accurate content for the audiences'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in Engineering, business management, marketing, public communication or relevant major'
                    },
                    {
                        id:2,
                        text:'Good time management and adapt to all challenging situation'
                    },
                    {
                        id:3,
                        text:'Eager to learn new things and understand to marketing tools'
                    },
                    {
                        id:4,
                        text: 'Having experience with develop content strategy is an advantage'
                    },
                    {
                        id:5,
                        text: 'Creative thinking, problem solving, and research skills is necessary'
                    },
                    {
                        id:6,
                        text:'Detail oriented and fun people'
                    },
                    {
                        id: 7,
                        text:'Be able to work independently, in team or cross functional teams'
                    },
                    {
                        id:8,
                        text:'Having knowledge in SEO/SEM is an advantage'
                    },
                    {
                        id: 9,
                        text: 'Great communication skills, both written and verbal'
                    }
                ]
            },
            {
                id: 2,
                subJob: 'Content Writer (Social Media)',
                link: 'content-writer-socialmedia',
                kitaLulus: 'copywritercontent-writer',
                desc: [
                    {
                        id: 1,
                        text: 'Writing and editing creative content that fits company’s niche'
                    },
                    {
                        id:2,
                        text:'Conducting research to formulate ideas or support the content writing'
                    },
                    {
                        id:3,
                        text:'Discovering about the target audience for copy'
                    },
                    {
                        id:4,
                        text: 'Assisting in other aspects of the creative or research processes to create accurate content for the audiences'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in Engineering, business management, marketing, public communication or relevant major'
                    },
                    {
                        id:2,
                        text:'Good time management and adapt to all challenging situation'
                    },
                    {
                        id:3,
                        text:'Eager to learn new things and understand to marketing tools'
                    },
                    {
                        id:4,
                        text: 'Having experience with develop content strategy is an advantage'
                    },
                    {
                        id:5,
                        text: 'Creative thinking, problem solving, and research skills is necessary'
                    },
                    {
                        id:6,
                        text:'Detail oriented and fun people'
                    },
                    {
                        id: 7,
                        text:'Be able to work independently, in team or cross functional teams'
                    },
                    {
                        id:8,
                        text:'Having knowledge in SEO/SEM is an advantage'
                    },
                    {
                        id: 9,
                        text: 'Great communication skills, both written and verbal'
                    }
                ]
            },
            {
                id: 3,
                subJob: 'Copy Writer',
                link: 'Copy-Writer',
                kitaLulus:'copy-writer',
                desc: [
                    {
                        id: 1,
                        text: 'Writing clear and error-free content for a website that reflects the TORCHE’s value'
                    },
                    {
                        id:2,
                        text:'Proposing copy concepts in an engaging way for clients and carrying out projects once they are approved'
                    },
                    {
                        id:3,
                        text:'Collaborating with other division to brainstorm and develop variety content materials'
                    },
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in Engineering, business management, marketing, public communication or relevant major'
                    },
                    {
                        id:2,
                        text:'Good time management and adapt to all challenging situation'
                    },
                    {
                        id:3,
                        text:'Understand with SEO and copywriter strategy'
                    },
                    {
                        id:4,
                        text: 'Creative, agile, critical thinking, and fun'
                    },
                    {
                        id:5,
                        text: 'Strong at verbal and written communication'
                    },
                    {
                        id:6,
                        text:'Strong at writing skills (can explain in simple ways and attracting readers)'
                    },
                    {
                        id: 7,
                        text:'Be able to work independently, in team or cross functional teams'
                    },
                ]
            },
            {
                id: 4,
                subJob: 'Content Creator',
                link: 'Content-Creator',
                kitaLulus: 'content-creator',
                desc: [
                    {
                        id: 1,
                        text: 'Follow industry related news and trends to generate content ideas around trending topics'
                    },
                    {
                        id:2,
                        text:'Preparing creative brief and moodboard for creative content and social media campaign'
                    },
                    {
                        id:3,
                        text:'Identifying gap between our content and competitors and able to generate insights how to improve ours'
                    },
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in Engineering, business management, marketing, public communication or relevant major'
                    },
                    {
                        id:2,
                        text:'Good time management and adapt to all challenging situation'
                    },
                    {
                        id:3,
                        text:'Eager to learn new things and having experience with video editing software (phone and/or PC)'
                    },
                    {
                        id:4,
                        text: 'Have experience with developing content strategy is an advantage'
                    },
                    {
                        id:5,
                        text: 'Creative thinking, problem solving, and research skills is necessary'
                    },
                    {
                        id:6,
                        text:'Detail oriented and fun people'
                    },
                    {
                        id: 7,
                        text:'Be able to work independently, in team or cross functional teams'
                    },
                    {
                        id: 8,
                        text: 'Great communication skills, both written and verbal'
                    }
                ]
            },
            {
                id: 5,
                subJob: 'Account Executive',
                link: 'Account-Executive',
                kitaLulus:'account-executive',
                desc: [
                    {
                        id: 1,
                        text: 'Develop sales materials (e.g proposals, slides, analyses)'
                    },
                    {
                        id:2,
                        text:'Help plan projects from start to finish'
                    },
                    {
                        id:3,
                        text:'Monitor project progress, timelines and expenses'
                    },
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in Engineering, business management, marketing, public communication or relevant major'
                    },
                    {
                        id:2,
                        text:'Strong in research and critical thinking'
                    },
                    {
                        id:3,
                        text:'Outstanding organizational skills'
                    },
                    {
                        id:4,
                        text: 'Ability to work under pressure'
                    },
                    {
                        id:5,
                        text: 'Experience with project management is an advantage'
                    },
                    {
                        id:6,
                        text:'Having experience with advertising and social media marketing is a plus'
                    },
                    {
                        id: 7,
                        text:'Creative, detail, and goals oriented'
                    },
                    {
                        id: 8,
                        text: 'Strong at verbal and written communication'
                    },
                    {
                        id: 9,
                        text: 'Be able to work independently, or collaborate with teams or cross functional teams'
                    },
                    {
                        id: 10,
                        text: 'Strong business acumen and understand to general business aspect is a plus'
                    },
                ]
            },
            {
                id: 6,
                subJob: 'Graphic Designer',
                link: 'Graphic-Designer',
                kitaLulus: 'graphic-design',
                desc: [
                    {
                        id: 1,
                        text: 'Design and conceptualize the visual aspect of Torche’s social media campaign'
                    },
                    {
                        id:2,
                        text:'Create visual assets for everyday social media content'
                    },
                    {
                        id:3,
                        text:'Testing graphics across various media'
                    },
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Any major are welcome to apply (Undegraduate in Visual Communication Design or related filed is preferred)'
                    },
                    {
                        id:2,
                        text:'A strong portfolio of illustration or other graphics'
                    },
                    {
                        id:3,
                        text:'Having experience with design software and technologies (Canva, Figma, Adobe Illustrator, Adobe Photoshop, Dreamweaver, InDesign)'
                    },
                    {
                        id:4,
                        text: 'Creative, agile, critical thinking and fun'
                    },
                    {
                        id:5,
                        text: 'Strong at verbal and written communication'
                    },
                    {
                        id:6,
                        text:'Detail oriented and keen eye for aesthetic is necessary'
                    },
                    {
                        id: 7,
                        text:'Having experience with adobe premiere, after effects, Adobe XD, or other design skills is an advantage'
                    },
                    {
                        id: 8,
                        text: 'Strong at verbal and written communication'
                    },
                    {
                        id: 9,
                        text: 'Be able to work independently, or collaborate with teams or cross functional teams'
                    },
                ]
            },
            {
                id: 7,
                subJob: 'Sales Executive',
                link: 'Sales-Executive',
                kitaLulus: 'sales-executive',
                desc: [
                    {
                        id: 1,
                        text: 'Actively seeking out new sales opportunities'
                    },
                    {
                        id:2,
                        text:'Setting up meetings with potential clients'
                    },
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in Engineering, business management, marketing, public communication or relevant major'
                    },
                    {
                        id:2,
                        text:'Understanding with marketing and negotiating techniques'
                    },
                    {
                        id:3,
                        text:'Self-motivated, detail and goals oriented'
                    },
                    {
                        id:4,
                        text: 'Proficiency in English'
                    },
                    {
                        id:5,
                        text: 'Hands-on experience with CRM software is an advantage'
                    },
                    {
                        id:6,
                        text:'Critical, creative and problem solving'
                    },
                    {
                        id: 7,
                        text:'Strong communication skills, both verbal and written'
                    },
                ]
            },
            {
                id: 8,
                subJob: 'Community Developer',
                link: 'Community-Developer',
                kitaLulus:'community-developer',
                desc: [
                    {
                        id: 1,
                        text: 'Developing community platform for Torche’s Student'
                    },
                    {
                        id:2,
                        text:'Maintaining relationship and communication with external parties'
                    },
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in Engineering, business management, marketing, public communication or relevant major'
                    },
                    {
                        id:2,
                        text:'Eager to learn new things, be able to work in team, and responsible'
                    },
                    {
                        id:3,
                        text:'Understand the principles of community building'
                    },
                    {
                        id:4,
                        text: 'Great communication skills, both verbal and written'
                    },
                    {
                        id:5,
                        text: 'Familiar with Discord will be an advantage'
                    },
                    {
                        id:6,
                        text:'Having blog writing experience is an advantage'
                    },
                ]
            },
            {
                id: 9,
                subJob: 'Digital Marketing Executive',
                link: 'Digital-Marketing-Executive',
                kitaLulus:'digital-marketing-executive',
                desc: [
                    {
                        id: 1,
                        text: 'Follow industry related news and trends to generate content ideas'
                    },
                    {
                        id:2,
                        text:'Preparing creative brief and mood'
                    },
                    {
                        id:3,
                        text:'Board Execute marketing strategies'
                    },
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in business management, marketing, or relevant major'
                    },
                    {
                        id:2,
                        text:'Proficient with Social Media features (TikTok, Instagram, Facebook, Linkedin, etc)'
                    },
                    {
                        id:3,
                        text:'Ability to analyze and predict audience preferences through marketing tools'
                    },
                    {
                        id:4,
                        text: 'Able to generate creative contents marketing that fits current industry and market trends'
                    },
                    {
                        id:5,
                        text: 'Able to do graphic design and/or video editing is an advantage'
                    },
                    {
                        id:6,
                        text:'Understand in SEO/SEM is necessary'
                    },
                    {
                        id: 7,
                        text:'Eager to learn new things and understand to marketing tools'
                    },
                    {
                        id: 8,
                        text: 'Be able to work independently, in team or cross functional teams'
                    },
                    {
                        id: 9,
                        text: 'Great communication skills both verbal and written'
                    },
                ]
            },
            {
                id: 10,
                subJob: 'Digital Marketing Researcher',
                link:'Digital-Marketing-Researcher',
                kitaLulus: 'digital-marketing-researcher',
                desc: [
                    {
                        id: 1,
                        text: 'Propose social media campaign'
                    },
                    {
                        id:2,
                        text: 'Manage campaign analytics and metrics'
                    },
                    {
                        id:3,
                        text:'Generate insights for Torche’s campaign'
                    },
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in business management, marketing, or relevant major'
                    },
                    {
                        id:2,
                        text:'Attention to detail, critical and creative thinking, problem solving, good analytical skills and fun'
                    },
                    {
                        id:3,
                        text:'Having experience with marketing tools is an advantage'
                    },
                    {
                        id:4,
                        text: 'Having knowledge and experience with market research and strategy and various ad campaigns.'
                    },
                    {
                        id:5,
                        text:'Understand in SEO/SEM is necessary'
                    },
                    {
                        id: 6,
                        text:'Eager to learn new things and understand to marketing tools'
                    },
                    {
                        id: 7,
                        text: 'Be able to work independently, in team or cross functional teams'
                    },
                    {
                        id: 8,
                        text: 'Great communication skills both verbal and written'
                    },
                ]
            },
        ],
    },
    {
        id: 5,
        title: 'CEO-Office',
        icon: <Icon.PersonSquare />,
        vacancy: 2,
        work: 'Remote (Online), Indonesia',
        type: 'Internship',
        jobList: [
            {
                id: 1,
                subJob: 'Business Development',
                link: 'Business-Development',
                kitaLulus: 'business-development',
                desc: [
                    {
                        id: 1,
                        text: 'Develop a growth strategy focused both on financial gain and customer satisfaction'
                    },
                    {
                        id:2,
                        text: 'Conduct research to identify new markets and customer needs'
                    },
                    {
                        id:3,
                        text:'Arrange business meetings with prospective clients'
                    },
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in business management, marketing, or relevant major'
                    },
                    {
                        id:2,
                        text:'Willing to get connected with people in professional environment'
                    },
                    {
                        id:3,
                        text:'Strong business acumen'
                    },
                    {
                        id:4,
                        text: 'Broad market knowledge, strong in analytical and creative thinking'
                    },
                    {
                        id:5,
                        text:'Broad market knowledge, strong in analytical and creative thinking'
                    },
                    {
                        id: 6,
                        text:'Strong in communication (verbal and written) and negotiation skills'
                    },
                    {
                        id: 7,
                        text: 'Detail and goals oriented'
                    },
                    {
                        id: 8,
                        text: 'Basic knowledge in tech sales is preferred'
                    },
                    {
                        id: 9,
                        text: 'Be able to work independently, in team or cross functional teams.'
                    }
                ]
            },
            {
                id: 2,
                subJob: 'Digital Marketing Strategist',
                link: 'Digital-Marketing-Strategist',
                kitaLulus: 'digital-marketing-strategist',
                desc: [
                    {
                        id: 1,
                        text: 'Set digital marketing strategies'
                    },
                    {
                        id:2,
                        text: 'Research products, services and current strategies to identify new opportunities'
                    },
                    {
                        id:3,
                        text:'Monitor SEO/SEM, marketing and sales performance metrics to forecast trends'
                    },
                    {
                        id:4,
                        text:'Helping implementation of marketing strategies for digital media'
                    },
                    {
                        id:5,
                        text:'Build strong clients relationships through social media interaction'
                    },
                    {
                        id:6,
                        text:'Keep up to date with audience’s preference and proactively suggest new campaign'
                    },
                    {
                        id:7,
                        text:'Establish best practice in digital marketing'
                    },
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in business management, marketing, or relevant major'
                    },
                    {
                        id:2,
                        text:'Solid knowledge of social media and web analytics'
                    },
                    {
                        id:3,
                        text:'Strong analytical and project management skills'
                    },
                    {
                        id:4,
                        text: 'Familiar with marketing tools (Facebook ads manager, Google GTM, etc)'
                    },
                    {
                        id:5,
                        text:'Able to generate creative contents'
                    },
                    {
                        id: 6,
                        text:'Digital marketing bootcamp alumnae is preferred'
                    },
                    {
                        id: 7,
                        text: 'Understand with SEO/SEM is a necessary'
                    },
                    {
                        id: 8,
                        text: 'Eager to learn new things'
                    },
                    {
                        id: 9,
                        text: 'Be able to work independently, in team or cross functional teams.'
                    },
                    {
                        id:10,
                        text: 'Great communication skills (English is a plus)'
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Technology-and-Engineering',
        icon: <Icon.Laptop />,
        vacancy: 9,
        work: 'Remote (Online), Indonesia',
        type: 'Internship',
        jobList: [
            {
                id: 1,
                subJob: 'Cybersecurity',
                link:'Cybersecurity',
                kitaLulus: 'cybersecurity',
                desc: [
                    {
                        id: 1,
                        text: 'Developing security system for TORCHE’s apps and softwares'
                    },
                    {
                        id:2,
                        text: 'Developing information and data security management for TORCHE’s Internal'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Any major are welcome to apply (Undergraduate in Computer Science and Information Technology is preferred)'
                    },
                    {
                        id:2,
                        text:'Knowledge in IT security system and hierarchy'
                    },
                    {
                        id:3,
                        text:'Having knowledge and experience with programming languages is an advantage (Java, JavaScript, Python, SQL, PHP, PowerShell, etc)'
                    },
                    {
                        id:4,
                        text: 'Proven experience and/or knowledge in cybersecurity'
                    },
                    {
                        id:5,
                        text:'Having knowledge in ISO 27001, ISO 27033, ISO 27034, and/or NIST SP 800-30 is a plus'
                    },
                    {
                        id: 6,
                        text:'Attention to detail, creative thinking and problem solving is a must'
                    },
                    {
                        id: 7,
                        text: 'Great communication both verbal and written.'
                    },
                    {
                        id: 8,
                        text: 'Ability to work both independently or collaborate on team projects'
                    },
                ]
            },
            {
                id: 2,
                subJob: 'Python Engineer',
                link: 'Python-Engineer',
                kitaLulus: 'python-engineer',
                desc: [
                    {
                        id: 1,
                        text: 'Developing computation and calculator with Python using Matplotlib and Pandas'
                    },
                    {
                        id:2,
                        text: 'Developing automation bot using Python and APIs'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Any major are welcome to apply (Undergraduate in Computer Science and Information Technology is preferred)'
                    },
                    {
                        id:2,
                        text:'Good knowledge in Python'
                    },
                    {
                        id:3,
                        text:'Familiar with Matplotlib and Pandas for python packages'
                    },
                    {
                        id:4,
                        text: 'Having knowledge in Chemical Engineering is an advantage'
                    },
                    {
                        id:5,
                        text:'Having basic knowledge in API is an advantage'
                    },
                    {
                        id: 6,
                        text:'Attention to detail, creative thinking and problem solving is a must'
                    },
                    {
                        id: 7,
                        text: 'Great communication both verbal and written.'
                    },
                    {
                        id: 8,
                        text: 'Ability to work both independently or collaborate on team projects'
                    },
                ]
            },
            {
                id: 3,
                subJob: 'Front-end Engineer',
                link:'Front-end-Engineer',
                kitaLulus: 'frontend-engineer',
                desc: [
                    {
                        id: 1,
                        text: 'Developing TORCHE’s website content and flow.'
                    },
                    {
                        id:2,
                        text: 'Develop TORCHE’s Learning Management System'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Any major are welcome to apply (Undergraduate in Computer Science and Information Technology is preferred)'
                    },
                    {
                        id:2,
                        text:'Strong Front-end web development experience is preferred'
                    },
                    {
                        id:3,
                        text:'Familiar with React.js, JavaScript, HTML, CSS'
                    },
                    {
                        id:4,
                        text: 'Proven with portfolio in developing static (or dynamic) websites'
                    },
                    {
                        id:5,
                        text:'Knowledge in MERN Stack is preferable'
                    },
                    {
                        id: 6,
                        text:'Ability to work both independently and collaborate on team projects'
                    },
                    {
                        id: 7,
                        text: 'Strong problem-solving and analytical skills'
                    },
                ]
            },
            {
                id: 4,
                subJob: 'Back-end Engineer',
                link: 'Back-end-Engineer',
                kitaLulus: 'backend-engineer',
                desc: [
                    {
                        id: 1,
                        text: 'Developing and maintaining server-side of TORCHE’s web application on Google Cloud Platform'
                    },
                    {
                        id:2,
                        text: 'Building TORCHE’s web apps on cloud platforms'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Any major are welcome to apply (Undergraduate in Computer Science and Information Technology is preferred)'
                    },
                    {
                        id:2,
                        text: 'Knowledge in MERN Stack is preferable'
                    },
                    {
                        id:3,
                        text:'Experience and having knowledge with Google Cloud platform (GCP) and Amazon Web Services (AWS) is an advantage'
                    },
                    {
                        id:4,
                        text: 'Having knowledge in MS Azure and Alibaba Cloud is an advantage'
                    },
                    {
                        id:5,
                        text:'Strong understanding of the web development cycle and programming techniques and tools'
                    },
                    {
                        id: 6,
                        text:'Strong problem solving and verbal & written communication skills'
                    },
                ]
            },
            {
                id: 5,
                subJob: 'Cloud Engineer',
                link: 'Cloud-Engineer',
                kitaLulus: 'cloud-engineer',
                desc: [
                    {
                        id: 1,
                        text: 'Developing and maintaining TORCHE’s cloud platform'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate in Computer Engineering and Computer Science is preferred.'
                    },
                    {
                        id:2,
                        text:'Familiar with Google Cloud Platform (GCP)'
                    },
                    {
                        id:3,
                        text:'Having experience with AWS, Alibaba Cloud, and MS Azure are preferred.'
                    },
                    {
                        id:4,
                        text: 'Strong problem solving and verbal & written communication skills'
                    },
                    {
                        id:5,
                        text:'Ability to work both independently or collaborate on team projects.'
                    },
                ]
            },
            {
                id: 6,
                subJob: 'UI Designer',
                link: 'UI-Designer',
                kitaLulus: 'ui-designer',
                desc: [
                    {
                        id: 1,
                        text: 'Conducting research in UI design for TORCHE’s Apps'
                    },
                    {
                        id:2,
                        text: 'Developing UI design for TORCHE’s Apps and softwares'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Any major are welcome to apply.'
                    },
                    {
                        id:2,
                        text:'Having knowledge and experience with UI Design'
                    },
                    {
                        id:3,
                        text:'Highly initiative, good communication, and problem solving'
                    },
                    {
                        id:4,
                        text: 'Creative and detail oriented'
                    },
                    {
                        id:5,
                        text:'Having experience with UI Design Software is an advantage (Figma, Adobe XD, Balsamiq, Marvel, Protopie etc)'
                    },
                    {
                        id: 6,
                        text:'Strong knowledge with basic principle of UI Design is preferred (ex: user persona, typography, colour palettes visualisation and interface functionality)'
                    },
                    {
                        id: 7,
                        text: 'Ability to work both independently or collaborate on team projects'
                    },
                ]
            },
            {
                id: 7,
                subJob: 'UX Designer',
                link: 'UX-Designer',
                kitaLulus: 'ux-designer',
                desc: [
                    {
                        id: 1,
                        text: 'Conducting research in UX design for TORCHE’s Apps'
                    },
                    {
                        id:2,
                        text: 'Developing UX design for TORCHE’s Apps and softwares'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Any major are welcome to apply.'
                    },
                    {
                        id:2,
                        text:'Having knowledge and experience with UX Design'
                    },
                    {
                        id:3,
                        text:'Highly initiative, good communication, and problem solving'
                    },
                    {
                        id:4,
                        text: 'Creative and detail oriented'
                    },
                    {
                        id:5,
                        text:'Having experience with UI Design Software is an advantage (Figma, Adobe XD, Balsamiq, Marvel, Protopie etc)'
                    },
                    {
                        id: 6,
                        text:'Strong knowledge with basic principle of UX Design is preferred (Scale, visual hierarchy, balance, contrast, gestalt, etc)'
                    },
                    {
                        id: 7,
                        text: 'Ability to work both independently or collaborate on team projects'
                    },
                ]
            },
            {
                id: 8,
                subJob: 'IT Support & Analyst',
                link: 'IT-Support-Analyst',
                kitaLulus: 'it-support-analyst',
                desc: [
                    {
                        id: 1,
                        text: 'Analyze and translating customer needs into strategic development for TORCHE’s products'
                    },
                    {
                        id:2,
                        text: 'Conducting research and producing reports in technology products'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Any major are welcome to apply (Undergraduate in Computer Science and Information Technology is preferred)'
                    },
                    {
                        id:2,
                        text:'Knowledge in IT system'
                    },
                    {
                        id:3,
                        text:'Having knowledge with programming languages is an advantage (Java, JavaScript, Python, etc)'
                    },
                    {
                        id:4,
                        text: 'Having knowledge in Google Cloud Platform is an advantage'
                    },
                    {
                        id:5,
                        text:'Great communication both verbal and written'
                    },
                    {
                        id: 6,
                        text:'Attention to detail, problem solving, critical and creative thinking'
                    },
                    {
                        id: 7,
                        text: 'Ability to work both independently or collaborate on team projects'
                    },
                ]
            },
            {
                id: 9,
                subJob: 'Data Engineer',
                link: 'Data-Engineer',
                kitaLulus: 'data-engineer',
                desc: [
                    {
                        id: 1,
                        text: 'Managing databases of TORCHE'
                    },
                    {
                        id:2,
                        text: 'Scrapping, structuring, and cleaning data within Torche’s data'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Any major are welcome to apply (Undergraduate in Computer Science and Information Technology is preferred)'
                    },
                    {
                        id:2,
                        text:'Having experience and knowledge in SQL'
                    },
                    {
                        id:3,
                        text:'Familiar with database management and structuring'
                    },
                    {
                        id:4,
                        text: 'Having knowledge with Google Cloud Platform is an advantage'
                    },
                    {
                        id:5,
                        text:'Attention to detail, problem solving, critical and creative thinking'
                    },
                    {
                        id: 6,
                        text:'Ability to work both independently or collaborate on team project'
                    },
                    {
                        id: 7,
                        text: 'Great communication skills both verbal and written'
                    },
                ]
            },
        ],
    },
    {
        id: 7, 
        title: 'Human-Resource',
        icon: <Icon.PeopleFill />,
        vacancy: 2,
        work: 'Remote (Online), Indonesia',
        type: 'Internship',
        jobList: [
            {
                id: 1,
                subJob: 'Training and Development',
                link: 'Training-and-Development',
                kitaLulus: 'training-and-development',
                desc: [
                    {
                        id: 1,
                        text: 'Auditing and assessing learning and development needs'
                    },
                    {
                        id:2,
                        text: 'Developing, implementing, and monitoring the training plans'
                    },
                    {
                        id:3,
                        text: 'Monitoring performance improvements and collecting feedback'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate Human Resource, Business Administration, Business Management or related field is preferred.'
                    },
                    {
                        id:2,
                        text:'Excellent organizational skills'
                    },
                    {
                        id:3,
                        text:'Solid understanding of business processes, budgeting, and financial management'
                    },
                    {
                        id:4,
                        text: 'Collaborative and trainee-centric mindset'
                    },
                    {
                        id:5,
                        text:'Have experience with training and development is an advantage'
                    },
                    {
                        id: 6,
                        text:'Empathy, critical thinking, creative, and detail oriented is a must'
                    },
                    {
                        id: 7,
                        text: 'Strong communication skills, both verbal and written'
                    },
                    {
                        id:8,
                        text: 'Ability to work, both independently or collaborate on team project'
                    }
                ]
            },
            {
                id: 2,
                subJob: 'Human Resource Development',
                link:'Human-Resource-Development',
                kitaLulus: 'human-resource-development',
                desc: [
                    {
                        id: 1,
                        text: 'Partners with the leadership team to understand and execute the organization’s human resource and talent strategy'
                    },
                    {
                        id:2,
                        text: 'Maintains knowledge of trends, best practices, regulatory changes, and new technologies in human resources, talent management and employment law'
                    },
                    {
                        id:3,
                        text: 'Involving in end-to-end recruitment process'
                    },
                    {
                        id:4,
                        text: 'Developing and maintaining Key Performance Indicator each department'
                    }
                ],
                qual: [
                    {
                        id: 1,
                        text: 'Undergraduate Human Resource, Business Administration, Business Management or related field is preferred.'
                    },
                    {
                        id:2,
                        text:'Excellent organizational skills'
                    },
                    {
                        id:3,
                        text:'Excellent interpersonal, negotiation, and conflict resolution skills'
                    },
                    {
                        id:4,
                        text: 'Strong analytical and problem-solving skills'
                    },
                    {
                        id:5,
                        text:'Organizational experience on Manager level is preferred'
                    },
                    {
                        id: 6,
                        text:'Have experience with human resource is an advantage'
                    },
                    {
                        id: 7,
                        text: 'Strong communication skills, both verbal and written'
                    },
                    {
                        id:8,
                        text: 'Ability to work, both independently or collaborate on team project'
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        title: 'Tutors',
        icon: <Icon.Book />,
        vacancy: 0,
        work: 'Remote (Online), Indonesia',
        type: 'Internship'
    }
]

export const testi = [
    {
        icon: <Icon.Quote />,
        testi: 'Mulai dari CEO dan jajarannya merangkul kami semua tanpa membedakan tanpa menyalahkan kami apabila ada kesalahan yang dilakukan selama proses magang. CEO nya mampu menciptakan hubungan dan komunikasi serta kerja sama tim yang baik dalam mencapai target perusahaan.',
        nama: 'Renci Gusri Solerena',
        jabatan: 'Legal Office Intern',
        photo: <Image src={renci} alt="renci" width={100} height={100} />
    },
    {
        icon: <Icon.Quote />,
        testi: 'Yang aku sukai adalah tim nya, jujur aku belum ada basic sama sekali dalam legal coorporate tapi ka renci dan ka ranti ngembimbing aku, dan ka leon ga marahin ga kalo aku ga paham.',
        nama: 'Wiwit Purwoedi',
        jabatan: 'Legal Office Intern',
        photo: <Image src={wiwit} alt="wiwit" width={100} height={100} />
    },
    {
        icon: <Icon.Quote />,
        testi: 'Beberapa hal yang aku suka dari internship di Torche itu adalah kakak – kakak di Torche sangat ramah dan juga supportive. Sistem internnya juga tidak terlalu memberatkan intern (dari yang aku rasakan di comm dev).',
        nama: 'Adimas Anugerah Rivandy',
        jabatan: 'Marketing and Sales Intern',
        photo: <Image src={adimas} alt="adimas" width={100} height={100} />
    },
    {
        icon: <Icon.Quote />,
        testi: 'Selama melakukan internship selama 3 bulan terdapat beberapa hal yang disukai selama pelaksanaan intern seperti pemberian job desc yang detail, didampingi oleh head dari divisi dengan baik dan responsive apabila terdapat pertanyaan, memiliki workload yang tidak melebihi dari kontrak, dan waktu intern yang tepat waktu.',
        nama: 'Joas Kurnianto',
        jabatan: 'Business Process Development Intern',
        photo: <Image src={joas} alt="joas" width={100} height={100} />
    },
    {
        icon: <Icon.Quote />,
        testi: 'Yang saya sukai dari program internship ini adalah lingkungannya yang sangat friendly, baik dari C-Levelnya maupun Head nya sangat friendly kepada para intern. Selain itu juga cukup open pada internnya. Selain itu sistem dan waktu pengerjaan task nya sangat flexible, sehingga tidak membebankan intern.',
        nama: 'Febby Pangestu Iskandar',
        jabatan: 'Human Resources Intern',
        photo: <Image src={feby} alt="feby" width={100} height={100} />
    }
]