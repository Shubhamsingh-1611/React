import React from 'react'

function Input({
    amount,
    onAmountchange,
    currency,
    onCurrenctChange,
    currencyOption=[],
    selectCurrency,
    lable,

}) {
  return (
    <div> 
        <lable for="input" className="absolute ">{lable}</lable>
        <input id="input" className="h-[80px] w-[400px] outline-none "type="number" value={amount} onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}/>
        <select className='h-[80px] w-[100px]' value={selectCurrency} onChange={(e)=>onCurrenctChange && onCurrenctChange(e.target.value)}> 

            {currencyOption.map((currency)=>(
                <option value={currency} key={currency}>{currency}</option>
            ))}

        </select>
      
    </div>
  )
}

export default Input
