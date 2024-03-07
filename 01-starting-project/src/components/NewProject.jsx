import Button from "./Button.jsx";
import Input from "./Input.jsx"
import { useRef , useState , useEffect } from "react"
import Modal from "./Modal.jsx";
export default function NewProject({onAdd,onCancel}){
    const [filled , setFilled]=useState(0);
    const [isRunning , setIsRunning]=useState(false);
    const loadingModal =useRef();
    const modal = useRef();
    const mcq = useRef();
    const tf = useRef();
    const text = useRef();
    useEffect(()=>{
        if(filled < 100 && isRunning){
            setTimeout(()=>setFilled(prev => prev +=2),50)
        }

    },[filled,isRunning]);

    function handleLoad(){
        const mcqNumber=mcq.current.value;
        const tfNumber=tf.current.value;
        const textNumber=text.current.value;

        if(mcqNumber.trim() <0||tfNumber.trim() <0||textNumber.trim() <0){
            modal.current.open();
            return;
        }
        loadingModal.current.open();
        setIsRunning(true);
        useEffect();
    }


    function handleCreate(){
        const mcqNumber=mcq.current.value;
        const tfNumber=tf.current.value;
        const textNumber=text.current.value;
        // if(mcqNumber.trim() <0||tfNumber.trim() <0||textNumber.trim() <0){
        //     modal.current.open();
        //     return;
        // }
        onAdd({
            myMcq:mcqNumber,
            myTF:tfNumber,
            myText:textNumber,

        })

    }




    return(
    <>
    <Modal ref={loadingModal} onLoad={handleCreate} buttonCaption = "Ok">
        <div className="progressbar">
            <div style={{
                height:"100%",
                width:`${filled}%`,
                backgroundColor:"#44403C",
                transition:"width 0.5s"

            }}></div>
            <span className="progressPercent">{filled}%</span>
            
        </div>

    </Modal>
    <Modal ref={modal} buttonCaption = "Close">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Information</h2>
        <p className='text-stone-600 mb-4'>Please make sure to input valid Numbers for Qs</p>

    </Modal>
     <div className="w-[35rem] mt-16">
        <menu className=" flex items-center justify-end gap-4 my-4">
            <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleLoad} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Create</button></li>
        </menu>
        <div>
            <Input type="number" ref={mcq} label="MCQ Number"/>
            <Input type="number" ref={tf} label="T/F Number"/>
            <Input type="number" ref={text} label="Text-Q Number"/>
        </div>
    </div>
    </>)
}