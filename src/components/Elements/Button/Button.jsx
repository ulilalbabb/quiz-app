const Button = (props) => {
  const { 
    variant, 
    children,
    type= "button",
    onClick= () => {} 
    } = props;
  return (
    <button
        className={`${variant} rounded-lg cursor-pointer`}
        type={type}
        onClick={onClick}
        >
            {children}
    </button>
  );
};

export default Button;
