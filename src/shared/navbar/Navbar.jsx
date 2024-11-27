import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav>
      <div className="nav_left">
        <img
          src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/kalles_babcb241-47cc-4352-a0ae-1458bbff9dcc.png?v=1652178358&width=190"
          alt=""
        />
      </div>
      <div className="nav_middle">
        <ul>
          <li>
            <Link to="/">Demo</Link>
          </li>
          <li>
            <Link to="contact">Shop</Link>
          </li>
          <li>Product</li>
          <li>Sale</li>
          <li>Pages</li>
          <li>Lookbook</li>
          <li>Blog</li>
          <li>Buy Theme</li>
        </ul>
      </div>
      <div className="nav_right">
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button>
          <i className="fa-regular fa-user"></i>
        </button>
        <button>
          <i className="fa-regular fa-heart">
            <span>0</span>
          </i>
        </button>
        <button>
          <i className="fa-solid fa-cart-shopping">
            <span>0</span>
          </i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
