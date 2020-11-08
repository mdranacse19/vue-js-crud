<?php

namespace App\Http\Controllers;

use App\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ProductCategory::orderBy('id', 'desc')->paginate(10);
        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
           'name' => 'required|unique:product_categories',
        ]);

        $category = new ProductCategory();
        $category->name = $request->name;
        $category->slug = Str::slug($request->name);
        $category->save();

        return $category;

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function show(ProductCategory $productCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductCategory $productCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductCategory $productCategory)
    {
        $category = $productCategory;
        $category->name = $request->name;
        $category->slug = Str::slug($request->name);
        $category->save();

        return $category;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductCategory $productCategory)
    {
        $category = $productCategory;
        $category->delete();

        return $category;
    }


    /*
     * for search data
     * @param $searchField, $searchValue
     * @return \Illuminate\Http\Response
     * */
    public function search($searchField ,$searchValue)
    {
        $data = ProductCategory::where($searchField, 'like', "%$searchValue%")->latest()->paginate(10);

        return $data;
    }


}
