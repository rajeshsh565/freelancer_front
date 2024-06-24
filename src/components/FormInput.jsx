const FormInput = ({name, placeholder, disabled}) => {
  return (
    <input
                    type="text"
                    id={name}
                    name={name}
                    className="w-25 h-50 text-center"
                    placeholder={placeholder}
                    disabled={disabled}
                  />
  )
}
export default FormInput