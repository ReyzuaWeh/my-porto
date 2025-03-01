import { InputProps, LabelProps, TextAreaProps } from "../atoms/AtomsParamsType";

interface InputLabelProps extends InputProps, LabelProps {
    classNameInputField?: string
}
interface TextAreaLabelProps extends TextAreaProps, LabelProps {
    classNameInputField?: string
}
export type { InputLabelProps, TextAreaLabelProps };
