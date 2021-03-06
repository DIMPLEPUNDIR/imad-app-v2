var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles =  {
 'article-one' : {
     title:"article one | Dimple pundir",
  heading:"article one",
  date:"feb 15,2017",
  content:`
  <p>
                    This is content of the first  article .This is content of the first article. 
                    This is content of the first article.
                    This is content of the first article .
</p>
                <p>
                 This is content of the first article two This is content of the first article .
                 This is content of the first article.
                </p>`
     
 },
 'article-two': { 
     title:"article two | Dimple pundir",
  heading:"article Two",
  date:"feb 5,2017",
  content:`
  <p>
                    This is content of the first  article .This is content of the first article. 
                    This is content of the first article.
                    This is content of the first article .
</p>
                <p>
                 This is content of the first article two This is content of the first article .
                 This is content of the first article.
                </p>`
     
 },
 'article-three': {
     title:"article Three | Dimple pundir",
  heading:"article Three",
  date:"feb 25,2017",
  content:`
  <p>
                    This is content of the 
                    This is content of the first article .
</p>`
     
 },
};
  
 function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate=`
<html>
    <head>
        <title>
            ${title} 
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href ="ui/style.css" rel="stylesheet"/>
    </head>
    <body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
            ${date}
            </div>
            <div>
               ${content}
            </div>
   </div>
    </body>
</html>
  ` ;
   return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req,res) {
    //articlename == article-one
    //articles[articleName]=={} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName])); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('MAD course app listening on port ${port}!');
});
