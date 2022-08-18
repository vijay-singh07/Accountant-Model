<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Transaction;
use App\Http\Requests\TransactionRequest;
use PDF;
use Illuminate\Support\Facades\Redirect;

class TransactionController extends Controller
{
    public function index(){
        return Inertia::render('CreateTransaction');
    }

    public function show(){
        return Inertia::render('TransactionList');
    }

    public function save(TransactionRequest $request){
            $Transaction = new Transaction();
            $Transaction->date = $request->date;
            $Transaction->description = $request->description;
            $Transaction->paid = $request->paid;
            $Transaction->unit_amount = $request->unit_amount;
            $Transaction->unit_quantity = $request->unit_quantity ;
            $Transaction->unit_name = $request->unit_name;
            $Transaction->type = $request->type;
            $Transaction->status = $request->status;
            $Transaction->utr = $request->utr;
            $Transaction->comments = $request->comments;
            $Transaction->project = $request->project;
            $res = $Transaction->save();
            return Redirect::route('transaction-list');       
    }

    public function list(){
        $list = Transaction::all();
        return Inertia::render('TransactionList',['list'=>$list]);
    }

    public function edit($id){
        $editable = Transaction::find($id);
        return Inertia::render('EditTransaction', ['editable' => $editable]);
    }

    public function delete($id){
        $editable = Transaction::find($id);
            $editable->delete();
        return Redirect::route('transaction-list');
    }

    public function update( Request $request){
            $Transaction = Transaction::find($request->id);
            $Transaction->date = $request->date;
            $Transaction->description = $request->description;
            $Transaction->paid = $request->paid;
            $Transaction->unit_amount = $request->unit_amount;
            $Transaction->unit_quantity = $request->unit_quantity ;
            $Transaction->unit_name = $request->unit_name;
            $Transaction->type = $request->type;
            $Transaction->status = $request->status;
            $Transaction->comments = $request->comments;
            $Transaction->project = $request->project;
            $resa= $Transaction->save();
            return Redirect::route('transaction-list');
    }

    public function receipt ($id)
    {
        $editable = Transaction::find($id);
        return Inertia::render('Receipt',['editable'=>$editable]);
    }

}
