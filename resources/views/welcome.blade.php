<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Crud With Vue</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" >

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">




    </head>
    <body>
       <div id="app">
           <!-- set header -->
           <welcome-header></welcome-header>

           <!-- set router view -->
           <router-view></router-view>

           <!-- set progressbar -->
           <vue-progress-bar></vue-progress-bar>


       </div>



       <!-- Scripts -->
       <script src="{{ asset('js/app.js') }}" ></script>
    </body>
</html>
