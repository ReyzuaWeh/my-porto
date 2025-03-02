interface FormTemplateProps {
    title?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>
    children: React.ReactNode;
    action?: string | ((formData: FormData) => void | Promise<void>)
}
export type { FormTemplateProps };
