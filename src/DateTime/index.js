import { useCurrentDate } from "./useCurrentDate";
import { useFormatedDate } from "./formatedDate";
import { useFormatedRatesDate } from "./formatedDate";
import { StyledDate } from "./styled";

const Clock = () => {
    const date = useCurrentDate();
    const formatedDate = useFormatedDate();
    return (
      <StyledDate>
        Dziś jest:&nbsp;
        {formatedDate(date)}
      </StyledDate>
    );
  };
 export const RatesDate = () => {
    const date = useCurrentDate();
    const formatedDate = useFormatedRatesDate();
    return (
      <StyledDate>
        Kursy walut aktualne na dzień:&nbsp;
        {formatedDate(date)}
      </StyledDate>
    );
  };
  
  export default Clock;

