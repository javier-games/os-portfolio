import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '../general';
import profilePicture from '../../assets/images/javier_garcia_portrait.png';
import iconGithub from '../../assets/images/icon-github.png';
import iconLinkedIn from '../../assets/images/icon-linkedin.png';
import iconVimeo from '../../assets/images/icon-vimeo.png';

export interface HomeProps {}

const About: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();

    return (
        <div style={styles.page}>

            <header style={styles.header}>
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        {/*<Link containerStyle={styles.navItem} to="" text="about" />*/}
                        {/*<Link containerStyle={styles.navItem} to="Work" text="work" />*/}
                    </ul>
                </nav>
            </header>

            <main style={styles.main}>
                <div style={styles.content}>
                    <div style={styles.textBlock}>
                        <div style={styles.contentSpace}></div>
                        <div style={styles.contentSpace}></div>
                        <h1 style={styles.title}>Javier García</h1>
                        <p style={styles.subtitle}>Game Developer</p>
                        <div style={styles.contentSpace}></div>
                        <p style={styles.paragraph}>
                            I develop code that enhances player's experience and streamlines development.
                        </p>
                        <div style={styles.contactMenu}>
                            <a href="https://github.com/javier-games" target="_blank" style={styles.contactItem}>
                                <img style={styles.icon} src={iconGithub} alt={''} />
                            </a>
                            <a href="https://www.linkedin.com/in/javier-games/" target="_blank" style={styles.contactItem}>
                                <img style={styles.icon} src={iconLinkedIn}
                                     alt={''} />
                            </a>
                            <a href="https://vimeo.com/798235214" target="_blank" style={styles.contactItem}>
                                <img style={styles.icon} src={iconVimeo} alt={''} />
                            </a>
                        </div>
                    </div>
                    <div style={styles.graphic}>
                        <div style={styles.contentSpace}></div>
                        <img style={styles.portrait}
                             src={profilePicture}
                             alt={''} />
                    </div>
                </div>
            </main>

            <footer style={styles.footer}>
                <div style={styles.languageSwitch}>
                    {/*<button style={styles.languageButtonOn} onClick={() => console.log('Switch to English')}>英語</button>*/}
                    {/*<button style={styles.languageButton} onClick={() => console.log('Switch to Japanese')}>日本語</button>*/}
                </div>
            </footer>

        </div>


    );
};

const styles: { [key: string]: React.CSSProperties } = {


    page: {
        fontFamily: 'DotGothic16',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },


    header: {
        display: 'flex',
        height: '8.3%',
    },

    nav: {
        marginLeft: '68.75%',
        marginRight: '12.5%',
        width: '100%',
        paddingRight: '10px',
        paddingLeft: '10px',
        paddingBottom: '10px'
    },
    navList: {
        margin: '0px',
        padding: '0px',
        listStyle: 'none',
        display: 'flex',
        height: '100%',
        width: '100%'
    },
    navItem: {
        width: '100%',
        height: '100%',
        fontFamily: 'MSSerif',
    },

    main: {
        height : '83.3%'
    },
    content:{
        marginLeft: '12.5%',
        marginRight: '12.5%',
        minHeight: '100%',
        maxHeight: '100%'
    },
    textBlock:{
        maxWidth: '75%',
        minHeight: '100%',
        maxHeight: '100%',
        display: 'revert'
    },

    contentSpace:{
        minHeight: '10%',
    },
    title: {
        fontFamily: 'inherit',
        fontSmooth: 'large',
        fontSize: '40px',
        minHeight: '10%',
        marginRight: '11%',
        textAlign: 'right',
        // letterSpacing: '0px'
    },
    subtitle: {
        fontWeight: 'normal',
        marginTop: '-5px',
        fontFamily: 'MSSerif',
        fontSize: '25px',
        minHeight: '10%',
        marginRight: '11%',
        textAlign: 'right',
    },
    paragraph: {
        fontFamily: 'DotGothic16',
        fontSize: '20px',
        minHeight: '30%',
        marginRight: '11%',
    },
    contactMenu:{
        marginLeft: '22%',
        marginRight: '33%',
        minHeight: '10%',
        borderTop: 'double',
        borderColor: '#D6D6D6',
        borderWidth: '2px',
        display: 'flex',
        paddingTop: '10%',
    },
    contactItem:{
        flex: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        height: '32px',
    },

    graphic: {
        width: '25%',
        minHeight: '100%',
        display: 'revert',
        padding: '10px'
    },
    portrait: {
        width: '100%',
        height: '70%'
    },

    footer: {
        background: 'none',
        height: '8.3%',
    },
    languageSwitch: {
        background: 'none',
        height: '100%',
        maxWidth: '12.5%',
    },
    languageButton: {
        width: "100%",
        border: 'none',
        cursor: 'pointer',
        font: 'inherit',
        background: 'none',
        fontSize: '15px',
        color: '#999999'
    },
    languageButtonOn: {
        width: "100%",
        border: 'none',
        cursor: 'pointer',
        font: 'inherit',
        background: 'none',
        fontSize: '15px',
        color: '#333333'
    },

};
export default About;