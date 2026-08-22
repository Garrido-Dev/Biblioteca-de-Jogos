
export default function textInput({value, setValue, label, id}){

    return (
        <div>
        <label htmlFor={id}>{label}: </label>

        <input
          type="text"
          name={id}
          id={id}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    )
}