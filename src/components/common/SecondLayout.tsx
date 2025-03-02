const SecondLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex flex-col bg-gray-800 min-h-screen">
            {children}
        </div>
    )
}
export default SecondLayout