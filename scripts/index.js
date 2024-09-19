define(["require", "exports", "survey-core", "survey-knockout-ui", "survey-creator-core", "survey-creator-knockout"], function (require, exports, Survey, SurveyKnockout, SurveyCreatorCore, SurveyCreator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("survey-core: ", Survey);
    console.log("survey-knockout-ui: ", SurveyKnockout);
    console.log("survey-creator-core: ", SurveyCreatorCore);
    console.log("survey-creator-knockout: ", SurveyCreator);
    var surveyJSON = {
        title: "Product Feedback Survey Example",
        pages: [
            {
                name: "page1",
                elements: [
                    {
                        type: "radiogroup",
                        name: "satisfaction",
                        title: "How satisfied are you with the product?",
                        choices: [
                            { value: 1, text: "Not Satisfied" },
                            { value: 2, text: "Slightly Satisfied" },
                            { value: 3, text: "Satisfied" },
                            { value: 4, text: "Very Satisfied" },
                            { value: 5, text: "Extremely Satisfied" }
                        ]
                    }
                ]
            }
        ]
    };
    var survey = new SurveyKnockout.Survey(surveyJSON);
    survey.render(document.getElementById("surveyContainer"));
    var options = {
        showLogicTab: true
    };
    var creator = new SurveyCreator.SurveyCreator(options);
    creator.JSON = surveyJSON;
    creator.render("surveyCreatorContainer");
});
