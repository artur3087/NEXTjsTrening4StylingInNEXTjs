// import "./home.css"; //

// or: //

import styles from "./page.module.css";


export default function Home () { // START of a default function //

  console.log(styles);


  return ( // START of returning //
  
    // <div>
    //   <h2>HOME</h2>
    //   <p>Home page, dude! Home page!</p>
    // </div>

    <div>
      <h2 className={styles.giantred}>HOME</h2>
      <p>Normal style, dude!</p>
      <p className={styles.giantred}>Module style, dude!</p>
    </div>


  ) // END of returning //

} // END of a default function // 