import "./Dashboard.css";

import owl from "../../assets/owl.png";
import bear from "../../assets/bear.png";
import dolphin from "../../assets/dolphin.png";

export default function DashboardHero({ onCreateChild }) {
    return (
        <section className="dash-hero">
            <div className="dash-circle dash-circle-left" />
            <div className="dash-circle dash-circle-right" />
            <div className="dash-circle dash-circle-right-2" />

            <div className="dash-hero-inner">
                <div className="dash-hero-text">
                    <h1>
                        <span className="dash-title-accent">Bloomy</span> приветствует вас!
                    </h1>

                    <p>
                        Мы рады, что вы здесь. <br />
                        Давайте создадим профиль ребёнка и начнём путь
                        к развитию внимания, памяти, эмоций и творчества.
                    </p>

                    <button className="dash-hero-btn" onClick={onCreateChild}>
                        Создать профиль ребёнка
                    </button>
                </div>

                <div className="dash-hero-characters">
                    <img className="dash-owl" src={owl} alt="Сова" />
                    <img className="dash-bear" src={bear} alt="Мишка" />
                    <img className="dash-dolphin" src={dolphin} alt="Дельфин" />
                </div>
            </div>
        </section>
    );
}
