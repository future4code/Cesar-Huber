import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';

export const useProtectedPage = () => {
    const history = useHistory();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        console.log("Não está logado!!!");
        history.push("/login");
      }
    }, []);
  };

  // export const useForms = (clearForm) => {


  //   return {form, clearedForm, onChangeForm}
  // }