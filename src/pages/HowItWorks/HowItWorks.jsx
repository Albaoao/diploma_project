import "./HowItWorks.css";
import bear from "../../assets/bear.png";

function HowItWorks() {
    return (
        <section className="how">
            <div className="container">

                <div className="how-top">
                    <div className="how-text">
                        <h1>Как работает Erekshe alem?</h1>
                        <p>
                            Зарегистрируйтесь — и сразу получите доступ к панели прогресса,
                            где каждый этап развития отображается ясно и удобно.
                        </p>
                    </div>

                    <div className="how-image">
                        <img src={bear} alt="Bear" />
                    </div>
                </div>

                <div className="how-steps">
                    <div className="how-card">
                        <h3>Регистрация родителя и педагога</h3>
                        <p>
                            Создайте аккаунт — это быстро и бесплатно. Настройте профиль
                            под ваши цели.
                        </p>
                    </div>

                    <div className="how-card">
                        <h3>Добавьте ребёнка</h3>
                        <p>
                            Укажите возраст, особенности восприятия и удобные настройки
                            интерфейса.
                        </p>
                    </div>

                    <div className="how-card">
                        <h3>Начните занятия</h3>
                        <p>
                            Доступны игры, упражнения и творчество. Bloomy помогает ребёнку
                            учиться в спокойной игровой форме.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HowItWorks;
