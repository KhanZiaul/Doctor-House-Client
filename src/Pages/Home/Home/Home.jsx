import Banner from "../Banner/Banner";
import OurServices from "../OurServices/OurServices";
import Reviews from "../Reviews/Reviews";
import ShortAboutUs from "../ShortAboutUs/ShortAboutUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <ShortAboutUs></ShortAboutUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;