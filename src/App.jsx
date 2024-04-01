import "./App.css";
import Navbar from "./Navbar";

import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png"; // Import the contact icon

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
      <div className="heading">Test</div>
      <div className="paragraph">Test</div>
    </div>
  );
}

export default App;
