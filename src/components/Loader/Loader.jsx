import { ThreeDots } from "react-loader-spinner";
import colors from "../../constants/colors";
export default function Loader(){
  return(
    <ThreeDots
      height="80" 
      width="80" 
      radius="9"
      color={`${colors.neutral}`} 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}    
    />
  )
}