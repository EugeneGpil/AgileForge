<?php

namespace App\Ship\Parents\Tests\PhpUnit;

use Apiato\Core\Abstracts\Tests\PhpUnit\TestCase as AbstractTestCase;
use App\Ship\Enums\AuthGuard;
use Faker\Generator;
use Illuminate\Contracts\Console\Kernel as ApiatoConsoleKernel;
use Illuminate\Foundation\Application;

abstract class TestCase extends AbstractTestCase
{
    /**
     * Setup the test environment, before each test.
     */
    protected function setUp(): void
    {
        parent::setUp();
    }

    /**
     * Reset the test environment, after each test.
     */
    protected function tearDown(): void
    {
        parent::tearDown();
    }

    /**
     * Creates the application.
     *
     * @return Application
     */
    public function createApplication()
    {
        $app = require __DIR__ . '/../../../../../bootstrap/app.php';

        $app->make(ApiatoConsoleKernel::class)->bootstrap();

        // create an instance of faker and make it available in all tests
        $this->faker = $app->make(Generator::class);

        return $app;
    }

    public static function authGuardDataProvider(): array
    {
        return array_map(static fn (AuthGuard $guard) => [$guard->value], AuthGuard::cases());
    }
}
