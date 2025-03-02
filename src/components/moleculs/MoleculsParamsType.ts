import { InputProps, LabelProps, TextAreaProps } from "../atoms/AtomsParamsType";

interface InputLabelProps extends InputProps, LabelProps {
    classNameInputField?: string
}
interface TextAreaLabelProps extends TextAreaProps, LabelProps {
    classNameInputField?: string
}
interface SubmitBackProps {
    cancelLabel?: string;
    onclickCancel?: () => void;
}
export type { InputLabelProps, SubmitBackProps, TextAreaLabelProps };

