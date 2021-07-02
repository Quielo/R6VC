import styles from "./App.module.scss";

function room() {
  return (
    <>
      <div className={styles.linkPopUp}>
        <h3 className={styles.permission}>Permissions</h3>
        <p className={styles.instructions}>
          Edit the name of the room related to the topic of the meeting. As you
          wish! Share the code with your guests. And the meeting is ready!
        </p>
        <div className={styles.urlContainer}>
          <h3 className={styles.url}>_____Url_here!_____</h3>
          <div className={styles.copyIcon}></div>
        </div>
      </div>
      <div className={styles.room}>
        {/* <div className={styles.welcomecontainer}>
        <p className={styles.welcomemessage}>
          {" "}
          Welcome!
          <br />
          <span className={styles.enterName}>
            Enter your name o nickname to start!
            <span />
          </span>{" "}
          <br />
          <br />
          <br />
          <br />
          <input type="text" className={styles.inputNickname}></input>
        </p>
        <button id="buttonOk" className={styles.okButton}>
          OK!
        </button>
      </div> */}

        <div className={styles.roomcontainer}>
          <div className={styles.roomname}>
            <p>ROOM NAME</p>
          </div>
          <div className={styles.logodown}></div>
          <div className={styles.mic}></div>
          <div className={styles.arrow}></div>
          <div className={styles.userslist}></div>
          <div className={styles.user1}>
            <div className={styles.usernamecontainer}>
              <p className={styles.username}>NAME</p>
            </div>
          </div>
          <div className={styles.user2}>
            <div className={styles.usernamecontainer}>
              <p className={styles.username}>NAME</p>
            </div>
          </div>
          <div className={styles.user3}>
            <div className={styles.usernamecontainer}>
              <p className={styles.username}>NAME</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default room;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello world
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
