import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default function Home()
{
    return (
        <div className="home-container">
           <Navbar/>
           
<h1>Home</h1>
<p>This is a home page.</p>
<Footer/>
        </div>
    )
}