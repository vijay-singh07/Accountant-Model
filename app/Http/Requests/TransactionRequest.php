<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'date'=>'required',
            'description'=>'required',
            'paid'=>'required',
            'unit_amount'=>'required|max:10',
            'unit_quantity'=>'required|max:10',
            'unit_name'=>'required',
            'type'=>'required',
            'status'=>'required',
            'project'=>'required'
        ];
    }
}
