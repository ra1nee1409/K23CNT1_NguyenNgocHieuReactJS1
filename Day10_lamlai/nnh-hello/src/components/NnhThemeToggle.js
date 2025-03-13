import { useTheme } from "../context/NnhThemeContext";

export default function NnhThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return <button onClick={toggleTheme}>Chuyển sang {theme === "light" ? "Tối" : "Sáng"}</button>;
}