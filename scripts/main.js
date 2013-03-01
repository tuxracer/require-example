require.config({
    paths: {
        jquery: "libs/ext/jquery", // official jquery from jquery.com
        underscore: "libs/ext/lodash", // lodash.com
        backbone: "libs/ext/backbone", // official backbone from backbonejs.org
        handlebars: "libs/ext/handlebars" // official handlebars from handlebarsjs.com
    },

    shim: {
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },

        "handlebars": {
            exports: "Handlebars"
        }
    }
});

define("main", function(require) {
    var $ = require("jquery"),
        _ = require("underscore"),
        Backbone = require("backbone"),
        Handlebars = require("handlebars"),
        ListV = require("views/list");

    console.log($);
    console.log(_);
    console.log(Backbone);
    console.log(Handlebars);
    console.log(ListV);

    new ListV();
});

require(["main"]);
