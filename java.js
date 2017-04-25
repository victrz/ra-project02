
var selectedCategory;
var url="https://api.nytimes.com/svc/topstories/v2/";
var x=0;

$(document).ready(function(){
  $('#category').on('change', function(){

    //clear previous results from body
     selectedCategory = $(this).val();
     var catUrl = url + selectedCategory +".json"+'?' + $.param({'api-key': "441eb2940b574368a76954b91c4fa337"});

    $.ajax({
      url: catUrl,
      method: 'GET',
    })
    .done(function(result) {
      $("#articlesSection").empty();
      loop_articles(result.results);
      console.log(result);
    }).fail(function(err) {
      throw err;
    });

  });
});
function newArticle(abstract, image, link){
          var articleClone = $("#clone").clone();
          $(articleClone).children(".article-wrap").css("background", "url('"+image+"') 50%");
          $(articleClone).find("p").text(abstract);
          $(articleClone).find("a").attr("href", link);
          $("#articlesSection").append($(articleClone).html());
}
function loop_articles(results){
  for (var i=0; i < results.length; i++){

    if(results[i].multimedia[4].url){
      newArticle(results[i].abstract, results[i].multimedia[4].url, results[i].url);
      x++;
      console.log(x);

          if(x==12){break;}

    }

  }
}
