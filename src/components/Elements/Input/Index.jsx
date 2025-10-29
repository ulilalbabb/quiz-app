import Input from "./Input";
import Label from "./LabelForm";

const InputForm = (props) => {
    const { type, placeholder, name, onChange, value, label } = props
    return (
        <div className="mb-4">
            <Label htmlFor={name}>{label}</Label>
            <Input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                id={name}
            />
        </div>
    )
}

export default InputForm