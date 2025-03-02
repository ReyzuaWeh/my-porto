import { InputProps } from "./AtomsParamsType"
const Input = ({
    id,
    type,
    value,
    onChange,
    placeholder,
    required,
    classNameInput: className
}: InputProps) => {
    return (
        <>
            <input
                required={required}
                id={id}
                type={type}
                {...(type !== 'file' ? { value: value } : {})}
                onChange={onChange}
                placeholder={placeholder}
                className={className ||
                    `
                bg-gray-800 text-white border w-full border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2
                focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition duration-200
                `
                }
            />
            {type === "file" && (value ? (
                <a href={value as string} target="_blank" className="text-indigo-200 opacity-75 text-xs">View File</a>
            ) : <span className="text-indigo-200 opacity-75 text-xs">No file attached</span>)}
        </>
    )
}
export default Input