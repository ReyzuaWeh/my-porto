import { TextAreaProps } from "./AtomsParamsType"

const TextArea = ({
    id,
    rows,
    value,
    onChange,
    placeholder,
    classNameTextArea: className
}: TextAreaProps) => {
    return (
        <textarea
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className={
                className ||
                `
          bg-gray-800 text-white border border-gray-700 rounded-lg p-2
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          hover:border-indigo-400 transition duration-200
        `
            }
        />
    )
}
export default TextArea