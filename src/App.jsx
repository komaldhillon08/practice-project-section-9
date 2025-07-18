import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx'
import NewProject from './components/NewProject.jsx'

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  })

  // add project function 
  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }
  // add project function 
  function handleStartCancleProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }
  let context;
  // console.log(projectState);

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId : id
      }
    })
  }


 function handleAndProject({ title, description, dueDate }) {
    setProjectState(prevState => {
      const projectId = Math.random()
      const newProject = {
        id: projectId,
        title,
        description,
        dueDate
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject]
      }
    })
  }


  if (projectState.selectedProjectId === null) {
    context = <NewProject onAdd={handleAndProject}  />
  }
  else if (projectState.selectedProjectId === undefined) {
    context = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }


  return (
    <>
      <main className='flex gap-8 my-8 h-screen'>

        <Sidebar onStartAddProject={handleStartAddProject} 
        projects={projectState.project} 
        onSelectedProject={handleSelectProject} />

        {/* <NoProjectSelected/> */}
        {/* <NewProject /> */}
        {context}

      </main>
    </>
  )
}

export default App
