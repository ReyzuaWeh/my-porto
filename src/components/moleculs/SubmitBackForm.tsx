import Button from "../atoms/Button";
const SubmitBackForm = () => {
    return (
        <div className="w-full flex justify-between gap-2">
            <Button
                type="button"
                label={"Back"}
                onClick={() => window.history.back()}
                classNameButton={"bg-red-500 hover:bg-red-700 rounded-lg py-2 px-4 text-red-200 font-semibold transition duration-200"}
            />
            <Button
                type="submit"
                label={"Submit"}
            />
        </div>
    )
}
export default SubmitBackForm