
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Project1 from '../pages/Project1';
import Project2 from '../pages/Project2';
import Project3 from '../pages/Project3';
import Project4 from '../pages/Project4';
import Resume from '../pages/Resume';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project1" element={<Project1 />} />
                <Route path="/project2" element={<Project2 />} />
                <Route path="/project3" element={<Project3 />} />
                <Route path="/project4" element={<Project4 />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </main>
    )
}
export default Main;