import React, { useState } from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from './Home.module.css'; 
function Home() {
 
  const [grouping, setGrouping] = useState(() => {
    return localStorage.getItem("grouping") || "status";
  });

  const [ordering, setOrdering] = useState(() => {
    return localStorage.getItem("ordering") || "title";
  });

  return (
    <div className={styles.home}>
      <Header grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering}/>
      <Main grouping={grouping} ordering={ordering} />
    </div>
  );
}

export default Home;
