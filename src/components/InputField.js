import React, { useState } from 'react';


const InputField = ({ label, type, name, placeholder, onChange }) => {
const [value, setValue] = useState('');

const handleChange = (e) => {
setValue(e.target.value);
onChange(name, e.target.value);
};

return (
<div className="input-field">
<label>{label}</label>
<input
type={type}
name={name}
value={value}
placeholder={placeholder}
onChange={handleChange}
/>
</div>
);

};


export default InputField;