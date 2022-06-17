import Oops from "@/assets/images/oops.png";
import styles from "@/styles/404.module.css";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.Oops}>
        <Image src={Oops} alt="Oops" />
        <Typography
          className={styles.title}
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
        <Button
          variant="contained"
          className={styles.button}
          onClick={() => {
            router.replace("/");
          }}
        >
          GO BACK HOMEPAGE
        </Button>
      </div>
    </div>
  );
}
