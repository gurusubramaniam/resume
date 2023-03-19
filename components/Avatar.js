import styles from "../styles/Avatar.module.css";

function Avatar({ avatar = false, colorMode = "light" }) {
  const avatarUrl = "https://avatars.githubusercontent.com/u/2196383?v=4";
  const logoUrl = `profile${colorMode}.png`;
  return (
    <div className="avatarcontainer">
      <img
        src={avatar ? avatarUrl : logoUrl}
        alt="guru's profile image"
        className={`${styles.avatar} ${
          colorMode == "light" ? styles.avatarlight : styles.avatardark
        }`}
      />
    </div>
  );
}

export default Avatar;
