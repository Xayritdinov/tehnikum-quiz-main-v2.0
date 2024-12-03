export const Input = ({label, type="radio", name, id, placeholder, errorMessage, onInput, autocomplete, ...props}) => {
   
  return (
      <label className="input-wrapper" htmlFor={id}>
        {label}
        <input type={type} name={name} id={id} placeholder={placeholder} onInput={onInput} autoComplete={autocomplete} required {...props} />
        <span id="error-message">{errorMessage}</span>
      </label>
  )
}