import Label from "../atoms/Label"
import TextArea from "../atoms/TextArea"
import { TextAreaLabelProps } from "./MoleculsParamsType"

const TextAreaField = ({
    id,
    rows,
    value,
    onChange,
    placeholder,
    classNameTextArea,
    htmlFor,
    text = "Label",
    classNameLabel,
    classNameInputField: className
}: TextAreaLabelProps) => {
    return (
        <div
            className={className ||
                `flex p-2 flex-col w-full`
            }
        >
            <Label
                htmlFor={htmlFor}
                text={text}
                classNameLabel={classNameLabel}
            />
            <TextArea
                id={id}
                rows={rows}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                classNameTextArea={classNameTextArea}
            />
        </div>
    )
}
export default TextAreaField