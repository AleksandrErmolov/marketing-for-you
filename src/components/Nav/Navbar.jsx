import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

function Navbar(props) {
    return (
        <aside className={s.aside}>
            <p>Меню</p>

            <div>
                <NavLink to="/main" activeClassName={s.activeLink}>Главная</NavLink>
            </div>
            
            <div>
                <NavLink to="/quote" activeClassName={s.activeLink}>Цитата дня</NavLink>
            </div>
            <p>Просто о сложном</p>
            <p></p>
        </aside>
    );
}

export default Navbar;