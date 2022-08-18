<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\TransactionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function(){
    return Inertia::render('Home');
  });

  // AuTH ROUTES
  Route::get('/login', [RegisterController::class, 'login'])->name('login');
  
  Route::get('/register', [RegisterController::class, 'register'])->name('register');

  Route::post('/register-user',[RegisterController::class,'store']);

  Route::post('/login-user', [RegisterController::class, 'loginUser'])->name('login-user');

  // CREATING AND LISTING OF TRANSACTION
Route::get('/transaction',[TransactionController::class,'index'])->middleware('isLoggedIn')->name('transaction');
Route::get('/transaction-list',[TransactionController::class,'list'])->middleware('isLoggedIn')->name('transaction-list');
Route::post('/transaction-save',[TransactionController::class,'save']);

// EDIT DELETE AND UPDATE TRANSACTION
Route::get('/edit/{id}',[TransactionController::class,'edit'])->middleware('isLoggedIn')->name('edit');
Route::get('/delete/{id}',[TransactionController::class,'delete'])->middleware('isLoggedIn')->name('delete');
Route::post('/update-transaction',[TransactionController::class,'update'])->name('update-transaction');

//DOWNLOAD PDF
Route::get('download/{id}', [TransactionController::class,'receipt']);


// LOGOUT
Route::get('/logout', [RegisterController::class,'logout'])->name('logout');

