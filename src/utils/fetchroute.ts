const fetchorigin = window.location.protocol === "https:" ? "https://my-data-porto.vercel.app/" : "http://localhost:8000/";
const FetchRouter = {
    Main: fetchorigin,
    Projects: fetchorigin + "projects",
    Certifications: fetchorigin + "certifications",
    Login: fetchorigin + "login",
    Register: fetchorigin + "register",
    Profile: fetchorigin + "profile",
}
export default FetchRouter;