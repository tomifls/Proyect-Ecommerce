import { useState } from "react";

function widthValidation(WrappedComponent) {
        
        return function EnhancedComponent(props) {

            const [errors, setErrors] = useState({});

            const validate = (fields) => {
                let newErrors = {};
                for (let field in fields) {
                    if (!fields[field]) {
                        newErrors[field] = "Este campo es REQUERIDO"
                    }
                }
                setErrors(newErrors)
                return Object.keys(newErrors).length === 0;
            }
            const handleSubmit = (e) => {
                e.preventDefault();
                const isValid = validate(props.fields)
                if (isValid){
                    props.onSubmit()
                }
            }

            return (
                <WrappedComponent
                {...props}
                errors={errors}
                handleSubmit={handleSubmit}
                />
            );
        };
    };
export default widthValidation;