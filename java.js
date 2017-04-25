/* Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "441eb2940b574368a76954b91c4fa337"
});*/
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "441eb2940b574368a76954b91c4fa337"
});

 function newArticle(abstract, image, link)


{
          // var articleClone = document.createElement("div");
          // $(articleClone).html("<p>"+abstract+"</p> <a href="+link+">LINK</a> <img src=" +image+">");
          // $("body").append(articleClone);
          var articleClone = $("#clone").clone();
          //$(articleClone).html("<a href="+link+"><p>"+abstract+"</p></a>");
          $(articleClone).children(".article-wrap").css("background", "url('"+image+"') 50%");
          $(articleClone).find("p").text(abstract);
          $(articleClone).find("a").attr("href", link);
          $("body").append($(articleClone).html());

}


function loop_articles(results){
  for (var i=0; i < results.length; i++){
    newArticle(results[i].abstract, results[i].multimedia[4].url, results[i].url);
  };
}


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  // console.log(result)
  neo.jump(document.getElementById("jumpHeight").value);
  document.getElementById("category").addEventListener("click", loop_articles,false);

  loop_articles(result.results);

}).fail(function(err) {
  throw err;
});
