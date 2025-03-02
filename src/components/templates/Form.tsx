import SubmitBackForm from "../moleculs/SubmitBackForm"
import { FormTemplateProps } from "./TemplateProps"

const Form = ({
    title = "Form",
    onSubmit,
    children,
    action,
}: FormTemplateProps) => {
    return (
        <form
            action={action}
            onSubmit={onSubmit}
            className={`bg-gray-900 rounded shadow-xl shadow-fuchsia-600 min-h-[95vh] justify-between p-2 flex flex-col max-w-lg self-center my-auto items-center`}
        >
            <h1 className="text-4xl font-semibold text-white tracking-wide">{title}</h1>
            <div className="">
                {children}
            </div>
            <SubmitBackForm />
        </form>
    )
}
export default Form