import { CgDarkMode } from "react-icons/cg";

function ToggleTheme({ switchTheme }) {
    return (
        <div className="relative">
            <button onClick={switchTheme} className="absolute text-2xl text-gray-500 transition-all duration-300 dark:text-gray-300 hover:text-gray-700 top-5 right-5">
                <CgDarkMode />
            </button>
        </div>
    );
}

export default ToggleTheme;