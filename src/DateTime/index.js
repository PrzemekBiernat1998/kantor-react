import { useCurrentDate } from "./useCurrentDate";
import { useFormatedDate } from "./formatedDate";
import { StyledDate } from "./styled";

const Clock = () => {
    const date = useCurrentDate();
    const formatedDate = useFormatedDate();
    return (
      <StyledDate>
        Dziś jest: 
        {formatedDate(date)}
      </StyledDate>
    );
  };
  
  export default Clock;

