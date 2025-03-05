const ListSkills = () => {
    const skills = [
        { id: 1, name: 'Python' },
        { id: 2, name: 'FastAPI' },
        { id: 3, name: 'Golang' },
        { id: 4, name: 'TypeScript' },
        { id: 5, name: 'JavaScript' },
        { id: 6, name: 'React' },
        { id: 7, name: 'PHP' },
        { id: 8, name: 'Laravel' },
        { id: 9, name: 'MySQL' },
        { id: 10, name: 'SQLite' },
        { id: 11, name: 'Postgres' },
        { id: 12, name: 'MongoDB' },
        { id: 13, name: 'VueJS' },
        { id: 14, name: 'VanJS' },
        { id: 15, name: 'ExpressJS' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            {/* Container scrollable secara horizontal */}
            <div className="w-full max-w-4xl p-5 overflow-x-auto">
                <div
                    className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 border-collapse divide-x divide-y bg-gray-800"
                >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="self-center flex items-center hover:bg-fuchsia-200 transition-all
                                        duration-500
                                        w-full justify-center min-h-24 border-r border-b"
                        >
                            <div className="w-full text-center bg-gradient-to-br from-gray-200 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text">
                                <h3 className="text-2xl cursor-default font-semibold">
                                    {skill.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ListSkills