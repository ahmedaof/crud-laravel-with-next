<?php

namespace App\Providers;

use App\Repositories\ContactInformationRepository;
use App\Repositories\interfaces\ContactRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(ContactRepositoryInterface::class, ContactInformationRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
    }
}
