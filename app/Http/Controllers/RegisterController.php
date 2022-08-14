<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\accountant;
use App\Http\Requests\RegisterRequest;
use Hash;
use Session;

class RegisterController extends Controller
{
    public function login(){
        return Inertia::render('Login');
    }

    public function register(){
        return Inertia::render('Register');
    }

    public function registerUser(RegisterRequest $request,Accountant $accountant){
        $Accountant= new Accountant();
        $Accountant->fname = $request->fname;
        $Accountant->lname = $request->lname;
        $Accountant->mail = $request->mail;
        $Accountant->phone = $request->phone;
        $Accountant->password = Hash::make($request->password);
        $res= $Accountant-> save();
        
        return Redirect::route('/');
    }
    
    public function loginUser(Request $request){
            $request->validate([
                'mail'=>'required|email',
                'password'=>'required|min:8|max:12',
                ]);
                $accountant = Accountant:: where('mail','=',$request->mail)->first();
                if($accountant){
                    if (Hash::check($request->password, $accountant->password)){
                        $request->session()->put('login_Id',$accountant->id);
                        return redirect()->route('home');
                    }else{
                        return back()->with('fail','The password does not matches');
                    }
                }else{
                    return back()->with('fail','This mail is not registered');
                }
    }

    
}
