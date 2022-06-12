import styles from "../styles/Header.module.scss";

const menuItem = [
  { name: "Menu item 1", id: 1 },
  { name: "Menu item 2", id: 2 },
  { name: "Menu item 3", id: 3 },
];

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>logo</div>
        <div className={styles.wrapper1}>
          <div className={styles.wrapper2}>
            {menuItem.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                {item.name}
              </div>
            ))}
          </div>
          <div className={styles.language}>language switcher</div>
        </div>
      </div>
    </div>
  );
}
