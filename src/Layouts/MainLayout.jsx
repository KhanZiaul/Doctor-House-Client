import { Outlet } from 'react-router-dom';
import Navigation from '../Pages/Shared/Navigation/Navigation';

const MainLayout = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;