import React from "react";
type FormInputSelect={
    label: string
    name: string
    value: string
    dropdown: string[]
    onChange: (event: React.ChangeEvent<HTMLSelectElement>)=>void
}

const FormInputSelect = (props: FormInputSelect) =>{
    return(
        <>
            <div>
                <label >{props.label}</label>
                <br/>
                <select className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 focus:shadow-outline" name={props.name} value={props.value} onChange={props.onChange} >
                    {
                        props.dropdown.map((ele)=>{
                            return(
                                <option value={ele} key={ele}> {ele} </option>
                            )
                        }) 
                    }
                </select>
                <br/><br/>
            </div>
        </>
    )
}

export default FormInputSelect;