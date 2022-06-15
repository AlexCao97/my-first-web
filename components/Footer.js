import React from "react";
import styles from "@/styles/Footer.module.css";
import Avatar from "@mui/material/Avatar";

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <span className={styles.line} />
        <Avatar
          sx={{
            marginRight: "24px",
            marginLeft: "24px",
            width: "72px",
            height: "72px",
          }}
          alt="Cao Nguyễn Vũ Toàn"
          src="https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-1/287944488_3109254572738360_6676872013096327565_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Dcf_QcW0nBAAX-NivZa&_nc_ht=scontent-frt3-1.xx&oh=00_AT82dFndJVEkcbXr6HDr3xGaowpbyG3sfUkYbSi4ESMIBw&oe=62AF3030"
        />
        <span className={styles.line} />
      </div>
      <div></div>
    </div>
  );
}
