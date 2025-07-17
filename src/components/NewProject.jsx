import { useRef } from "react"
import Input from "./InputFild.jsx"
import Model from "./Model.jsx";

export default function NewProject({onAdd}) {

    const model = useRef;

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
    
         const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
            model.current.open();
            return
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })

    }





    return (
        <>
            <Model btnCaption="close">
                <h2 className="text-red-500" >Input invalid</h2>
                <p className="text-red-500" >Check your input</p>
            </Model>
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
                            font-bold cursor-pointer" onClick={handleSave} >Save</button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label="Title" />
                    <Input ref={description} label="Description" textare />
                    <Input ref={dueDate} label="DueDate" type="date" />
                </div>
            </div>
        </>
    )
}