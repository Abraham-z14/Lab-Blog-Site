// Receives the blog name from App as a prop and displays it in the page header.
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;