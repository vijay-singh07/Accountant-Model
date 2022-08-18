import React from "react";
import jsPDF from "jspdf";
import QuickLinks from "../Components/QuickLinks";

const Receipt = ({editable}:any) =>{
    const generatePdf = () =>{
        let doc = new jsPDF("p","pt","a4");
        doc.html(document.querySelector("#receipt") as HTMLInputElement,{
            callback: function(pdf){
                pdf.save("Receipt.pdf");
            }
        });
    }
    return(
        <>
        <QuickLinks/>
            <div id="receipt">
                <h1 className="text-center py-10 font-bold">Download Receipt</h1>
                <br />
                <div className="mx-10">
                    <span><b>Description : &nbsp;</b> </span>
                    <span>{editable.description}</span>
                    <br />
                    <span><b>Status : &nbsp;</b> </span>
                    <span>{editable.status}</span>
                    <br />
                    <span><b>Type : &nbsp;</b> </span>
                    <span>{editable.type}</span>
                    <br />
                    <span><b>UTR : &nbsp;</b> </span>
                    <span>{editable.utr}</span>
                    <br />
                    <span><b>Invoice Number : &nbsp;</b> </span>
                    <span>{editable.invoice_number}</span>
                    <br />
                    <span><b>Amount : &nbsp;</b> </span>
                    <span> {editable.unit_amount*editable.unit_quantity}</span>
                    <br />
                    <span><b>Project : &nbsp;</b> </span>
                    <span>{editable.project}</span>
                    <br />
                </div>
            </div>
            <br />
            <button onClick={generatePdf} className="bg-emerald-400 hover:bg-blue-500 text-white font-semibold hover:text-white pr-4 pl-2 ml-10 mt-5 :border-transparent rounded">Download PDF</button>
        </>
    )
}

export default Receipt;