import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../showcase/About';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import Projects from '../showcase/Work';

export interface ShowcaseExplorerProps extends WindowAppProps {}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Javier García - Game Developer"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2024 Javier García'}
        >
            <Router>
                <div className="site-page">
                    <Routes>
                        <Route path="" element={<About/>} />
                        <Route path='/Work' element={<Projects/>}/>
                    </Routes>
                </div>
            </Router>
        </Window>
    );
};

export default ShowcaseExplorer;
