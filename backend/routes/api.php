<?php

use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// we can use apiResource() method to register all the routes for a resource controller
// Route::apiResource([
//     'contacts' => ContactController::class
// ]); 

Route::get('contacts', [ContactController::class, 'index']);
Route::get('contacts/{id}', [ContactController::class, 'show']);
Route::post('contacts', [ContactController::class, 'store']);
Route::put('contacts', [ContactController::class, 'update']);
Route::delete('contacts', [ContactController::class, 'destroy']);
