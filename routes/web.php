<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('index');
});

Route::resources([
    'languages' => 'LanguageController',
    'mnemonics' => 'MnemonicController',
    'sessions' => 'SessionController',
    'users' => 'UserController'
]);

Route::get('/register', 'UserController@create');
Route::post('/register', 'UserController@store');

Route::post('/login', 'SessionController@store');
Route::get('/logout', 'SessionController@destroy');
