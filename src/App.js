import React from "react";
import Styles from "./App.module.css";
import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";
import Main from "./Components/Main/Main";

function App() {
  const DarkTheme = "darkTheme";
  const LightTheme = "lightTheme";
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  React.useEffect(() => {
    const oldTheme = isDarkTheme ? DarkTheme : LightTheme;
    const newTheme = isDarkTheme ? LightTheme : DarkTheme;
    document.getElementById("cssMode").href = document
      .getElementById("cssMode")
      .href.replace(oldTheme, newTheme);
  }, [isDarkTheme]);

  function toggleMode() {
    setIsDarkTheme((oldVal) => !oldVal);
  }

  const [userData, setUserData] = React.useState();
  const [isFound, setIsFound] = React.useState(true);

  function search(name) {
    fetch("https://api.github.com/users/" + name)
      .then((response) => {
        if (response.status === 404) {
          throw "404";
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUserData(data);
        setIsFound(true);
      })
      .catch((error) => {
        console.log(error);
        setIsFound(false);
      });
  }

  return (
    <div className={Styles.main}>
      <div className={Styles.container}>
        <Nav onModeChange={toggleMode} isDarkTheme={isDarkTheme} />
        <Search onSearch={search} isFound={isFound} />
        {userData && <Main user={userData} />}
      </div>
    </div>
  );
}

export default App;
