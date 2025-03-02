import image404 from "../assets/404.png";
const Page404 = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-tr 
            from-gray-600 via-indigo-700 to-fuchsia-800"
        >
            <img src={image404} className="w-full max-w-md" alt="" />
        </div>
    );
}
export default Page404