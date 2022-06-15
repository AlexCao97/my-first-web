import React from "react";
import styles from "@/styles/Footer.module.css";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Facebook from "@/assets/icons/facebook.png";
import Instagram from "@/assets/icons/instagram.png";
import Linkedin from "@/assets/icons/linkedin.png";
import Twitter from "@/assets/icons/twitter.png";
import Youtube from "@/assets/icons/youtube.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.avatar}>
        <span className={styles.line} />
        <Avatar
          sx={{
            marginRight: "24px",
            marginLeft: "24px",
            width: "55px",
            height: "55px",
          }}
          src="https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-1/287944488_3109254572738360_6676872013096327565_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Dcf_QcW0nBAAX-NivZa&_nc_ht=scontent-frt3-1.xx&oh=00_AT82dFndJVEkcbXr6HDr3xGaowpbyG3sfUkYbSi4ESMIBw&oe=62AF3030"
        />
        <span className={styles.line} />
      </div>
      <div className={styles.socialContainer}>
        <div className={styles.socialLogo}>
          <Image src={Facebook} alt="Facebook" />
        </div>
        <div className={styles.socialLogo}>
          <Image src={Instagram} alt="Instagram" />
        </div>
        <div className={styles.socialLogo}>
          <Image src={Linkedin} alt="Linkedin" />
        </div>
        <div className={styles.socialLogo}>
          <Image src={Twitter} alt="Twitter" />
        </div>
        <div className={styles.socialLogo}>
          <Image src={Youtube} alt="Youtube" />
        </div>
      </div>
    </div>
  );
}
