import MainSidebar from "../components/common/MainSidebar";

const MainPage = () => {
    return (
        <div className="min-h-screen flex bg-gray-900">
            <MainSidebar />
            {/* Main Content */}
            <main className="p-5 w-full">
                <div className="min-h-screen flex items-center">
                    <div className="w-full text-center">
                        <h1 className="lg:text-6xl text-4xl font-seven-segment font-semibold text-white">
                            Ginanjar Al Farizi
                        </h1>
                    </div>
                </div>
                <div className="AboutMe">
                    <div id="about" className="min-h-screen flex justify-center items-center">
                        <div className="w-[75%] px-10 py-8 text-justify bg-[#ffffffea] rounded-lg shadow-lg">
                            <h1 className="md:text-5xl text-xl font-extrabold mb-4">
                                <span className="text-fuchsia-500">Backend</span> <span>Developer</span>
                            </h1>
                            <hr className="mb-4 h-0.5 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 border-0 rounded-full" />
                            <p className="md:text-xl text-base text-gray-700">
                                Saya ahli di bidang Backend Developer dengan pengalaman mendalam dalam membangun sistem yang efisien dan scalable. Saya terbiasa menggunakan Python dan Golang
                                <span className="lg:inline hidden">
                                    {" "}untuk mengembangkan API, mengelola database, serta menerapkan arsitektur microservices yang handal, sehingga aplikasi dapat berjalan dengan optimal dan aman
                                </span>.
                            </p>
                        </div>
                    </div>
                    <div id="work" className="min-h-screen flex items-center">
                        <div className="w-full text-center">
                            <h1 className="text-6xl font-seven-segment font-semibold text-white">
                                Work
                            </h1>
                        </div>
                    </div>
                    <div id="projects" className="min-h-screen flex items-center">
                        <div className="w-full text-center">
                            <h1 className="text-6xl font-seven-segment font-semibold text-white">
                                Projects
                            </h1>
                        </div>
                    </div>
                    <div id="anjay" className="min-h-screen block items-center">
                        <div className="w-full text-center">
                            <h1 className="text-6xl font-seven-segment font-semibold text-white">
                                Projects
                            </h1>
                        </div>
                    </div>
                    <div id="contact" className="min-h-screen flex items-center">
                        <div className="w-full text-center">
                            <h1 className="text-6xl font-seven-segment font-semibold text-white">
                                Contact
                            </h1>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainPage;