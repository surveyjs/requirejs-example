require.config({
    paths: {
        "knockout": "../node_modules/knockout/build/output/knockout-latest",
        "survey-core": "../node_modules/survey-core/survey.core.min",
        "survey-core/themes": "../node_modules/survey-core/themes/index.min",
        "survey-knockout-ui": "../node_modules/survey-knockout-ui/survey-knockout-ui.min",
        "survey-creator-core": "../node_modules/survey-creator-core/survey-creator-core.min",
        "survey-creator-knockout": "../node_modules/survey-creator-knockout/survey-creator-knockout.min"
    },
    shim: {
        "survey-creator-core": {
            deps: ["survey-core"]
        },
        "survey-knockout-ui": {
            deps: ["survey-core", "knockout"]
        },
        "survey-creator-knockout": {
            deps: ["survey-creator-core", "survey-knockout-ui"]
        }
    }
});

require(['index'], function (index) {
    // Index module loaded
});