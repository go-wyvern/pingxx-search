'use strict';

System.register('pingxx-search/main', ['flarum/extend', 'flarum/app', 'flarum/components/Search'], function (_export, _context) {
    "use strict";

    var override, app, Search;
    return {
        setters: [function (_flarumExtend) {
            override = _flarumExtend.override;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsSearch) {
            Search = _flarumComponentsSearch.default;
        }],
        execute: function () {

            app.initializers.add('pingxx-search', function () {
                console.log("aaaaa");
                override(Search.prototype, 'sourceItems', function (original) {
                    return original().remove('users');
                });
            });
        }
    };
});