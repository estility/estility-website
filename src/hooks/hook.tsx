import { useState } from "react"

export const useDisplayForm = () => {
    const [displayForm, setDisplayForm] = useState(false)
    
    const showForm = () => {
        console.log('hi')
        setDisplayForm(true);
      };

      const hideForm = () => {
        console.log('hi')
        setDisplayForm(false);
      };
  return {displayForm, hideForm, showForm}
}