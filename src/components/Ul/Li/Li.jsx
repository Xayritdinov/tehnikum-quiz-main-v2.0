export const Li = ({text, name, id, img=false, src, alt, onChange }) => {
  
  return (
        <li className="variant-wrapper">
            <input required type="radio" name={name} id={id} onChange={onChange} />
            <label htmlFor={id}>
                {img && src && <img src={src} alt={alt} />}
                {text}
            </label>
        </li>
  )
}
