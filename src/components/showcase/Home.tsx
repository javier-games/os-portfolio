import React from 'react';
import { useNavigate } from 'react-router';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();

    const goToContact = () => {
        //navigate('/contact');
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>
                    Javier García
                </h1>
                <h2>
                    Game Developer
                </h2>
            </div>
            <div style={styles.buttons}>
                <a href="https://www.linkedin.com/in/javier-games/" style={styles.link} target="_blank"
                   rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/javier-games" style={styles.link} target="_blank"
                   rel="noopener noreferrer">Github</a>
                <a href="https://vimeo.com/798235214?share=copy" style={styles.link} target="_blank"
                   rel="noopener noreferrer">Demo Reel</a>
            </div>
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {
                    // <img src={forhire} alt="" />
                }
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;
