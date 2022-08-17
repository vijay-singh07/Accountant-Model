<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaction extends Model
{
    use HasFactory;
    
    protected $fillable = ['date','descrpition','paid',
    'unit_amount',
    'unit_quantity',
    'unit_name',
    'type',
    'status',
    'utr',
    'invoice_number',
    'comments',
    'project'];

    public static function boot()
    {
        parent::boot();
        static::creating(function($model){
            $str = str_replace("-","",$model->date);
            $model->invoice_number='STSINV/'.$str;
        });
    }
}
