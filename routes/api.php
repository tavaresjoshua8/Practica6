<?php

use Illuminate\Http\Request;
use App\Computer;
use App\Report;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/computers', function(){
    $computers = Computer::orderBy('name')->get()
        ->map(function($computer){
            $computer->hardware;
            return $computer;
        });

    return $computers;
});

Route::get('/reports', function(){
    $reports = Report::get();

    return $reports;
});
Route::get('/reports/{id}', function($id){
    $reports = Computer::find($id)->reports;

    return $reports;
});
