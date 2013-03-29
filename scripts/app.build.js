({
    name: 'libs/ext/almond',
    out: 'main-built.js',
    wrap: true,
    include: ['main'],
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    // optimize: "none",

    // normalizeDirDefines: true,

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
})
