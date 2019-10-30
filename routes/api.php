<?php

use Illuminate\Http\Request;
use App\Computer;

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
Route::get('/computers/select', function(){
    $computers = Computer::select('name AS text', 'id AS value')->get();

    return $computers;
});

Route::apiResource('computers', 'Api\ComputerController');
Route::apiResource('reports', 'Api\ReportController');

