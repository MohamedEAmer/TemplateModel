// the creation of the modal or its importing will be here to be observed
import Button from "./Button.jsx"
export default function TamplateModal(){
    function handleDownload(){
        var a = document.createElement('a');
        a.href = '/data/model4.pdf';
        a.download = 'model4.pdf';
        a.click();
        
    }
    return(
        <div>
            <h2 className="text-2xl font-bold text-stone-600 mb-4">Your Modal is Ready </h2>
            <embed className="mb-4" src="/data/model4.pdf" type="application/pdf" width="100%" height="600px" />
            <Button onClick={handleDownload} >Download Your Tamplate Modal</Button>
        </div>
    )
}