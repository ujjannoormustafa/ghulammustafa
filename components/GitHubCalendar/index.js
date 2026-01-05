import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-scroll';

const GitHubContributions = () => {
    // Set your GitHub username
    const username = 'Ghulammustafa806';
    
    // State to store total contributions
    const [totalContributions, setTotalContributions] = useState(0);
    
    // Theme colors that match the dark theme of your website
    const theme = {
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
    };

    // Function to calculate total contributions when data is loaded
    const onDataLoad = (data) => {
        const total = data.reduce((sum, day) => sum + day.count, 0);
        setTotalContributions(total);
    };

    return (
        <div className="wpo-github-area section-padding" id="github" style={{ 
            background: 'linear-gradient(180deg,  #1B1B19 0%, #1B1B19 100%)'
        }}>
            <div className="container">
                <SectionTitle Title={'My GitHub Contributions'} />
                <div className="wpo-github-wrap" style={{ 
                    borderRadius: '10px', 
                    padding: '30px', 
                    position: 'relative'
                }}>
                    <div className="github-calendar-container" style={{ 
                        padding: '20px', 
                        borderRadius: '8px', 
                        marginBottom: '25px',
                        position: 'relative',
                        zIndex: '1',
                        border: '1px solid rgba(255, 230, 0, 0.2)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        background: 'rgba(27, 27, 25, 0.7)'
                    }}>
                        <GitHubCalendar 
                            username={username} 
                            blockSize={15}
                            blockMargin={5}
                            fontSize={16}
                            theme={theme}
                            hideColorLegend={false}
                            hideMonthLabels={false}
                            colorScheme="dark"
                            onDataLoad={onDataLoad}
                        />
                    </div>
                    <div className="github-stats-link" style={{
                        textAlign: 'center',
                        marginTop: '20px'
                    }}>
                        <div className="slide-btn">
                            <a 
                                href={`https://github.com/${username}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="theme-btn"
                            >
                                View My GitHub Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                :global(.react-activity-calendar__calendar) {
                    margin-left: 72px !important;
                }
                
                :global(.react-activity-calendar svg) {
                    margin-left: 72px !important;
                }
                
                :global(.contribution-count) {
                    display: none !important;
                }
                
                :global(.react-activity-calendar text) {
                    display: none !important;
                }
            `}</style>
        </div>
    );
};

export default GitHubContributions;