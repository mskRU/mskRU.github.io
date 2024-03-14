$(".button.rus_lang").click(function(){
    //alert("Нажата кнопка АНГЛИЙСКИЙ");
    var rusLang = document.getElementsByClassName("rus_lang");
    var enLang = document.getElementsByClassName("en_lang");
    for (i = 0; i < enLang.length; i++) {
      enLang[i].style.position = "static";
      rusLang[i].style.position = "absolute";
      rusLang[i].style.top = "-9999px";
      rusLang[i].style.left = "-9999px";
    }
  });

    $(".button.en_lang").click(function(){
      //alert("Нажата кнопка АНГЛИЙСКИЙ");
      var rusLang = document.getElementsByClassName("rus_lang");
      var enLang = document.getElementsByClassName("en_lang");
      for (i = 0; i < enLang.length; i++) {
        rusLang[i].style.position = "static";
        enLang[i].style.position = "absolute";
        enLang[i].style.top = "-9999px";
        enLang[i].style.left = "-9999px";
      }
  });