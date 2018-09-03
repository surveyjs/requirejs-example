requirejs.config({
  paths: {
    app: "./",
    knockout:
      "http://cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min",
    Survey: "https://surveyjs.azureedge.net/1.0.41/survey.ko",
    SurveyEditor: "https://surveyjs.azureedge.net/1.0.41/surveyeditor"
  },
  map: {
    "*": {
      "survey-knockout": "Survey"
    }
  }
});

requirejs(["main"]);
