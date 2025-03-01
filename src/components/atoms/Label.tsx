import { LabelProps } from "./AtomsParamsType"

const Label = ({
    htmlFor,
    text,
    isrequired,
    classNameLabel: className,
}: LabelProps) => {
    return (
        <label htmlFor={htmlFor} className={className || "text-indigo-500 mb-1"}>
            {text}{isrequired ? <span className="text-red-400"> *</span> : ""}
        </label>
    )
}
export default Label