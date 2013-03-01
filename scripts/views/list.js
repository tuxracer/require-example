define(function (require) {
    var Backbone = require("backbone"),
        ListsC = require("collections/lists");

    return Backbone.View.extend({
        initialize: function () {
            this.collection = new ListsC({hello: "world"});

            console.log("list view");
        }
    });
});
