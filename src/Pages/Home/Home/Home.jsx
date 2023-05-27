import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import OurExpertDoctors from "../OurExpertDoctors/OurExpertDoctors";
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
            <OurExpertDoctors></OurExpertDoctors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;