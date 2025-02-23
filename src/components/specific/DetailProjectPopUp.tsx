import { Project } from "../../utils/fetchTypes"

const DetailProjectPopUp = ({ selectedProject, setSelectedProject }: {
    selectedProject: Project | null,
    setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>
}) => {
    return selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center layer bg-[#000000b4]">
            <div className="animate-zoom-in bg-gray-800 rounded-lg p-6 max-w-2xl text-left w-full mx-4">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-bold text-xl">
                        {selectedProject.title} {selectedProject.date && (`, ${selectedProject.date}`)}
                    </h3>
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-gray-300"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <hr className="mb-3 h-0.5 bg-gradient-to-l from-fuchsia-500 via-purple-500 to-indigo-500 border-0 rounded-full" />
                <p className="text-gray-300">Posisi : {selectedProject.my_position}</p>
                <p className="text-gray-300">Organisasi : {selectedProject.institution}</p>
                <div className="max-h-36 overflow-y-auto my-1.5 w-full text-justify bg-gray-600 rounded">
                    <p className="text-gray-300 px-2">{selectedProject.detail || "Belum ada detail untuk proyek ini"}</p>
                </div>
                <div className="flex flex-wrap self-center gap-2 mb-4 text-gray-300">
                    Spesifikasi Proyek :{" "}
                    {selectedProject.specification?.map((spec, specIndex) => (
                        <span key={specIndex} className="inline-block bg-gray-700 px-2 py-1 rounded-full text-xs">
                            {spec}
                        </span>
                    ))}
                </div>
                {selectedProject.link && (
                    <div className="text-center">
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Visit Project
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
export default DetailProjectPopUp