import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav style={{display:"flex", justifyContent:"space-between",
                alignItems:"center", backgroundColor:"#333", color:"white"
            }}>
                <Link to="/Home">Home</Link> {" "}
                <Link to="/About">About</Link> {" "}
                <Link to="/Services">Services</Link> {" "}
                <Link to="/Contact">Contact</Link> {" "}
            </nav>
        </div>
    );
}

export default Navbar