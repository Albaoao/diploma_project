import "./Hero.css";

import dolphin from "../../assets/dolphin.png";
import blob from "../../assets/blob.png";
import { useNavigate } from "react-router-dom";

function Hero({ onStart }) {
    const navigate = useNavigate();

    const handleStart = () => {
        if (typeof onStart === "function") onStart();
    };

    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Добро пожаловать в Erekshe alem!</h1>

                    <p>
                        Помогаем родителям и педагогам следить за процессом развития детей с
                        инвалидностью — от внимания и памяти до творческих способностей и
                        эмоционального интеллекта.
                    </p>

                    <div className="hero-buttons">
                        {/* Открыть регистрацию */}
                        <button className="primary-btn" onClick={handleStart}>
                            Начать сейчас
                        </button>

                        {/* Перейти на страницу "Почему Bloomy" */}
                        <button
                            className="secondary-btn"
                            type="button"
                            onClick={() => navigate("/why-bloomy")}
                        >
                            Узнать больше
                        </button>
                    </div>
                </div>

                <div className="hero-image">
                    <img className="hero-blob" src={blob} alt="" />
                    <img className="hero-dolphin" src={dolphin} alt="Bloomy dolphin" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
