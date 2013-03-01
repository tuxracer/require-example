define(function (require) {
    var Backbone = require("backbone");

    return Backbone.Model.extend({
        initialize: function () {
            console.log("list model");
        }
    });
});
