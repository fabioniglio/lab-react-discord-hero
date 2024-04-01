import "./App.css";
import Navbar from "./Navbar";

import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";

function App() {
  const navItems = [
    { path: "/", label: "Home", imgSrc: discordLogo },

    {
      path: "/menu",
      label: "Menu",
      imgSrc: menuIcon,
    },
  ];

  return (
    <div className="App">
      <Navbar className="navbar" navItems={navItems} />
      <div className="description">
        <div className="heading">IMAGINE A PLACE...</div>
        <div className="paragraph">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. a Place that makes it easy to talk every day and
          hang out more often.
        </div>
        <button className="buttonMac">Download for Mac</button>
        <button className="buttonBrowser">Open Discord in your browser</button>
      </div>
    </div>
  );
}

export default App;
