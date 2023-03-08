<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Template</title>

        {{-- Includiamo gli assets con la direttiva @vite --}}
        @vite('resources/js/app.js')
    </head>
    <body class="antialiased">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <div class="card">
                        <div class="card-body">
                            <img src="{{ Vite::asset('resources/img/laravel.png') }}" alt="">

                            <h1 class="card-title">Laravel Template</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
