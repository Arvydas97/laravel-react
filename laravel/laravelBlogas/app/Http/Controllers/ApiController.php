<?php

namespace App\Http\Controllers;

use App\Category;
use App\Comment;
use App\Post;
use App\User;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function allPosts(){
        return Post::all();
    }
    public function postById($id){
       // return Comment::where("id",$id)->get();
        return Post::find($id);
    }
    public function deletePost($id){
        return Post::destroy($id);
    }
    public function allCategories(){
        return Category::all();
    }
    public function categoryById($id){
        return Category::find($id);
    }
    public function commentsById($post_id){
        return Comment::where("post_id",$post_id)->get();
    }
    public function userById($id){
        // return Comment::where("id",$id)->get();
        return User::find($id);
    }
//    public function sss(){
//        return
//    }

}
