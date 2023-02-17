import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { Load } from "./styled";

const LoadingScreen = () =>{
const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 2000)
}, [])
return(
<Load>
<FadeLoader
 color={'#F37A24'}
 loading={loading}
 size={30}
/> 
</Load>
    
)
}
export default LoadingScreen;
