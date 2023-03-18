import styles from "../styles/Avatar.module.css";

function Avatar({ avatar = false }) {
  const avatarUrl = "https://avatars.githubusercontent.com/u/2196383?v=4";
  const logoUrl = "./G-Dark.png";
  return (
    <img
      src={avatar ? avatarUrl : logoUrl}
      alt="guru's profile image"
      className={styles.avatar}
    />
  );
}

export default Avatar;
