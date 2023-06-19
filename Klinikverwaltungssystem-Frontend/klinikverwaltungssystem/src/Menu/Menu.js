import { MenuData } from "./MenuData";
import "../index.css"
function Menu() {
    return (
        <div className="menu">
            <ul className="MenuList">
                <h1>Klinikverwaltungssystem</h1>
                {MenuData.map((val, key) => {
                    return (
                        <li key={key} className="row" id={window.location.pathname === val.link ? "active" : ""} onClick={() => { window.location.pathname = val.link }}>
                            <div id="icon">{val.icon}</div>{" "}
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default Menu;