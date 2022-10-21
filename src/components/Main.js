
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Project1 from '../pages/Project1';
import Project2 from '../pages/Project2';
import Project3 from '../pages/Project3';
import Resume from '../pages/Resume';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="https://ephemeral-ganache-fcd403.netlify.app/" element={<Home />} />
                <Route path="https://ephemeral-ganache-fcd403.netlify.app/project1" element={<Project1 />} />
                <Route path="https://ephemeral-ganache-fcd403.netlify.app/project2" element={<Project2 />} />
                <Route path="https://ephemeral-ganache-fcd403.netlify.app/project3" element={<Project3 />} />
                <Route path="https://ephemeral-ganache-fcd403.netlify.app/resume" element={<Resume />} />
            </Routes>
        </main>
    )
}
export default Main;