import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { DynamicInputListParams } from "./OrganismsParamsType";
const DynamicInputList = ({
    title,
    values,
    onChangeDatalist: handleChange,
    buttonAddHandler: addInput,
    className,
    buttonRemoveHandler: removeInput,
}: DynamicInputListParams) => {
    return (
        <div className="p-2 w-full">
            {title && <h2 className={className || "text-indigo-500 mb-1"}>{title}</h2>}
            {values.map((value, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                    <Input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange && handleChange(index, e.target.value)}
                        placeholder={`${title} #${index + 1}`}
                    />
                    <Button
                        label="❌"
                        onClick={() => removeInput && removeInput(index)}
                        classNameButton="bg-red-200 text-white px-3 py-2 hover:bg-red-300 rounded disabled:opacity-50 transition duration-200"
                    />
                </div>
            ))}

            <Button
                type="button"
                label="Tambah"
                onClick={addInput}
            />
        </div>
    );
};

export default DynamicInputList;
