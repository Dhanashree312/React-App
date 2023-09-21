import "./About.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
export default function about()
{
    return (
        <div className="about-container">
             <Navbar/>
<h1>About</h1>
<p>This is a About Page</p>
<Footer/>
        </div>
    )
}