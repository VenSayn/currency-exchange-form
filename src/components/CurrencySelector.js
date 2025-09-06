import React, { useState } from 'react';


const CurrencySelector = ({ onCurrencyChange }) => {
const [currency, setCurrency] = useState('USD');
const [amount, setAmount] = useState('');

const handleCurrencyChange = (e) => {
setCurrency(e.target.value);
onCurrencyChange(e.target.value, amount);
};

const handleAmountChange = (e) => {
setAmount(e.target.value);
onCurrencyChange(currency, e.target.value);
};

return (
<div className="currency-selector">
<label>Валюта</label>
<select value={currency} onChange={handleCurrencyChange}>
<option value="USD">USD</option>
<option value="EUR">EUR</option>
<option value="RUB">RUB</option>
</select>
<label>Сумма</label>
<input
type="number"
value={amount}
onChange={handleAmountChange}
placeholder="Введите сумму"
/>
</div>
);

};


export default CurrencySelector;