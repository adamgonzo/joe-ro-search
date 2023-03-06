import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import JoeRoganPage from "../../components/JoeRoganSearch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      Search Joe Rogan Episodes By Topic
      <JoeRoganPage />
    </main>
  );
}
