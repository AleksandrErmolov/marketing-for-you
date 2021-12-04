import s from "./Navbar.module.css"

function Navbar (props) {
    return (
        <aside className={s.aside}>
            <p>Меню</p>
            <p>Главная</p>
            <p>Цитата дня</p>
            <p>Просто о сложном</p>
            <p></p>
        </aside>
    );
}

export default Navbar;