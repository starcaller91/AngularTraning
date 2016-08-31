(function () {

    var module = angular.module("menu-index");

    module.provider("appInfo", ['constants', function (constants) {
        this.$get = function () {
            var name = constants.APP_NAME;
            var description = constants.APP_DESCRIPTION;

            var version = constants.APP_VERSION;

            if (includeVersion) {
                name += " " + version;
            };

            return {
                Name: name,
                Description: description
            };
        };

        var includeVersion = false;
        this.setIncludeVersion = function (value) {
            includeVersion = value;
        };
    }]);


    module.config(['appInfoProvider', 'constants', "$logProvider", function (appInfoProvider, constants, $logProvider) {
        appInfoProvider.setIncludeVersion(true);

        $logProvider.debugEnabled(false);

        console.log('This will be logged from module config: '+constants.APP_NAME)
    }]);

    module.value('utilService', {
        CurrentDate: CurrentDate()
    });

    function CurrentDate() {
        var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var date = new Date();
        return weekDays[date.getDay()];

    }


})();

