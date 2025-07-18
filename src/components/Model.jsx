import { useRef, forwardRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom"

export default forwardRef(function Model({ children, btnCaption, }, ref) {

    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                 dialog.current.showModal()

            }
        }
    })


    return createPortal(

        <dialog className="backdrop:bg-stone-900/90 m-auto w-1/4 p-2 rounded-md font-bold shadow-md" ref={dialog}>
            {children}
            <form method="dialog">
                <button className="text-red-500 py-1 px-5 my-2 rounded-md cursor-pointer border-1">{btnCaption}</button>
            </form>
        </dialog>, document.getElementById("model-root")


    )
})