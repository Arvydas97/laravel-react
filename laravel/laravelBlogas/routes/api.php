<?php

use Illuminate\Http\Request;
use App\Post;
use App\Comment;
use App\Category;
use \App\Http\Controllers\ApiController;
use \App\Http\Controllers\CommentsController;

use App\User;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/posts', 'ApiController@allPosts');
Route::get('/post/{id}','ApiController@postById');
Route::delete('/post/{id}/delete','ApiController@deletePost');
Route::get('/post/{id}/like','PostController@like');
Route::get('/post/{id}/update','PostController@update');

Route::get('/category/{id}', 'ApiController@categoryById');
Route::get('/categories','ApiController@allCategories');

Route::get('/comment/{post_id}', 'ApiController@commentsById');


///////Post uzklausos
Route::post('/storeComment','CommentsController@store');
Route::post('/storePost','PostController@store');
Route::post('/storeCategory','CategoryController@storeCategory');




