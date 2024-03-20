import styles from "./Navigation.module.css";
const Navigation = () => {
console.log(styles);
  return (
    <nav className={`${styles.navigation}container`}>
        <div>
            <img src="/images/logo.png" alt="logo" className="logo"/>
        </div>
        <ul>
            <li>Home</li>
            <li>contact</li>
            <li>about</li>
        </ul>
    </nav>
  )
};

export default Navigation;