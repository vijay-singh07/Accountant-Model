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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function(){
    return Inertia::render('Home');
  });

  Route::get('/login', function(){
    return Inertia::render('Login');
  });

  Route::get('/Create', function(){
    return Inertia::render('CreateTransaction');
  });
  
  Route::get('/register', [RegisterController::class, 'register'])->name('register');

  Route::post('/register-user', [RegisterController::class, 'registerUser'])->name('register-user');

  Route::post('/login-user', [RegisterController::class, 'loginUser'])->name('login-user');



