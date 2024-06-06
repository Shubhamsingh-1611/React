import { useState } from "react"
import Input from "./components/Input"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {
   const [amount,setAmount] = useState()
   const [changedAmmount,setChangeAmount] = useState()
   const [from,setFrom]= useState("usd")
   const [to,setTo]=useState("inr")

   const currencyInfo = useCurrencyInfo(from)
   const option = Object.keys(currencyInfo)

   const swap =()=>{
    setFrom(to);
    setTo(from);
    setAmount(changedAmmount);
    setChangeAmount(amount);
   }
  
   const convert=()=>{
    setChangeAmount(amount*currencyInfo[to])
   }

  return (
    <>
    <div className="h-screen w-[100%] flex justify-center items-center">
      <div className=" h-[300px] bg-black opacity-[0.7] w-[50%] flex flex-col justify-center items-center">
      <Input amount={amount} onAmountchange={(amount)=>(setAmount(amount))}
      onCurrenctChange={(curr)=>(setFrom(curr))} currencyOption={option} lable={from} selectCurrency={from}
      />
      <button onClick={swap} className="bg-yellow-500 h-[25px] w-30 rounded-xl mb-2 hover:bg-red-800 hover:text-white">swap</button> 
      <Input amount={changedAmmount} onAmountchange={(amount)=>(setChangeAmount(amount))}
      onCurrenctChange={(curr)=>(setTo(curr))} currencyOption={option} lable={to} selectCurrency={to}/>
      <br/>
      <button className="bg-yellow-500 h-[30px] w-56 rounded-xl mb-2 hover:bg-red-800 hover:text-white" onClick={convert}>Connvert {from.toUpperCase()} to {to.toLowerCase()}</button>
      
      </div>
      </div>
    </>
  )
}

export default App
