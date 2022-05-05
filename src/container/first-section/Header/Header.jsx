import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.header__title_section}>
                    <a
                        className={styles.header__title_section__title}
                        href="https://github.com/Chizaruu/recipetineats"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Recipetineats
                    </a>
                </h1>
            </div>
            <div className={styles.header__search_section}>
                <input
                    className={styles.header__search_section__input}
                    type="text"
                    placeholder="Search Recipes..."
                />
                <button
                    className={styles.header__search_section__search}
                    type="submit"
                >
                    <img src="./images/search-icon.png" alt="?" />
                </button>
            </div>
            <div className={styles.header__social_section}>
                <a className={styles.header__social_section__social} href="#">
                    <img src="./images/instagram-icon.png" alt="instagram" />
                </a>
                <a className={styles.header__social_section__social} href="#">
                    <img src="./images/facebook-icon.png" alt="facebook" />
                </a>
                <a className={styles.header__social_section__social} href="#">
                    <img src="./images/pinterest-icon.png" alt="pinterest" />
                </a>
                <a className={styles.header__social_section__social} href="#">
                    <img src="./images/youtube-icon.png" alt="youtube" />
                </a>
            </div>
        </header>
    );
};

export default Header;
