import { Link } from "react-router-dom";
function Footer() {
  return (

     <footer>
     <div className="footer">
       <p className="copyright">© 2024 Marisa Miller's Portfolio</p>
       <ul className="footer-links">
        <li><Link to='/'>Home</Link>            </li>
        <li><Link to='/about'>About</Link>  </li>
        <li><Link to='/skills'>Skills</Link>    </li>
        <li><Link to='/projects'>Projects</Link ></li>
        </ul>
        <a href="https://github.com/mamillergirl/mamiller_portfolio">View this project</a>
     </div>
   </footer>
  );
}

export {Footer};
