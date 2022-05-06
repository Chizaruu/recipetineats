import SocialButton from "./../../components/SocialButton";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__wrapper__title_section}>
                    <a
                        className={styles.header__wrapper__title_section__title}
                        href="https://github.com/Chizaruu/recipetineats"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        recipe<span>tin</span>eats
                    </a>
                </div>
                <div className={styles.header__wrapper__search_section}>
                    <input
                        className={
                            styles.header__wrapper__search_section__input
                        }
                        type="text"
                        placeholder="Search Recipes..."
                    />
                    <button
                        className={
                            styles.header__wrapper__search_section__search
                        }
                        type="submit"
                    >
                        <img src="./images/search-icon.png" alt="?" />
                    </button>
                </div>
                <div className={styles.header__wrapper__social_section}>
                    <SocialButton
                        srcText="./images/instagram-icon.png"
                        altText="Instagram"
                    />
                    <SocialButton
                        srcText="./images/facebook-icon.png"
                        altText="Facebook"
                    />
                    <SocialButton
                        srcText="./images/pinterest-icon.png"
                        altText="Pinterest"
                    />
                    <SocialButton
                        srcText="./images/youtube-icon.png"
                        altText="Youtube"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
