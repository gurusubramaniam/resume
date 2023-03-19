import styles from "../styles/Avatar.module.css";

function Avatar({ avatar = false }) {
  const avatarUrl = "https://avatars.githubusercontent.com/u/2196383?v=4";
  const logoUrl = "./G-Dark.png";
  return (
    <div className={styles.avatarcontainer}>
      <img
        src={avatar ? avatarUrl : logoUrl}
        alt="guru's profile image"
        className={styles.avatar}
      />
    </div>
  );
}

export default Avatar;
