<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'MD. Rana',
                'email' => 'mdrana@gmail.com',
                'password' => Hash::make('111'),
            ],
            [
                'name' => 'MD. Rakib',
                'email' => 'mdrakib@gmail.com',
                'password' => Hash::make('111'),
            ],
        ];

        DB::table('users')->insert($data);

    }
}
