import "./WhyBloomy.css";

import owl from "../../assets/owl.png";
import owlBlob from "../../assets/owl-blob.png";

import iconGame from "../../assets/icon-game.png";
import iconProgress from "../../assets/icon-progress.png";
import iconAdapt from "../../assets/icon-adapt.png";
import iconNoAds from "../../assets/icon-noads.png";

export default function WhyBloomy() {
    return (
        <section className="why" id="why">
            <div className="container">
                <div className="why-content">
                    {/* LEFT */}
                    <div className="why-left">
                        <h2 className="why-title">Почему Erekshe alem?</h2>

                        <p className="why-text">
                            Мы создаём безопасную, понятную и поддерживающую среду для детей с
                            особенностями развития и их родителей.
                        </p>

                        <div className="why-owl">
                            <img className="why-owl-blob" src={owlBlob} alt="" />
                            <img className="why-owl-img" src={owl} alt="Сова Bloomy" />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="why-right">
                        <div className="why-card">
                            <div className="why-card-head">
                                <h3>Развитие через игру</h3>
                                <img src={iconGame} alt="" />
                            </div>
                            <p>
                                Упражнения на внимание, память и мышление в игровой форме, без
                                перегрузки и стресса.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-card-head">
                                <h3>Понятный прогресс ребёнка</h3>
                                <img src={iconProgress} alt="" />
                            </div>
                            <p>
                                Родители и педагоги видят, какие навыки развиваются, и могут
                                отслеживать динамику по дням и неделям.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-card-head">
                                <h3>Адаптация под ребёнка</h3>
                                <img src={iconAdapt} alt="" />
                            </div>
                            <p>
                                Настраиваемый размер текста, контрастность, голосовые подсказки
                                и простое управление — для разных типов инвалидности.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-card-head">
                                <h3>Без рекламы</h3>
                                <img src={iconNoAds} alt="" />
                            </div>
                            <p>
                                В Bloomy нет случайного контента и навязчивой рекламы — только
                                тщательно подобранные задания.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="why-footer">
                    Bloomy создан при участии педагогов и специалистов по инклюзивному образованию.
                </div>
            </div>
        </section>
    );
}
