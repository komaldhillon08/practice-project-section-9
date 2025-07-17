import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx'
import NewProject from './components/NewProject.jsx'

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId : undefined ,
    project : [] ,
  })

  // add project function 
  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId : null
      }
    })
  }
  // add project function 
  function handleStartCancleProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId : undefined
      }
    })
  }
  let context ;
console.log(projectState);

  if (projectState.selectedProjectId === null) {
    context = <NewProject />
  }
  else if (projectState.selectedProjectId === undefined) {
    context = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }


  return (
    <>
      <main className='flex gap-8 my-8 h-screen'>
      <Sidebar onStartAddProject={handleStartAddProject}/>

      {/* <NoProjectSelected/> */}
      {/* <NewProject /> */}
      {context}
        
      </main>
    </>
  )
}

export default App
