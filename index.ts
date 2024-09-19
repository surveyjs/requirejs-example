import * as Survey from 'survey-core';
import * as SurveyKnockout from 'survey-knockout-ui';
import * as SurveyCreatorCore from 'survey-creator-core';
import * as SurveyCreator from 'survey-creator-knockout';

console.log("survey-core: ", Survey);
console.log("survey-knockout-ui: ", SurveyKnockout);
console.log("survey-creator-core: ", SurveyCreatorCore);
console.log("survey-creator-knockout: ", SurveyCreator);

const surveyJSON = {
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

const survey = new SurveyKnockout.Survey(surveyJSON);
survey.render(document.getElementById("surveyContainer"));

const options = {
    showLogicTab: true
};
const creator = new SurveyCreator.SurveyCreator(options);
creator.JSON = surveyJSON;
creator.render("surveyCreatorContainer");