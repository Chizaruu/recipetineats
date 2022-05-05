import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <a
                        href="https://github.com/Chizaruu/recipetineats"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.nav__link}
                    >
                        &hearts;MY RECIPETIN
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a
                        href="https://github.com/Chizaruu/recipetineats"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.nav__link}
                    >
                        RECIPES
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a
                        href="https://github.com/Chizaruu/recipetineats"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.nav__link}
                    >
                        BY CATEGORY
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a
                        href="https://github.com/Chizaruu/recipetineats"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.nav__link}
                    >
                        &star;SPECIAL&star;
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a
                        href="https://github.com/Chizaruu/recipetineats"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.nav__link}
                    >
                        COLLECTIONS
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a
                        href="https://github.com/Chizaruu/recipetineats"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.nav__link}
                    >
                        ABOUT
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
