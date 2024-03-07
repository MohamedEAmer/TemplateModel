import { forwardRef } from "react"
const Input= forwardRef(function Input({label, ...props}, ref){
    return <p className="flex flex-col gap1 my-4">
        <label className=" text-sm font-bold uppercase text-stone-500">{label}</label>
        <input ref={ref} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 foucs:outline-none foucs:border-stone-600" { ...props}/>
    </p>
});

export default Input