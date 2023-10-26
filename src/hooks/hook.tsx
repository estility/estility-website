import { useState } from "react"

export const useDisplayForm = () => {
    const [displayForm, setDisplayForm] = useState(false)
    
    const showForm = () => {
        setDisplayForm(true);
      };

      const hideForm = () => {
        setDisplayForm(false);
      };
  return {displayForm, hideForm, showForm}
}