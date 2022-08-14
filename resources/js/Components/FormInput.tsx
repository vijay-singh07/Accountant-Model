import React from "react";
type FormInput={
    label: string
    type: string
    name: string 
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

const FormInput = (props: FormInput) =>
{
    return(
        <>
            <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{props.label}</label>
                <br/>
                {
                    <input className="shadow appearance-none border rounded w-half py-2 px-3 mx-5 my-5 text-gray-700 focus:shadow-outline" type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
                }
                <br/><br/>
            </div>
        </>
    )

}

export default FormInput;