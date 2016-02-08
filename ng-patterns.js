'use strict';
angular.module('ng-patterns',[])
    .directive('pattern', ['$document', function ($document) {
        return {
            strict: 'EA',
            transclude: true,
            link: function (scope, element, attributes){

                var target  = '#' + element.attr('id'),
                    options = angular.fromJson(attributes.patternOptions),
                    width   = $document[0].querySelector(target).clientWidth,
                    height  = $document[0].querySelector(target).clientHeight,
                    colors = chroma.scale(options[0].colors).colors(options[0].size),
                    color,
                    comlumnIndex,
                    rowIndex,
                    pixelWidth = getSize(),
                    columns = parseInt(width) / pixelWidth,
                    rows = parseInt(height) / pixelWidth,
                    squareSvg = d3.select(target)
                        .append('svg')
                        .attr('width', width)
                        .attr('height', height);
                    for(comlumnIndex = 0; comlumnIndex < columns; comlumnIndex ++){
                        for(rowIndex = 0; rowIndex < rows; rowIndex ++){
                            var pixel = squareSvg
                                    .append('rect'),
                                pixelAttributes = pixel
                                    .attr('x', comlumnIndex * pixelWidth)
                                    .attr('y', rowIndex * pixelWidth)
                                    .attr('width', pixelWidth)
                                    .attr('height', pixelWidth)
                                   .attr('fill', getColour());
                        }
                    }

                if(options[0].text){
                    var text = squareSvg
                        .append("text")
                        .attr("x", '15%')
                        .attr("y", '85%')
                        .style("font-size", parseInt(height))
                        .attr("fill", "#ffffff")
                        .text(options[0].text[0].toUpperCase());
                }
                function getSize(){
                    if(options[0].seed){
                        return options[0].seed.length;
                    } else {
                        return options[0].size;
                    }
                }
                function getColour(){
                    return colors[ Math.floor((Math.random() * pixelWidth) + 0)];
                }
                return false
            }
        };
    }]);
