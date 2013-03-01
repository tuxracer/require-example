define(function (require) {
    var Backbone = require("backbone"),
        ListM = require("models/list");

    return Backbone.Collection.extend({
        model: ListM,

        initialize: function () {
            console.log("list collection");
        }
    });
});
