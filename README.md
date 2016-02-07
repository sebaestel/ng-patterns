# ng-pattern
Angular directive to create basic patterns using d3

## Install

- Clone repository

```
git clone git@github.com:sebaduran/ng-pattern.git
```

or use bower

```
bower install ng-pattern
```

## Usage

Add dependencie in your  module
```
angular.module('yourModule', ['ng-pattern']) ...

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
