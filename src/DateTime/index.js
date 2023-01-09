import { useCurrentDate } from "./useCurrentDate";
import { StyledDate } from "./styled";

const Clock = () => {
    const date = useCurrentDate();
  
    return (
      <StyledDate>
        Dziś jest: 
        {(date)}
      </StyledDate>
    );
  };
  
  export default Clock;

