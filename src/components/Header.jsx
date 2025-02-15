import chefClaudeLogo from "/src/images/chef-claude-icon.png";
export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={chefClaudeLogo} alt="logo" />
      <h1 className="header-h1">Chef Claude</h1>
    </header>
  );
}
