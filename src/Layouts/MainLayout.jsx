import { Outlet } from 'react-router-dom';
import Navigation from '../Pages/Shared/Navigation/Navigation';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div >
            {/* <Navigation></Navigation> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;