import { CiLink } from "react-icons/ci";

function Project({ theme, title, description, technologies, link, github }) {
    return (
        <div className="hover:bg-gray-50 hover:dark:bg-[#101e38] transition-all duration-300 p-6 md:rounded-xl">
            <img className="w-60" src={technologies + theme} />
            <h3 className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-300">{title}</h3>
            <p className="mt-4 text-base font-light leading-7 text-gray-500 dark:text-gray-300">{description}</p>

            <div className="flex gap-6 font-medium text-gray-500 dark:text-gray-300">
                <a className="flex gap-2 mt-4 transition-all duration-300 cursor-pointer hover:text-blue-600">
                    <CiLink className="self-center text-2xl" />
                    <a href={link} className="self-center text-xs">View Project</a>
                </a>
                <a className="flex gap-2 mt-4 transition-all duration-300 cursor-pointer hover:text-blue-600">
                    <CiLink className="self-center text-2xl" />
                    <a href={github} className="self-center text-xs">View Github</a>
                </a>
            </div>
        </div>
    )
}

export default Project