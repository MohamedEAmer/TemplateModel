import TamplateModal from "./TamplateModal.jsx";

export default function SelectedProject({project, onDelete }){


    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">Project Number {project.id}</h1>
            <menu className=" flex items-center justify-end gap-4 my-4">
            <li><button onClick={onDelete} className="text-stone-600 hover:text-stone-950">Delet</button></li>
            </menu>
            </div>
            <p className="text-stone-600">The number of your model MCQ questions is : {project.myMcq}</p>
            <p className="text-stone-600">The number of your model TF questions is : {project.myTF}</p>
            <p className="text-stone-600">The number of your model TEXT questions is : {project.myText}</p>
            
        </header>
        <TamplateModal></TamplateModal>
    </div>
}