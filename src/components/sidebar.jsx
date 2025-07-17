import Button from "./Button.jsx"
export default function Sidebar({ onStartAddProject, projects , onSelectedProject}) {
    console.log(">>>>>>>>>>>>>>>addProject", onStartAddProject);

    return (
        <>
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your project</h2>
                <div>
                    <Button onClick={onStartAddProject} >+ Add Project</Button>
                </div>
                <ul>
                    {projects.map((project) =>
                        <li key={project.id}>
                            <button className="w-full text-left py-2 px-1 rounded-md my-1 text-stone-400
                             hover:text-stone-200 hover:bg-stone-800" onClick={() => onSelectedProject(project.id)} >{project.title}</button>
                        </li>)}
                </ul>
            </aside>
        </>
    )
}