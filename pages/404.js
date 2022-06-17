import React from "react";
import styles from "@/styles/404.module.css";
import Image from "next/image";
import Oops from "@/assets/images/oops.png";
import { Typography } from "@mui/material";
export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.Oops}>
        <Image src={Oops} alt="Oops" />
        <Typography
          variant="h4"
          component="h4"
          align="center"
          gutterBottom
          sx={{ marginTop: "20px" }}
        >
          404 - PAGE NOT FOUND
        </Typography>
        <Typography
          variant="p"
          component="p"
          align="center"
          gutterBottom
          paragraph
        >
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </Typography>
      </div>
    </div>
  );
}
