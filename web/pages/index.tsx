import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useQuery } from "@apollo/client";
import ViewerLanguagesQuery from "../src/Components/ViewerLanguages.query";
import { getCurrentUserLanguages } from "../src/Components/__generated__/getCurrentUserLanguages";

const Home: NextPage = () => {
  const { data } = useQuery<getCurrentUserLanguages>(ViewerLanguagesQuery);
  return (
    <div className={styles.container}>{JSON.stringify(data, null, 2)}</div>
  );
};

export default Home;
