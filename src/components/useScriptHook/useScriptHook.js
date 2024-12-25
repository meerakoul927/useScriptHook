import React , {useState , useEffect} from 'react'

function useScriptHook(src) {

    const [status , setStatus] = useState(src ? 'loading' : 'error');
    console.log("@@data present in document body",document.body);

    useEffect(()=>{
        if(!src){
             setStatus("idle");
             return;
        }
        // now check whether the script with same src is already present in your code
        let script =  document.querySelector(`script[src="${src}"]`);
        if(script){
            console.log("script data status" , script.getAttribute('data-status'));
              setStatus(script.getAttribute('data-status'));
        }
        else{
               script = document.createElement('script');
              script.src = src;
              script.async = true;
              script.setAttribute('data-status' , 'loading');

              // we will append it inside ur body 
              document.body.appendChild(script);

              const checkScriptStatus = (event) =>{
                 script.setAttribute('data-status' , event.type === 'load' ? 'ready' : 'error');
              }
              // to check whether the script is loaded properly 
              script.addEventListener('load',checkScriptStatus);
              script.addEventListener('error',checkScriptStatus);
        }

        // update the status of ur state
        const setStateFromEvent = (event) =>{
            setStatus(event.type === 'load' ? 'ready1' : 'error');
        }
        script.addEventListener('load',setStateFromEvent);
        script.addEventListener('error',setStateFromEvent);
        
        

        // clean up of added listenrs
        if(script){
             return () =>{
                  script.removeEventListener('load',setStateFromEvent);
                  script.removeEventListener('error',setStateFromEvent);
             }
        }
    },[src]);
    return status;  
  
}
export default useScriptHook