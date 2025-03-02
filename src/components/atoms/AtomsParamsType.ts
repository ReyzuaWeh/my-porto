interface InputProps {
    id?: string
    type?: React.HTMLInputTypeAttribute
    value?: string | number | readonly string[] | undefined
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    placeholder?: string
    required?: boolean
    classNameInput?: string | null
}
interface TextAreaProps {
    id?: string
    rows?: number
    value?: string | number | readonly string[] | undefined
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
    placeholder?: string
    classNameTextArea?: string | null
}
interface LabelProps {
    htmlFor?: string
    text?: string
    classNameLabel?: string | null
    isrequired?: boolean
}
interface ButtonProps {
    label: string;
    onClick?: () => void;
    classNameButton?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

export type { ButtonProps, InputProps, LabelProps, TextAreaProps }

