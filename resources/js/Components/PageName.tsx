import React from "react";
type PageNameProps={
    title: string
}

 const PageName = (props: PageNameProps) =>{
    return(
        <>
            <h1 className="text-xl text-center py-10 font-bold">{props.title}</h1>
        </>
    )
}

export default PageName

