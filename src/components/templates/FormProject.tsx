import { useState } from "react"
import { Project } from "../../utils/fetchTypes"
import InputField from "../moleculs/InputField"
import SubmitBackForm from "../moleculs/SubmitBackForm"
import TextAreaField from "../moleculs/TextAreaField"
import DynamicInputList from "../organism/DynamicInputList"

const FormProject = () => {
    const [dataForm, setDataForm] = useState<Project>({} as Project)
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setDataForm(prev => ({
            ...prev,
            [id]: value
        }));
    }
    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const { id } = e.target;
        if (!file) return;
        const reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onload = () => {
            setDataForm(prev => ({
                ...prev,
                [`${id}_file`]: reader.result as string, // Simpan sebagai string
                [`${id}_name`]: file.name
            }));
        };
    }
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => alert(json))
    }
    return (
        <form action="" onSubmit={onSubmit} className={`bg-gray-900 min-h-screen justify-center p-2 flex flex-col items-center`}>
            <h1 className="text-4xl font-semibold text-white tracking-wide">Form Proyek</h1>
            <InputField
                type="text"
                htmlFor="title"
                text="Judul Proyek"
                id="title"
                isrequired
                required
                value={dataForm?.title}
                onChange={onChange}
            />
            <InputField
                type="file"
                htmlFor="image"
                text="Foto Proyek"
                id="image"
                onChange={onChangeFile}
            />
            <InputField
                type="text"
                htmlFor="institution"
                text="Instansi"
                id="institution"
                isrequired
                required
                value={dataForm?.institution}
                onChange={onChange}
            />
            <InputField
                type="text"
                htmlFor="my_position"
                text="Posisi"
                id="my_position"
                isrequired
                required
                value={dataForm?.my_position}
                onChange={onChange}
            />
            <InputField
                type="date"
                htmlFor="date"
                text="Dimulai"
                id="date"
                isrequired
                required
                value={dataForm?.date}
                onChange={onChange}
            />
            <InputField
                type="url"
                htmlFor="link"
                text="Link Proyek"
                id="link"
                value={dataForm?.link}
                onChange={onChange}
            />
            <DynamicInputList
                title="Spesifikasi Proyek"
                values={dataForm?.specification || []}
                onChangeDatalist={(index, value) => {
                    setDataForm(prev => {
                        const specification = prev.specification ? [...prev.specification] : [];
                        specification[index] = value;
                        return {
                            ...prev,
                            specification
                        };
                    });
                }
                }
                buttonAddHandler={() => {
                    setDataForm(prev => ({
                        ...prev,
                        specification: prev.specification ? [...prev.specification, ""] : [""]
                    }));
                }
                }
                buttonRemoveHandler={(index) => {
                    setDataForm(prev => {
                        const specification = prev.specification ? [...prev.specification] : [];
                        specification.splice(index, 1);
                        return {
                            ...prev,
                            specification
                        };
                    });
                }
                }
            />
            <TextAreaField
                htmlFor="detail"
                text="Detail"
                id="detail"
                rows={2}
                value={dataForm?.detail}
                onChange={onChange}
            />
            <SubmitBackForm />
        </form>
    )
}

export default FormProject
