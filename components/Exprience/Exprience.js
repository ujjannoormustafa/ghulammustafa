import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle'

const Expriences = [
    {
        date: 'Sep 2025 - Present',
        logo: 'images/work/5.png',
        position: 'Executive Software Developer',
        companyName: 'Rehan Foundation, Karachi',
        workFrom: '',
        // description: 'Led a frontend development team in building a comprehensive school management system with five key dashboards.',
        link: '#'
    },
    {
        date: 'Sep 2024 - Aug 2025',
        logo: 'images/work/1.png',
        position: 'Full Stack Developer',
        companyName: 'Rehan Foundation, Karachi',
        workFrom: '',
        // description: 'Led a frontend development team in building a comprehensive school management system with five key dashboards.',
        link: '#'
    },
    {
        date: 'May 2023 - Oct 2023',
        logo: 'images/work/2.png',
        position: 'Front-End Developer',
        companyName: 'Nova Sync, Remote ',
        workFrom: '',
        // description: 'Integrated REST APIs for seamless frontend-backend communication and developed responsive dashboards.',
        link: '#'
    },
    {
        date: 'April 2023 - May 2023',
        logo: 'images/work/3.png',
        position: 'Intern Front-End Developer',
        companyName: 'Fastech System, Sukkur',
        workFrom: '',
        // description: 'Developed dynamic user interfaces with React.js during the internship and ensured responsive design.',
        link: '#'
    }
]


const ExprienceSec = (props) => {
    return (
        <div className="wpo-work-area section-padding">
            <div className="container">
                <SectionTitle Title={'My Work Experience'} />
                <div className="wpo-work-wrap mt-5">
                    {Expriences.map((exprience, exp) => (
                        <div className="wpo-work-item" key={exp}>
                            <ul>
                                <li className="date" >{exprience.date}</li>
                                <li className="logo">
                                    <img 
                                        src={exprience.logo} 
                                        alt="" 
                                        style={{ borderRadius: '50%', objectFit: 'cover' }} 
                                    />
                                </li>
                                <li className="position">
                                    {exprience.position} 
                                    <span>{exprience.companyName} <span>{exprience.workFrom}</span></span>
                                    <p className="work-description">{exprience.description}</p>
                                </li>
                                <li className="link">
                                    <Link href={exprience.link}>
                                        View Project
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="red">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        {/* <circle cx="750" cy="750" r="200"  /> */}
                        <circle cx="750" cy="750" r="200"  />

                    </g>
                    <defs>
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default ExprienceSec;