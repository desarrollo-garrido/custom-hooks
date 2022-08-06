import {useState} from 'react';

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const handleReset = ()=>{
        setFormState(initialForm)
    }

    const onInputChange = ({target}) => {
     
        setFormState({...formState, [target.name]: target.value})
    }
    return {
        ...formState, handleReset, onInputChange
    }
}

