<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>React training crud User</title>

        @viteReactRefresh
        @vite('resources/js/app.js')

        <script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
    </head>

    <body>
        <div id="app"></div>
    </body>
</html>
