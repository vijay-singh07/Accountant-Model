import React from 'react'
import PageName from '../Components/PageName'
import { Inertia } from '@inertiajs/inertia';
import QuickLinks from '../Components/QuickLinks';
type list=any;

const TransactionList = (props:list) => {

    var onClick = function handleClick() {
        Inertia.get('transaction');
      };
     
    
  return (
    <div className="bg-slate-100">
        <QuickLinks/>
        <div>
            <PageName title='Transaction List' />
                    <table className="table-auto min-w-full mt-5">
                        <thead className="border-b">
                            <tr >
                                <th>Date</th>
                                <th>Description</th>
                                <th>Paid To/By</th>
                                <th>Total</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>UTR</th>
                                <th>Project</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.list.map((item: any)=>{
                                    return(
                                        <tr key={item.id} className="border-b text-center">
                                            <td>{item.date}</td>
                                            <td>{item.description}</td>
                                            <td>{item.paid}</td>
                                            <td>{item.unit_amount*item.unit_quantity}</td>
                                            <td>{item.type}</td>
                                            <td>{item.status}</td>
                                            <td>{item.utr}</td>
                                            <td>{item.project}</td>
                                            <td> 
                                                <a href={'edit/'+item.id} className="bg-emerald-400 hover:bg-blue-500 text-white font-semibold hover:text-white pr-4 pl-2 :border-transparent rounded">Edit</a> 
                                                <a href={'delete/'+item.id} className="bg-red-400 hover:bg-red-700 text-white font-bold ml-2 px-2 rounded focus:shadow-outline">Delete</a> 
                                                <a href={'download/'+item.id} className="bg-orange-400 hover:bg-red-400 text-white font-bold pr-4 pl-2 ml-2 rounded focus:shadow-outline">Download Reciept</a> 
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <br/>
                    <button onClick={onClick} type="submit" className="bg-emerald-400 hover:bg-blue-500 text-white font-semibold hover:text-white pr-4 pl-2 ml-4 :border-transparent rounded">Create Transaction</button>
        </div>
    </div>
  )
}

export default TransactionList