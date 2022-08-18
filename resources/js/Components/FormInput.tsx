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
                <label className="block font-bold mt-3 pr-4 pl-10">{props.label}</label>
                <br/>
                {
                    <input className="border-2 border-indigo-500/75 w-3/5 py-1 mx-10 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
                }
                <br/><br/>
            </div>
        </>
    )

}

export default FormInput;