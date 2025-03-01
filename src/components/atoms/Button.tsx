import { ButtonProps } from "./AtomsParamsType";

const Button = ({
    label,
    onClick,
    classNameButton: className,
    type = "button",
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className || `
            px-4 py-2 rounded-lg font-semibold transition duration-200
            text-white border border-indigo-500 hover:border-indigo-400
            focus:outline-none focus:ring-2 focus:ring-indigo-400
            ${disabled ? "bg-gray-600 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500"}
        `}
        >
            {label}
        </button>
    );
};

export default Button;
