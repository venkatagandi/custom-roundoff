# custom-roundoff
A custom angular 1.x ngModel directive to roundoff the decimal value

Below ngModel directive accomplishes this

```javascript
    app.directive('roundConverter2', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModelCtrl) {
            var newVal;
            function roundNumber(val) {
                var parsed = parseFloat(val, 10);
                if(parsed !== parsed) { return null; }
                var rounded = parsed.toFixed(2);
                newVal=rounded;
                return rounded;
            }
            ngModelCtrl.$parsers.push(roundNumber);
            elem.bind('blur', function() {
                        scope.$apply(function() {
                            ngModelCtrl.$setViewValue(newVal);
                            ngModelCtrl.$render();
                        });

                    });
            }
        };
    });
```

We can refer it as an attribute directive as shown below.


```javascript
        <input type='text' name="decimalNumberText"
        ng-model='decimalExample.decimalNumberField'
        round-converter2>
```