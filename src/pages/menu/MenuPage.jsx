import './menu-page.css'
import {useState} from "react";

const MenuPage = () => {
    const menu = ['All catagory', 'Dinner', 'Launch', 'Desserts', 'Drink'];

    const [activeButton, setActiveButton] = useState('All catagory');
    return (
        <div className="container">
            <h2 className="menu">Our popular menu</h2>

            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                {menu.map((item, index) => (<button
                    onClick={() => setActiveButton(item)}
                    style={{
                        marginLeft: '27px',
                        backgroundColor: activeButton === item ? "#311F09" : '#D0CCC730',
                        color: activeButton === item ? "white" :  "black"
                    }}
                    className="btn" key={index}>{item}</button>))}
            </div>


        </div>
    )
}

export default MenuPage;