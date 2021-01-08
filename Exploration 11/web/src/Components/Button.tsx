import React from 'react';


interface Props {
    title: string;
    onClick: () => void;
    age?: number;
};

const Button: React.FC<Props> = ({ 
    onClick, 
    title,
    age 
}) => {
    // This is an option
    // if(age !== undefined) {
    //     return (
    //         <div>
    //             <button onClick={onClick}>{title}</button> <br />
    //             Age: {age}
    //         </div>
    //     );
    // }

    // return (
    //     <div>
    //         <button onClick={onClick}>{title}</button> <br />
    //     </div>
    // )

    // This is efficient
    // return (
    //     <div>
    //         <button onClick={onClick}>{title}</button> <br />
    //         {
    //             age !== undefined ? <div>
    //                 Age: {age}
    //             </div> : <div>Age is not provided</div>
    //         }
    //     </div>
    // )

    // const [element, setString] = useState<JSX.Element | null>(null);

    // useEffect(() => {
    //     if(age !== undefined) {
    //         setString(
    //             <div>
    //                 Age: {age}
    //             </div>
    //         )
    //     } else {
    //         setString(
    //             <div>
    //                 Age is not provided
    //             </div>
    //         )
    //     }
    // }, []);

    // return (
    //     <div>
    //         <button onClick={onClick}>{title}</button> <br />
    //         {element}
    //     </div>
    // )

    return(
        <div>
            <button onClick={onClick}>{title}</button>
        </div>
    )
};

export default Button;