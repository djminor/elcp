document.getElementById("userform").addEventListener("submit", function(event) {
    event.preventDefault();
    const textToTranslate = document.getElementById("input").value;
    console.log("Text to translate: " + textToTranslate);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://api.intellexer.com/recognizeLanguage?apikey=79bf2921-4718-4e24-95e3-b7a860f17cdd",
        "method": "POST",
        "data": textToTranslate
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        return response
      });
      $.ajax(settings).done(function(response) {
        let language = "<p>";
        language += response.languages[0].language;
        language += "</p>";
        document.getElementById("language").innerHTML = language
      })

})
