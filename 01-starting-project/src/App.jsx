import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
  const [projectsState,setProjectsState]= useState({
    selectProjectId: undefined,
    projects:[],
  });

  function handleDeletProject(){
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectProjectId: undefined,
        projects:prevState.projects.filter((project)=> project.id !==prevState.selectProjectId)
      }
    });

  }




  function handleSelectProject(id){
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectProjectId: id,
      }
    });

  }

  function handleStartAddProject() {
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectProjectId: null,
      }
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectProjectId: undefined,
      }
    });

  }

  function handleAddProject(projectData){
    setProjectsState(prevState =>{
      const newProject ={
        ...projectData,
        id:"#"+(Math.floor(Math.random() * 10000) + 1),
      };
      return{
        ...prevState,
        selectProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }


  const selectedProject =projectsState.projects.find(project => project.id ===projectsState.selectProjectId )

  let content =<SelectedProject project={selectedProject} onDelete={handleDeletProject} />;
  if (projectsState.selectProjectId===null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />

  } else if (projectsState.selectProjectId===undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}
       projects={projectsState.projects}
       onSelcetProject={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
