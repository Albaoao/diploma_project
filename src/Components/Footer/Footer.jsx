import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bloomy-footer">
            <div className="container">
                <div className="footer-card">
                    <div className="footer-grid">
                        {/* О платформе */}
                        <div className="footer-col">
                            <h4 className="footer-title">О платформе</h4>
                            <p className="footer-text">
                                Erekshе Alem — интерактивная образовательная платформа,
                                предназначенная для развития когнитивных и творческих способностей
                                детей с инвалидностью. Платформа использует игровые и адаптивные
                                методики, помогает педагогам и родителям наблюдать за развитием,
                                навыками внимания, памяти и эмоционального интеллекта в безопасной
                                и поддерживающей среде.
                            </p>
                        </div>

                        {/* Язык */}
                        <div className="footer-col">
                            <h4 className="footer-title">Язык</h4>
                            <ul className="footer-list">
                                <li><button className="footer-linkbtn" type="button">Русский</button></li>
                                <li><button className="footer-linkbtn" type="button">Қазақ тілі</button></li>
                                <li><button className="footer-linkbtn" type="button">English</button></li>
                            </ul>
                        </div>

                        {/* Ресурсы */}
                        <div className="footer-col">
                            <h4 className="footer-title">Ресурсы</h4>
                            <ul className="footer-list">
                                <li><Link className="footer-link" to="/why-bloomy">Почему Bloomy</Link></li>
                                <li><Link className="footer-link" to="/how-it-works">Как это работает</Link></li>
                                <li><Link className="footer-link" to="/">Главная</Link></li>
                                <li><Link className="footer-link" to="/dashboard">Прогресс</Link></li>
                                <li><Link className="footer-link" to="/create-child">Добавить ребёнка</Link></li>
                                <li><Link className="footer-link" to="/profile">Профиль</Link></li>
                            </ul>
                        </div>

                        {/* Контакты */}
                        <div className="footer-col">
                            <h4 className="footer-title">Контакты</h4>
                            <ul className="footer-list">
                                <li><a className="footer-link" href="mailto:support@bloomy.app">support@bloomy.app</a></li>
                                <li><a className="footer-link" href="tel:+77751254336">+7 775 125 43 36</a></li>
                                <li><a className="footer-link" href="tel:+77798842387">+7 779 884 23 87</a></li>
                                <li><a className="footer-link" href="tel:+77796512800">+7 779 651 28 00</a></li>
                                <li className="footer-muted">Алматы, Казахстан</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-bottom-links">
                            <Link className="footer-bottom-link" to="/blog">Блог</Link>
                            <Link className="footer-bottom-link" to="/terms">Условия использования</Link>
                            <Link className="footer-bottom-link" to="/privacy">Конфиденциальность</Link>
                            <Link className="footer-bottom-link" to="/about">О проекте</Link>
                        </div>

                        <div className="footer-copy">
                            © {new Date().getFullYear()} Erekshе Alem. Все права защищены.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
