import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SecondLayout from "../components/common/SecondLayout";
import InputField from "../components/moleculs/InputField";
import Form from "../components/templates/Form";
import FetchRouter from "../utils/fetchroute";
import { Certifications } from "../utils/fetchTypes";
import { DataRoute } from "../utils/OurRoute";

const FormCertification = () => {
    const { id } = useParams()
    const [certification, setCertification] = useState({} as Certifications);
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setCertification((prev) => ({
            ...prev,
            [id]: value,
        }));
    };
    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const { id } = e.target;
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setCertification((prev) => ({
                ...prev,
                [`${id}_file`]: reader.result as string,
                [`${id}_name`]: file.name,
            }));
        };
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(FetchRouter.Certifications + "/" + (certification.id || ""), {
            method: certification.id ? "PATCH" : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(certification),
        })
            .then((response) => {
                if (!response.ok) {
                    throw response;
                }
                response.json()
                alert("Success")
            })
            .catch((err) => alert(err));
    }
    useEffect(() => {
        if (id) {
            fetch(FetchRouter.Certifications + `/${id}`)
                .then((response) => response.json())
                .then((json) => setCertification(json));
        }
    }, [id]);
    return (
        <SecondLayout>
            <Form
                onSubmit={onSubmit}
                title="Form Sertifikasi"
                {...(!certification.id ? {} : {
                    cancelLabel: "Delete",
                    onclickCancel: () => {
                        fetch(FetchRouter.Certifications + `/${certification.id}`, {
                            method: 'DELETE'
                        }).then(() => {
                            window.location.href = DataRoute.Dashboard
                        }).catch(err => alert(err))
                    }
                })}
            >
                <InputField
                    type="text"
                    htmlFor="name"
                    text="Nama Sertifikasi"
                    id="name"
                    isrequired
                    required
                    value={certification?.name}
                    onChange={onChange}
                />
                <InputField
                    type="text"
                    htmlFor="institution"
                    text="Institusi"
                    id="institution"
                    isrequired
                    required
                    value={certification?.institution}
                    onChange={onChange}
                />
                <InputField
                    type="number"
                    htmlFor="obtained_year"
                    text="Tahun Diperoleh"
                    id="obtained_year"
                    isrequired
                    required
                    value={certification?.obtained_year}
                    onChange={onChange}
                />
                <InputField
                    type="text"
                    htmlFor="link"
                    text="Link"
                    id="link"
                    value={certification?.link}
                    onChange={onChange}
                />
                <InputField
                    type="file"
                    htmlFor="image"
                    text="Foto Sertifikasi"
                    id="image"
                    value={certification?.image}
                    onChange={onChangeFile}
                />
                <InputField
                    type="text"
                    htmlFor="detail"
                    text="Detail"
                    id="detail"
                    value={certification?.detail || ""}
                    onChange={onChange}
                />
            </Form>
        </SecondLayout>
    )
}
export default FormCertification;