angular.module('common.filter', [])
    .filter('orderByData', function() {
        return function(items, search) {

            if (!search || !items) {
                return items;
            }

            var opportunityType = search.opportunityType;
            if (!opportunityType || '' === opportunityType) {
                return items;
            }

            return items.filter(function(element, index, array) {
                if (search.opportunityType === "matched") {
                    return element.lifecycle.status === search.opportunityType || element.lifecycle.status === 'negotiating';
                } else {
                    return element.lifecycle.status === search.opportunityType;
                }

            });

        };
    });
