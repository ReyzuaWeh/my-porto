import { useEffect, useState } from "react"
import { FiGithub } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineEmail } from "react-icons/md"
import { Project } from "../../utils/fetchTypes"

const MainSidebar = ({ setSelectedProjects }: {
    setSelectedProjects?: React.Dispatch<React.SetStateAction<Project | null>>
}) => {
    const [OpenSidebar, SetOpenSidebar] = useState(false)
    const [OpenNavbar, SetOpenNavbar] = useState(false)
    const navigation = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Achievements', href: '#achievements' }
    ];
    const [onProgressProjects] = useState<Project[]>([
        {
            title: "Project One",
            institution: "SMKN 4 Bandung",
            my_position: "Developer",
        },
        {
            title: "Project Two",
            institution: "SMKN 4 Bandung",
            my_position: "Developer",
        },
        {
            title: "Project Three",
            institution: "SMKN 4 Bandung",
            my_position: "Developer",
        },
    ]);
    const projects = onProgressProjects;

    const [activeHash, setActiveHash] = useState(window.location.hash || '#about');

    useEffect(() => {
        const handleScroll = () => {
            let current = activeHash;
            navigation.forEach((item) => {
                // Hapus tanda '#' untuk mendapatkan id element
                const sectionId = item.href.slice(1);
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    const { top, bottom } = sectionElement.getBoundingClientRect();
                    // Threshold bisa disesuaikan, misal 100px dari atas viewport
                    if (top <= 100 && bottom >= 100) {
                        current = item.href;
                    }
                }
            });
            if (current !== activeHash) {
                setActiveHash(current);
                // Opsional: update URL hash tanpa reload
                window.history.replaceState(null, "", current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeHash, navigation]);

    return (
        <>
            <button
                type="button"
                onClick={() => {
                    SetOpenNavbar(!OpenNavbar)
                    setTimeout(() => {
                        SetOpenSidebar(!OpenSidebar)
                    }, OpenSidebar ? 200 : 0)
                }}
                className={`fixed ${OpenSidebar ? "animate-spinback-hamburger-click" : "animate-spin-hamburger-click"} w-fit z-30 p-1.5 cursor-pointer text-white lg:hidden right-0 top-0`}
            >
                <GiHamburgerMenu size={30} />
            </button>
            {/* Navigation */}
            <div className={`fixed font-seven-segment z-20 lg:sticky top-0 left-0 ${OpenSidebar ? "block" : "hidden"} lg:animate-none lg:block h-screen w-screen bg-[#0000006e] lg:bg-transparent lg:w-fit`}>
                <nav className={`${OpenNavbar ? "animate-slide-in-navbar" : "animate-slide-out-navbar"} lg:animate-none lg:opacity-100 lg:block h-screen w-72 p-8 bg-gray-900 border-r border-gray-800`}>
                    <div className="flex flex-col h-full">
                        {/* Logo */}
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold">
                                <span className="text-indigo-500">Port</span>
                                <span className="text-white">folio</span>
                            </h1>
                        </div>

                        {/* Navigation Links */}
                        <div className="space-y-6">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`
                                            group block hover:text-indigo-500 transition-colors duration-300 
                                            ${activeHash === item.href ? "text-indigo-500" : "text-gray-400"}
                                        `}
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className={`w-2 h-2 rounded-full bg-indigo-500 transition-opacity duration-300 
                                            ${activeHash === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                        />
                                        <span className="text-lg group-hover:text-indigo-500 transition-colors">
                                            {item.name}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Projects Grid */}
                        <div className="mt-12">
                            <h2 className="text-sm font-medium text-gray-400 mb-4">ON PROGRESS</h2>
                            <div className="space-y-3">
                                {projects.map((project) => (
                                    <div
                                        key={project.title}
                                        onClick={() => {
                                            (setSelectedProjects && setSelectedProjects(project))
                                        }}
                                        className="p-4 rounded-lg border border-gray-800 bg-gray-800/50 hover:border-indigo-500/50 transition-all duration-300"
                                    >
                                        <h3 className="text-white font-medium">{project.title}</h3>
                                        <p className="text-sm text-gray-400">{project.my_position}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-auto w-full">
                            <div className="flex w-full justify-end gap-4 mb-4">
                                {[FiGithub, MdOutlineEmail].map((Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default MainSidebar