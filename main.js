define(["knockout", "Survey", "SurveyEditor"], function(
  ko,
  Survey,
  SurveyEditor
) {
  ko.components.register("toast-container", { require: "toast-container" });

  // ko.applyBindings({}, $("#host")[0]);
  Survey.StylesManager.applyTheme("default");

  var json = {
    questions: [
      {
        type: "radiogroup",
        name: "car",
        title: "What car are you driving?",
        isRequired: true,
        colCount: 4,
        choices: [
          "None",
          "Ford",
          "Vauxhall",
          "Volkswagen",
          "Nissan",
          "Audi",
          "Mercedes-Benz",
          "BMW",
          "Peugeot",
          "Toyota",
          "Citroen"
        ]
      }
    ]
  };

  window.survey = new Survey.Model(json);

  survey.onComplete.add(function(result) {
    document.querySelector("#surveyResult").innerHTML =
      "result: " + JSON.stringify(result.data);
  });

  survey.render("surveyElement");

  SurveyEditor.StylesManager.applyTheme("default");

  var editorOptions = {};
  var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
});
