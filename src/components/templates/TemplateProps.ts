import { SubmitBackProps } from "../moleculs/MoleculsParamsType";

interface FormTemplateProps extends SubmitBackProps {
    title?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>
    children: React.ReactNode;
    action?: string | ((formData: FormData) => void | Promise<void>)
}
export type { FormTemplateProps };
