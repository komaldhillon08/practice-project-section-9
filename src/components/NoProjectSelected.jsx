import noProjectImg from "../assets/no-projects.png"
import Button from "./Button"
export default function NoProjectSelected({onStartAddProject}) {
    return (
        <>
            <div className="mt-24 text-center w-2/3">
                <img src={noProjectImg} className="w-16 h-16 object-contain mx-auto" alt="" />
                <h2 className="font-bold my-4 text-stone-500 text-xl ">No Project Selected</h2>
                <p className="mb-4 text-stone-400">Select a project or get started with a new one</p>
                <p className="mt-8">
                    <Button onClick={onStartAddProject} >Create a new project</Button>

                </p>
            </div>
        </>
    )
}