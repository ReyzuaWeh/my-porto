const NoDataYet = ({ text }: {
    text?: string
}) => {
    return (
        <div className="bg-black opacity-50 p-5 my-2 rounded-lg w-full flex items-center justify-center min-h-28">
            <p className="text-white">{text || "No data yet"}</p>
        </div>
    );
}
export default NoDataYet