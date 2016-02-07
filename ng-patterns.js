'use strict';
angular.module('ng-patterns',[])
    .directive('pattern', function () {
        return {
            strict: 'E',
            transclude: true,
            link: function (scope, element, attributes){
                var target  = '#' + element.attr('id'),
                    options = jQuery.parseJSON(attributes.patternOptions),
                    width   = $(target).css('width'),
                    height  = $(target).css('height'),
                    colors = chroma.scale(options[0].colors).colors(options[0].size),
                    color,
                    comlumnIndex,
                    rowIndex,
                    pixelWidth = getSize(),
                    columns = parseInt(width.replace('px','')) / pixelWidth,
                    rows = parseInt(height.replace('px','')) / pixelWidth,
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
    });
