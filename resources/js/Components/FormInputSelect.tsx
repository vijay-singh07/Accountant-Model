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
                <label className="block font-bold mt-3 pr-4 pl-10">{props.label}</label>
                <br/>
                <select className="bg-white border-2 border-indigo-500/75 w-fit py-1 mx-10 text-black-700 focus:outline-none focus:bg-white focus:border-purple-500" name={props.name} value={props.value} onChange={props.onChange} >
                    {
                        props.dropdown.map((e)=>{
                            return(
                                <option value={e} key={e}> {e} </option>
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