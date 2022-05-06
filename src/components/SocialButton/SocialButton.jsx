import styles from "./SocialButton.module.scss";

const SocialButton = ({
    hrefText = "https://github.com/Chizaruu/recipetineats",
    srcText = "",
    altText = "?",
}) => {
    return (
        <a
            className={styles.socialButton}
            href={hrefText}
            rel="noopener noreferrer"
            target="_blank"
        >
            <button className={styles.socialButton__button}>
                <img src={srcText} alt={altText} />
            </button>
        </a>
    );
};

export default SocialButton;
