import { useEffect } from "react"


 const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Resale Zone`;
    },[title])
}
export default useTitle;
