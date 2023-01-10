export const useFormatedDate = () =>{
    const formatedDate = (date) => date.toLocaleString(undefined, {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      return formatedDate;
};