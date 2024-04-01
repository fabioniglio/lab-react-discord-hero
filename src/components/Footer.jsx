import discordBackground from "./assets/discord-background.png";
// Navbar component accepting navItems prop
function Footer() {
  return (
    <div className="footer">
      <img src={discordBackground} alt="background" />
    </div>
  );
}

export default Footer;
