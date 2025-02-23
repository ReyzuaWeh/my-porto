import { useState } from "react";
import MainSidebar from "../components/common/MainSidebar";
import ListCertifications from "../components/parts/ListCertifications";
import ListProjects from "../components/parts/ListProjects";
import DetailProjectPopUp from "../components/specific/DetailProjectPopUp";
import { Project } from "../utils/fetchTypes";

const MainPage = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="min-h-screen flex bg-gray-900">
            <MainSidebar
                setSelectedProjects={setSelectedProject}
            />
            {/* Main Content */}
            <main className="w-full">
                <div className="min-h-screen bg-[url('/src/assets/time-background.jpg')] bg-cover bg-no-repeat flex items-center relative">
                    <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black/60 flex items-center justify-center">
                        <div className="w-full text-center bg-gradient-to-r from-gray-200 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text">
                            <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-3xl font-seven-segment font-semibold">
                                Ginanjar Al Farizi
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="AboutMe">
                    <div id="about" className="min-h-[100dvh] flex justify-center items-center">
                        <div className="w-[75%] px-5 md:px-10 py-8 text-justify bg-[#ffffffea] rounded-lg shadow-lg">
                            <h1 className="md:text-5xl text-xl font-extrabold mb-4">
                                <span className="text-indigo-500">Backend</span> <span>Developer</span>
                            </h1>
                            <hr className="mb-4 h-0.5 bg-gradient-to-l from-fuchsia-500 via-purple-500 to-indigo-500 border-0 rounded-full" />
                            <p className="md:text-xl text-base text-gray-700">
                                Saya ahli di bidang Backend Developer
                                <span className="sm:inline hidden">
                                    {" "}dengan pengalaman mendalam dalam membangun sistem yang efisien dan scalable
                                </span>
                                .{" "}Saya terbiasa menggunakan Python dan Golang
                                <span className="lg:inline hidden">
                                    {" "}untuk mengembangkan API, mengelola database, serta menerapkan arsitektur microservices yang handal, sehingga aplikasi dapat berjalan dengan optimal dan aman
                                </span>.
                            </p>
                        </div>
                    </div>
                    <div id="projects" className="min-h-screen flex items-center">
                        <div className="w-full text-center">
                            <h1 className="text-6xl font-seven-segment font-semibold text-white">
                                Projects
                            </h1>
                        </div>
                    </div>
                    <ListProjects
                        setSelectedProject={setSelectedProject}
                    />
                    <DetailProjectPopUp
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                    />

                    <div id="achievements" className="min-h-screen flex items-center">
                        <div className="w-full text-center">
                            <h1 className="text-6xl font-seven-segment font-semibold text-white">
                                Achievements
                            </h1>
                        </div>
                    </div>
                    <ListCertifications />
                </div>
            </main>
        </div>
    );
};

export default MainPage;