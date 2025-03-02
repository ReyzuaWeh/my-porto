import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import defaultImage from "../../assets/default.png";
import FetchRouter from "../../utils/fetchroute";
import { Project } from "../../utils/fetchTypes";
import { truncateText } from "../../utils/functionSets";
import { DataRoute } from "../../utils/OurRoute";

const ListProjects = ({ setSelectedProject, editable }: {
    setSelectedProject?: React.Dispatch<React.SetStateAction<Project | null>> | null,
    editable?: boolean | null
}) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [paginationProjects, setPaginationProjects] = useState<Project[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(2);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;

    // Update paginationProjects setiap kali currentPage atau projects berubah
    useEffect(() => {
        setPaginationProjects(projects.slice(indexOfFirstProject, indexOfLastProject));
    }, [currentPage, projects, indexOfFirstProject, indexOfLastProject]);

    // Fungsi untuk mengubah halaman
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const maxPage = Math.ceil(projects.length / projectsPerPage);
    // Simulasi fetch data proyek
    useEffect(() => {
        if (!projects.length) {
            fetch(FetchRouter.Projects).then((response) => response.json()).then((json) => {
                setProjects(json);
            });
        }
    }, []);

    return (
        <div id="list-project" className="w-full text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 py-8">
                {paginationProjects.map((project, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                        {/* Field untuk Image dengan rasio 16:9 */}
                        <div className="w-full bg-transparent aspect-video mb-4">
                            <img
                                src={project?.image || defaultImage}
                                alt={""}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>

                        {/* Konten default: Title dan nama organisasi */}
                        <div className="relative">
                            <div className="w-full text-center bg-gradient-to-l from-gray-200 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                            </div>
                            <p className="text-gray-300 mt-2">{project.institution}</p>
                        </div>

                        {/* Overlay hover untuk menampilkan spesifikasi dan detail */}
                        <div className="absolute inset-0 bg-black p-5 bg-opacity-75 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="text-white text-sm">
                                <h3 className="font-bold text-lg mb-2">{project.my_position}</h3>
                                <div className="flex mt-2 flex-wrap justify-center">
                                    {project.specification?.map((spec, specIndex) => (
                                        <span
                                            key={specIndex}
                                            className="inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs mr-2 mb-2"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                                <p className="hidden sm:block">{truncateText(project.detail || "Belum ada detail", 150)}</p>
                                <div className="w-full mt-4 flex justify-center items-center">
                                    {editable && <a
                                        href={`${DataRoute.FormProject}/${project.id}`}
                                        className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white transition-all font-bold py-2 px-4 rounded mr-2"
                                    >
                                        Edit
                                    </a>}
                                    <button
                                        onClick={() => setSelectedProject && setSelectedProject(project)}
                                        type="button"
                                        className="bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer transition-all font-bold py-2 px-4 rounded"
                                    >
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Kontrol Pagination dengan tombol kiri & kanan */}
            <div className="flex justify-center items-center mt-4 space-x-4">
                <button
                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded bg-gray-300 text-gray-700 hover:bg-indigo-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <FaArrowLeft />
                </button>
                <p className="text-white">
                    {currentPage} of {maxPage}
                </p>
                <button
                    onClick={() => currentPage < maxPage && paginate(currentPage + 1)}
                    disabled={currentPage === maxPage}
                    className="p-2 rounded bg-gray-300 text-gray-700 hover:bg-indigo-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default ListProjects;
