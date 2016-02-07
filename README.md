# ng-pattern
![alt tag](http://res.cloudinary.com/dfnwoj5c8/image/upload/v1454818162/Captura_de_pantalla_2016-02-07_a_las_1.08.56_gt0ph9.png)
Angular directive to create basic patterns using d3

## Install

- Clone repository

```
git clone git@github.com:sebaestel/ng-patterns.git
```

or use bower

```
bower install ng-patterns
```

## Usage

Add dependencie in your  module
```
angular.module('yourModule', ['ng-patterns']) ...

```
In view
```
    <pattern
        pattern-options="{{ data }}"
        id="pattern-test">
    </pattern>

```
In controller
```
    $scope.data = [
        {
            'size': 50,
            'seed': 'supercalifragilistico',
            'colors': ['#e62aa2', '#f0b988']
        }
    ];
```
## Options
- **size**: [0-9] to generate columns/row width
- **seed**: string to generate columns/row width
- **colors**: [required] color in hexadecimal into array
