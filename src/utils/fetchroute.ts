const fetchorigin = window.location.protocol === "https:" ? "http://localhost:8000/" : "https://my-data-porto.vercel.app/";
const FetchRouter = {
    Main: fetchorigin,
    Projects: fetchorigin + "projects",
    Certifications: fetchorigin + "certifications",
    Login: fetchorigin + "login",
    Register: fetchorigin + "register",
    Profile: fetchorigin + "profile",
}
export default FetchRouter;