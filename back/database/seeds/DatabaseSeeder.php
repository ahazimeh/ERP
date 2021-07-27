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
        // $this->call(UserSeeder::class);
        $this->call(Roles::class);
        $this->call(Projects::class);
        $this->call(Teams::class);
        $this->call(UserSeeder::class);
        $this->call(Employees::class);
        $this->call(EmployeeProjectRoles::class);
        $this->call(TeamProjects::class);
        $this->call(Kpis::class);
        $this->call(KpiDetails::class);
    }
}
