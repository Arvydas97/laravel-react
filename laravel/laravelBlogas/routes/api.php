<?php

use Illuminate\Http\Request;
use App\Post;
use App\Comment;
use App\Category;
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
Route::get('/post', function () {
    return Post::all();
});
Route::get('/post/{id}', function ($id) {
    return Post::find($id);
});
//Route::get('/postByCategory', function () {
//    $users = DB::table('posts')
//        ->join('posts', 'id', '=', posts.user_id)
//        ->get();
//});
Route::get('/category', function () {
    return Category::all();
});
Route::get('/category/{id}', function ($id) {
    return Category::find($id);
});

Route::get('/user', function () {
    return User::all();
});

Route::get('/comment/{post_id}', function ($post_id) {
    return Comment::where("post_id",$post_id)->get();
});
Route::get('/commentByPost', function ($id) {
    return $users = DB::table('posts')
        ->join('comments', 'posts.id', '=', 'comments.post_id')->select()
        ->get();
});

///////Post uzklausos
Route::post('/storeCategory', function (Request $request) {
    return Category::storeCategory($request->all());
});
Route::post('/storePost', function (Request $request) {
    return Post::store($request->all());
});
Route::post('/storeComment', function (Request $request) {
    return Comment::store($request->all());
});
