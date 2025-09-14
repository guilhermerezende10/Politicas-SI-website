import styles from "./Img.module.css";

function Img({ path, alt = "" }) {
  return (
    <div className={styles.imgContainer}>
      <img src={path} alt={alt} className={styles.img} />
    </div>
  );
}

export default Img;
