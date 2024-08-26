import useLocalStorage from "./localStorage";
import './theme.css'

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hellow World!</p>
        <button onClick={handleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
