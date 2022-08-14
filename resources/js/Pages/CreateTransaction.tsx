import React , { useState }  from 'react'

import FormInput from '../Components/FormInput';
import FormInputSelect from '../Components/FormInputSelect';
import PageName from '../Components/PageName'



const CreateTransaction = () => {

  

    const [fields,setFields] = useState({
        date:'',
        description:'',
        paid:'',
        unit_amount:'',
        unit_quantity:'',
        unit_name:'',
        type:'',
        status:'',
        utr:'',
        comments:'',
        project:'',
    })
    const [allTrans,setAllTrans]=useState([{}]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const newEntry={id:new Date().getTime().toString(), date:fields.date,description: fields.description,  paid:fields.paid, unit_amount:fields.unit_amount,unit_quantity:fields.unit_quantity, unit_name:fields.unit_name, utr:fields.utr,type:fields.type, status:fields.status,comments:fields.comments, project:fields.project, };
        setFields({
                date:'',
                description:'',
                paid:'',
                unit_amount:'',
                unit_quantity:'',
                unit_name:'',
                type:'',
                status:'',
                utr:'',
                comments:'',
                project:'',
        });
        setAllTrans([...allTrans,newEntry]);
    }

    let name,value;
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        name = event.target.name;
        value= event.target.value;

        setFields({...fields, [name]:value});
    }
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        name = event.target.name;
        value= event.target.value;

        setFields({...fields, [name]:value});
    }

    
  return (
    <>
      
        <PageName title='Create Transaction' />
      
        <form onSubmit={handleSubmit} className="mb-5 mt-5">
        <FormInput label='Enter Date' type='date'  name='date' value={fields.date} onChange={onChange} />
          <FormInput label='Enter Description' type='text' name='description'  value={fields.description} onChange={onChange} />
          <FormInput label='Enter Paid to/by' type='text' name='paid'  value={fields.paid} onChange={onChange}/>
          <FormInput label='Enter Unit Amount' type='text' name='unit_amount'  value={fields.unit_amount} onChange={onChange}/>
          <FormInput label='Enter Unit Quanity' type='text' name='unit_quantity'  value={fields.unit_quantity} onChange={onChange}/>
          <FormInput label='Enter Unit Name' type='text' name='unit_name'  value={fields.unit_name} onChange={onChange}/>
          <FormInputSelect label='Select the Type of Transaction' name='type' value={fields.type} onChange={handleSelect} dropdown={['expense','revenue']}/>
          <FormInputSelect  label='Select the status' name='status'  value={fields.status} onChange={handleSelect} dropdown={['Due','Cancelled','Cleared']}/>
          <FormInput label='Enter UTR' type='text' name='utr'  value={fields.utr} onChange={onChange}/>
          <FormInput label='Enter Comments' type='text' name='comments'  value={fields.comments} onChange={onChange}/>
          <FormInput label='Enter Project Name' type='text' name='project'  value={fields.project} onChange={onChange}/>
                     <button type="submit">Create Transaction</button>
        </form>
                
    </>
  )
}

export default CreateTransaction