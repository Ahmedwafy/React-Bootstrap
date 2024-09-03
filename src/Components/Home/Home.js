import  Slide  from "../Slide/Slide";
import Content from "../Content/Content"
import WhyUS from "../WhyUS/whyus"
import BasicExample from "../Offers/offers"; // offers
import GridComplexExample from "../Footer/Footer"; // Footer
// import About from "../About/About"

function Home () {
    return (
        <div>
            {/* <Navbar /> */}
            <Slide />
            <Content />
            <WhyUS />
            <BasicExample/> 
            {/* <About/> */}
            <GridComplexExample/> 
        </div>
    )
        

}

export default Home;