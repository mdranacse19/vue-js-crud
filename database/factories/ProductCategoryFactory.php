<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\ProductCategory;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(ProductCategory::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'slug' => Str::slug($faker->name),
    ];
});
