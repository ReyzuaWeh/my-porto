import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Certifications } from "../../utils/fetchTypes";
import { DataRoute } from "../../utils/OurRoute";

const ListCertifications = ({ editable }: {
    editable?: boolean | null
}) => {
    const [certifications, setCertifications] = useState<Certifications[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!certifications.length) {
            setCertifications([
                {
                    name: "Sertifikasi Satu",
                    obtained_year: 2023,
                    institution: "SMKN 4 Bandung",
                    link: "#",
                    image: "#",
                    detail: "Lorem ipsum dolor sit amet"
                },
                {
                    name: "Sertifikasi Dua",
                    obtained_year: 2022,
                    institution: "SMKN 4 Bandung",
                    link: "#",
                    image: "#",
                    detail: "Lorem ipsum dolor sit amet"
                },
                {
                    name: "Sertifikasi Tiga",
                    obtained_year: 2021,
                    institution: "SMKN 4 Bandung",
                    link: "#",
                    image: "#",
                    detail: "Lorem ipsum dolor sit amet"
                },
                {
                    name: "Sertifikasi Empat",
                    obtained_year: 2020,
                    institution: "SMKN 4 Bandung",
                    link: "#",
                    image: "#",
                    detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ratione voluptate vero eius dolore ex dolores amet cum esse maiores a praesentium perferendis eos, ea nostrum exercitationem molestias itaque nesciunt. Totam fugiat itaque molestias asperiores et sequi.Facilis, molestias repellat.Harum provident itaque minus tenetur.Ipsum quod voluptatem impedit.Voluptatibus, aliquam.Odit in mollitia voluptas consequatur cupiditate cumque adipisci doloremque?"
                },
            ]);
        }
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === certifications.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
    };
    const middleSlide = Math.floor(certifications.length / 2);
    return (
        <div id="list-certifications" className="w-full text-center relative px-0 py-2">
            {/* Carousel Container */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {certifications.map((certification, index) => (
                        <div key={index} className="flex-none w-full px-4">
                            <div className="relative bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                                {/* Field untuk Image dengan rasio 16:9 */}
                                {certification.image && (
                                    <div className="w-full aspect-video mb-4">
                                        <img
                                            src={certification.image}
                                            alt={certification.name}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>
                                )}

                                {/* Konten default: Nama sertifikasi dan institusi */}
                                <div className="relative">
                                    <div className="w-full text-center bg-gradient-to-l from-gray-200 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text">
                                        <h3 className="text-xl font-semibold">
                                            {certification.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 mt-2">
                                        {certification.institution}
                                    </p>
                                </div>

                                {/* Overlay hover: Detail sertifikasi */}
                                <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex flex-col justify-center items-center text-white text-sm">
                                        <h3 className="font-bold text-lg mb-2">
                                            {certification.obtained_year}
                                        </h3>
                                        <p className="text-center hidden sm:block">
                                            {certification.detail || "Belum ada detail"}
                                        </p>
                                    </div>
                                    <div className="w-full mt-4 flex justify-center items-center">
                                        {editable && <a
                                            href={DataRoute.FormCertification + "/" + certification.id}
                                            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white transition-all font-bold py-2 px-4 rounded mr-2"
                                        >
                                            Edit
                                        </a>}
                                        <a
                                            href={certification.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Detail
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tombol Navigasi Carousel */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button
                    onClick={prevSlide}
                    className="p-2 m-2 bg-gray-300 text-gray-700 rounded-full hover:bg-indigo-500 hover:text-white disabled:opacity-50"
                >
                    <FaArrowLeft />
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button
                    onClick={nextSlide}
                    className="p-2 m-2 bg-gray-300 text-gray-700 rounded-full hover:bg-indigo-500 hover:text-white disabled:opacity-50"
                >
                    <FaArrowRight />
                </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {/* Titik kiri (awal) */}
                <div
                    onClick={() => setCurrentSlide(0)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === 0 ? "bg-indigo-500" : "bg-gray-400"
                        }`}
                ></div>
                {/* Titik tengah */}
                <div
                    onClick={() => setCurrentSlide(middleSlide)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide !== 0 && currentSlide !== certifications.length - 1
                        ? "bg-indigo-500"
                        : "bg-gray-400"
                        }`}
                ></div>
                {/* Titik kanan (akhir) */}
                <div
                    onClick={() => setCurrentSlide(certifications.length - 1)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === certifications.length - 1 ? "bg-indigo-500" : "bg-gray-400"
                        }`}
                ></div>
            </div>
        </div>
    );
};

export default ListCertifications;
