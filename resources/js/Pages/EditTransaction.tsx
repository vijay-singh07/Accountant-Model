import React  from 'react'

import { Inertia } from '@inertiajs/inertia';
import FormInput from '../Components/FormInput';
import FormInputSelect from '../Components/FormInputSelect';
import PageName from '../Components/PageName'
import { useForm } from '@inertiajs/inertia-react'
import QuickLinks from '../Components/QuickLinks';
type editable=any;



const EditTransaction = (props:editable) => {
    const { data, setData, post, errors } = useForm({
        id: props.editable.id,
        date: props.editable.date,
        description: props.editable.description,
        paid: props.editable.paid,
        unit_amount: props.editable.unit_amount,
        unit_quantity: props.editable.unit_quantity,
        unit_name: props.editable.unit_name,
        type: props.editable.type,
        status: props.editable.status,
        utr: props.editable.utr,
        comments: props.editable.comments,
        project: props.editable.project,
    })

    let name,value;
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>{
      name = event.target.name;
      value= event.target.value;

      setData({...data, [name]:value});
  }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        
        post('/update-transaction')
    } 
  return (
    <>
      <QuickLinks/>
      <PageName title='Edit Transaction' />
      <form onSubmit={handleSubmit} className="mx-80 border-2 border-gray-200 bg-purple-200 mb-5">
        <FormInput label='Enter Date' type='date'  name='date' value={data.date} onChange={e => setData('date', e.target.value)} />
        {errors.date && <div>{errors.date}</div>}
        <FormInput label='Enter Description' type='text' name='description'  value={data.description} onChange={e => setData('description', e.target.value)} />
        {errors.description && <div>{errors.description}</div>}
        <FormInput label='Enter Paid to/by' type='text' name='paid'  value={data.paid} onChange={e => setData('paid', e.target.value)}/>
        {errors.paid && <div>{errors.paid}</div>}
        <FormInput label='Enter Unit Amount' type='text' name='unit_amount'  value={data.unit_amount} onChange={e => setData('unit_amount', e.target.value)}/>
        {errors.unit_amount && <div>{errors.unit_amount}</div>}
        <FormInput label='Enter Unit Quanity' type='text' name='unit_quantity'  value={data.unit_quantity} onChange={e => setData('unit_quantity', e.target.value)}/>
        {errors.unit_quantity && <div>{errors.unit_quantity}</div>}
        <FormInput label='Enter Unit Name' type='text' name='unit_name'  value={data.unit_name} onChange={e => setData('unit_name', e.target.value)}/>
        {errors.unit_name && <div>{errors.unit_name}</div>}
        <FormInputSelect label='Select the Type of Transaction' name='type' value={data.type} onChange={handleSelect} dropdown={['expense','revenue']}/>
        {errors.type && <div>{errors.type}</div>}
        <FormInputSelect  label='Select the status' name='status'  value={data.status} onChange={handleSelect} dropdown={['Due','Cancelled','Cleared']}/>
        {errors.status && <div>{errors.status}</div>}
        <FormInput label='Enter UTR' type='text' name='utr'  value={data.utr} onChange={e => setData('utr', e.target.value)}/>
        {errors.utr && <div>{errors.utr}</div>}
        <FormInput label='Enter Comments' type='text' name='comments'  value={data.comments} onChange={e => setData('comments', e.target.value)}/>
        {errors.comments && <div>{errors.comments}</div>}
        <FormInput label='Enter Project Name' type='text' name='project'  value={data.project} onChange={e => setData('project', e.target.value)}/>
        {errors.project && <div>{errors.project}</div>}
                   <button type="submit" className="bg-emerald-400 hover:bg-blue-500 text-white font-semibold hover:text-white pr-4 pl-2 ml-10 mb-5 :border-transparent rounded">Update Transaction</button>
      </form>  
    </>
  )
}

export default EditTransaction