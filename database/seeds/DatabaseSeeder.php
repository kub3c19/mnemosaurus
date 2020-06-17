<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(LanguageSeeder::class);
        $this->call(ExpressionSeeder::class);
        $this->call(ExpressionExpressionSeeder::class);
        $this->call(MnemonicSeeder::class);
    }
}
