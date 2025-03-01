import Input from "../atoms/Input"
import Label from "../atoms/Label"
import { InputLabelProps } from "./MoleculsParamsType"

const InputField = ({
    id,
    type,
    value,
    onChange,
    placeholder,
    classNameInput,
    htmlFor,
    text = "Label",
    required,
    isrequired,
    classNameLabel,
    classNameInputField: className
}: InputLabelProps) => {
    return (
        <>
            <div
                className={className ||
                    `w-full p-2 grid sm:grid-cols-[1fr_2fr] grid-cols-1 items-center`
                }
            >
                <Label
                    htmlFor={htmlFor}
                    text={text}
                    classNameLabel={classNameLabel}
                    isrequired={isrequired}
                />
                <Input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    classNameInput={classNameInput}
                />
            </div>
        </>
    )
}
export default InputField