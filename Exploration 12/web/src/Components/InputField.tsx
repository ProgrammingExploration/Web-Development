import React from 'react';

interface Props {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<Props> = ({ 
    placeholder,
    value,
    onChange
 }) => {
    return (
        <div>
            <input 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField;