const Input = (props) => {
    const { type, placeholder, name, onChange, value } = props
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            id={name}
            className="text-sm border rounded-lg w-full py-2 px-3 placeholder: opacity-50"
            autoComplete="off"
        />
    )
}

export default Input