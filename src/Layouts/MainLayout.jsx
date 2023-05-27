import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Pages/Shared/Navigation/Navigation';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {

    const location = useLocation()
    const ignorePage = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div >
            {ignorePage || <Navigation></Navigation>}
            <Outlet></Outlet>
            {ignorePage || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;