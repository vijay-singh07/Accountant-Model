import React from "react";
type PageNameProps={
    title: string
}

 const PageName = (props: PageNameProps) =>{
    return(
        <>
            <h1 className="text-xl my-10 font-bold underline">{props.title}</h1>
        </>
    )
}

export default PageName

