import React, { useState } from 'react';

import InputField from './InputField';

import CurrencySelector from './CurrencySelector';


const ContactForm = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
message: '',
currency: 'USD',
amount: '',
});

const handleInputChange = (name, value) => {
setFormData({ ...formData, [name]: value });
};

const handleCurrencyChange = (currency, amount) => {
setFormData({ ...formData, currency, amount });
};

const handleSubmit = async (e) => {
e.preventDefault();
const data = new FormData();
Object.keys(formData).forEach((key) => data.append(key, formData[key]));

try {
const response = await fetch('https://example.com/api/submit', {
method: 'POST',
body: data,
});

if (response.ok) {
alert('Форма успешно отправлена!');
setFormData({
name: '',
email: '',
message: '',
currency: 'USD',
amount: '',
});
} else {
alert('Ошибка при отправке формы.');
}
} catch (error) {
console.error('Ошибка:', error);
alert('Ошибка при отправке формы.');
}
};

return (
<form className="contact-form" onSubmit={handleSubmit}>
<h2>Обмен валюты</h2>
<InputField
label="Имя"
type="text"
name="name"
placeholder="Введите ваше имя"
onChange={handleInputChange}
/>
<InputField
label="Email"
type="email"
name="email"
placeholder="Введите ваш email"
onChange={handleInputChange}
/>
<InputField
label="Сообщение"
type="text"
name="message"
placeholder="Введите сообщение"
onChange={handleInputChange}
/>
<CurrencySelector onCurrencyChange={handleCurrencyChange} />
<button type="submit">Отправить заявку</button>
</form>
);

};


export default ContactForm;