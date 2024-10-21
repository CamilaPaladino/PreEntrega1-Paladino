import logo from "../../../images/logoWhite.png"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  return (
    <nav>
        <img src={logo} alt="Estilo Hogar" />
        <ul>
          <li><a href="#">Electro</a></li>
          <li><a href="#">Muebles</a></li>
          <li><a href="#">Blanquería</a></li>
          <li>
            <CartWidget></CartWidget>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar