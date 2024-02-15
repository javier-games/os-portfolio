import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

export interface LinkProps {
    text: string;
    to: string;
    containerStyle?: React.CSSProperties;
    outsideTo?: string;
}

const Link: React.FC<LinkProps> = (props) => {
    const navigate = useNavigate();

    // get current location of React router
    const location = useLocation();
    const [isHere, setIsHere] = useState(false);

    // if current path is the same as the link path
    useEffect(() => {
        if (location.pathname === `/${props.to}`) {
            setIsHere(true);
        } else {
            setIsHere(false);
        }
        return () => {};
    }, [location, props.to]);

    const [active, setActive] = useState(false);

    const handleClick = (e: any) => {
        let isMounted = true;
        e.preventDefault();
        setActive(true);
        if (location.pathname !== `/${props.to}`) {
            setTimeout(() => {
                if (isMounted) navigate(`/${props.to}`);
            }, 100);
        }
        let t = setTimeout(() => {
            if (isMounted) setActive(false);
        }, 100);

        return () => {
            isMounted = false;
            clearTimeout(t);
        };
    };

    return (
        <RouterLink
            to={`/${props.to}`}
            onMouseDown={handleClick}
            style={Object.assign({}, { display: 'flex' }, props.containerStyle)}
        >
            {/*{isHere && <div style={styles.navButtonOn} />}*/}
            {/*<h4*/}
            {/*    className="router-link"*/}
            {/*    style={Object.assign(*/}
            {/*        {},*/}
            {/*        styles.link,*/}
            {/*        active && { color: 'red' }*/}
            {/*    )}*/}
            {/*>*/}
            {/*    {props.text}*/}
            {/*</h4>*/}
            <li style={styles.navItem}>
                <button style={isHere ? styles.navButtonOn: styles.navButton}>{props.text}</button>
            </li>
        </RouterLink>
    );
};

const styles: StyleSheetCSS = {
    link: {
        cursor: 'pointer',
        fontWeight: 'bolder',
        textDecoration: 'underline',
    },
    navItem: {
        width: '100%',
        height: '100%',
    },
    navButton: {
        fontFamily: 'MSSerif',
        background: 'inherit',
        color: '#333333',
        height: '100%',
        width: '100%',
        padding: '0',
        margin: '0',
        border: 'none',
        cursor: 'pointer',
        font: 'inherit',
        fontSize: '20px',
        textAlign: 'center',
    },
    navButtonOn:{
        fontFamily: 'MSSerif',
        background: '#050505',
        color: 'white',
        height: '100%',
        width: '100%',
        padding: '0',
        margin: '0',
        border: 'none',
        cursor: 'pointer',
        font: 'inherit',
        fontSize: '20px'
    },
};

export default Link;
