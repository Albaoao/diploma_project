import "./WhatIsBloomy.css";

import brain from "../../assets/brain.png";
import palette from "../../assets/palette.png";
import hands from "../../assets/hands.png";
import settings from "../../assets/settings.png";

function WhatIsBloomy() {
    return (
        <section className="what">
            <div className="container">
                <h2>Что такое Erekshe alem?</h2>

                <div className="what-grid">
                    <div className="what-card card-yellow">
                        <img src={brain} alt="Развитие" />
                        <h3>Развитие</h3>
                        <p>
                            Игры, которые развивают внимание, память и мышление.
                        </p>
                    </div>

                    <div className="what-card card-blue">
                        <img src={palette} alt="Творчество" />
                        <h3>Творчество</h3>
                        <p>
                            Рисование, музыка, мозаики — всё для раскрытия талантов.
                        </p>
                    </div>

                    <div className="what-card card-light">
                        <img src={hands} alt="Поддержка ОВЗ" />
                        <h3>Поддержка ОВЗ</h3>
                        <p>
                            Адаптивный интерфейс для детей с различными видами инвалидности.
                        </p>
                    </div>

                    <div className="what-card card-blue-light">
                        <img src={settings} alt="Гибкая настройка" />
                        <h3>Гибкая настройка</h3>
                        <p>
                            Родители и педагоги могут наблюдать прогресс в реальном времени.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatIsBloomy;
