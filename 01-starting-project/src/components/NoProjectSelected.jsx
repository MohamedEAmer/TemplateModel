import noModelImg from  '../assets/no-projects.png'
import Button from './Button.jsx'
export default function NoProjectSelected({onStartAddProject}){
    return <div className="mt-24 text-center w-2/3">
        <img className='w-16 h-16 opject-contain mx-auto' src={noModelImg} alt="Empty Models" />
        <h2 className='text-xl font-bold text-stone-500 my-4'>Your Template Will Be Here ......</h2>
        <p className='text-stone-400 mb-4'>Select a Model or Create a New One</p>
        <p className='mt-8'>
            <Button onClick={onStartAddProject}>Start a New Model</Button>
        </p>

    </div>

}