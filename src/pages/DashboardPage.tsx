import { useEffect, useState } from "react";
import ListCertifications from "../components/parts/ListCertifications";
import ListProjects from "../components/parts/ListProjects";
import { DataRoute } from "../utils/OurRoute";

const DashboardPage = () => {
    const [selectedTab, setSelectedTab] = useState("projects");

    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 p-4 text-gray-100">
            {/* Profile Section */}
            {/* <div id="profile" className="bg-gray-800 rounded-lg shadow p-6 mb-6">
                <div className="flex items-center">
                    <img
                        src="/path/to/profile.jpg"
                        alt="Profile"
                        className="w-20 h-20 rounded-full mr-4 border border-gray-700"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">Nama Pengguna</h1>
                        <p className="text-gray-400">user@example.com</p>
                    </div>
                    <button className="ml-auto bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                        Edit Profile
                    </button>
                </div>
            </div> */}

            {/* Top Bar Navigation */}
            <div className="bg-gray-800 rounded-lg overflow-x-auto w-full shadow p-4 mb-6">
                <div className="min-w-full flex justify-center space-x-0 md:space-x-4">
                    <button
                        onClick={() => setSelectedTab("projects")}
                        className={`md:py-2 px-4 font-bold ${selectedTab === "projects"
                            ? "border-b-2 border-indigo-600 text-indigo-600"
                            : "text-gray-400"
                            }`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => setSelectedTab("certifications")}
                        className={`md:py-2 px-4 font-bold ${selectedTab === "certifications"
                            ? "border-b-2 border-indigo-600 text-indigo-600"
                            : "text-gray-400"
                            }`}
                    >
                        Certifications
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div>
                {selectedTab === "projects" && (
                    <div className="bg-gray-700 rounded-lg shadow p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Projects</h2>
                            <a href={DataRoute.FormProject} className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                                Add
                            </a>
                        </div>
                        <ListProjects editable={true} />
                    </div>
                )}
                {selectedTab === "certifications" && (
                    <div className="bg-gray-700 rounded-lg shadow p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Certifications</h2>
                            <a href={DataRoute.FormCertification} className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                                Add
                            </a>
                        </div>
                        <ListCertifications editable={true} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
