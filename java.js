
var selectedCategory;
var url="https://api.nytimes.com/svc/topstories/v2/";
var x=0;

// $(document).ready(function(){

  $(window).on("load", function() {
  $("#category").heapbox({"onChange":function(value){

              // $("header").animate({height: $('header')[0].scrollHeight},1600,"linear", function(){$('header').height('auto');});
               $("header").addClass( "header-small");


              var catUrl = url + value +".json"+'?' + $.param({'api-key': "441eb2940b574368a76954b91c4fa337"});

              $.ajax({
                url: catUrl,
                method: 'GET',
              })
              .done(function(result) {
                $(".load").fadeIn();
                $("#articlesSection").empty();
                window.setTimeout(function(){
                  loop_articles(result.results);
                    }, 600);
                $(".load").fadeOut(1000);
              }).fail(function(err) {
                throw err;
              });
  }});
});


function newArticle(abstract, image, link){
          var articleClone = $("#clone").clone();
          $(articleClone).children(".article-wrap").css({"background": "url('"+image+"')", "background-size": "cover", "background-position": "center"});
          $(articleClone).find("p").text(abstract);
          $(articleClone).find("a").attr("href", link);
          $("#articlesSection").append($(articleClone).html());
}
function loop_articles(results){
  if(results.length == 0){
    $('#articlesSection').html("This news section has no articles");
  };

  x=0;
  for (var i=0; i < results.length; i++){

var mm = results[i].multimedia[4];

    if(mm!=undefined && mm.hasOwnProperty("url") && mm.url!=undefined){
      newArticle(results[i].abstract, mm.url, results[i].url);
      x++;
      console.log(x);

          if(x==12){
            console.log("break?");
              break; }

    }

  }
}
