import React , {useState} from 'react'

function useScriptHook(src) {

    const [status , setStatus] = useState(src ? 'loading' : 'error');
    return status;  
  
}
export default useScriptHook