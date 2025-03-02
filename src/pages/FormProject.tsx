import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SecondLayout from "../components/common/SecondLayout"
import InputField from "../components/moleculs/InputField"
import TextAreaField from "../components/moleculs/TextAreaField"
import DynamicInputList from "../components/organism/DynamicInputList"
import Form from "../components/templates/Form"
import FetchRouter from "../utils/fetchroute"
import { Project } from "../utils/fetchTypes"
import { DataRoute } from "../utils/OurRoute"

const FormProject = () => {
    const { id } = useParams()
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
        fetch(FetchRouter.Projects + "/" + (dataForm.id || ""), {
            method: id ? "PATCH" : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForm)
        })
            .then(response => response.json())
            .then(() => alert("Success")).catch(err => alert(err))
    }
    useEffect(() => {
        if (id) {
            fetch(FetchRouter.Projects + `/${id}`)
                .then(response => response.json())
                .then(json => setDataForm(json))
        }
    }, [id])
    return (
        <SecondLayout>
            <Form
                onSubmit={onSubmit}
                title="Form Proyek"
                {...(!dataForm.id ? {} : {
                    cancelLabel: "Delete",
                    onclickCancel: () => {
                        fetch(FetchRouter.Projects + `/${dataForm.id}`, {
                            method: 'DELETE'
                        }).then(() => {
                            window.location.href = DataRoute.Dashboard
                        }).catch(err => alert(err))
                    }
                })}
            >
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
                    value={dataForm?.image || ""}
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
                    value={dataForm.date ? dataForm.date.toString().split("T")[0] : ""}
                    onChange={onChange}
                />
                <InputField
                    type="url"
                    htmlFor="link"
                    text="Link Proyek"
                    id="link"
                    value={dataForm?.link || ""}
                    onChange={onChange}
                />
                <DynamicInputList
                    title="Spesifikasi Proyek"
                    values={dataForm.specification || []}
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
                    value={dataForm?.detail || ""}
                    onChange={onChange}
                />
            </Form>
        </SecondLayout>
    )
}

export default FormProject
