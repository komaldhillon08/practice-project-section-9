import { useRef } from "react"
import Input from "./InputFild.jsx"
export default function NewProject() {

    const model = useRef ; 

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enterTitle = title.current.value ; 
        const enterDescription = description.current.value ; 
        const enterDueDate = dueDate.current.value ; 

        
    }





    return (
        <>
            <div className="w-[32rem] mt-16">
                <menu className=" flex items-center justify-end gap-4 ">
                    <li>
                        <button
                            className="bg-stone-600 text-stone-50 py-1 px-4 rounded-md 
                            font-bold cursor-pointer">Cancle</button>
                    </li>
                    <li>
                        <button
                            className="bg-stone-600 text-stone-50 py-1 px-4 rounded-md 
                            font-bold cursor-pointer">Save</button>
                    </li>
                </menu>
                <div>
                    <Input label="Title" />
                    <Input label="Description" textare />
                    <Input label="DueDate" type="date" />
                </div>
            </div>
        </>
    )
}