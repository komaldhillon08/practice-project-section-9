import { forwardRef  } from "react"
export default forwardRef (function Input({textare, label, DueDate , ...props} , ref ) {

    let inputStyling = "bg-stone-200 text-stone-600 focus:border-stone-600 rounded-md w-full p-1 border-b-2"

    return (
        <>
            <p className="flex flex-col gap-1 my-4 ">
                <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
                {textare ?
                    <textarea
                        ref={ref}
                        className={inputStyling}
                        {...props}
                    /> :
                    <input
                        ref={ref}
                        className={inputStyling}
                        {...props}
                    />}
            </p>
        </>
    )
})