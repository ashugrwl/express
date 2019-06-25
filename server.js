var express = require('express');  
var app = express();  
app.use(express.static('public'));  
  
function prime(n){
    if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
function fact(n){

    var i, no, fact;
    fact=1;
    no=n;
    for(i=1; i<=no; i++)  
    {
    fact= fact*i;
    }  
    return fact;
}
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.get('/process_get', function (req, res) { 
    
    if(prime(parseInt(req.query.first_num)) == true){
        response = {  
            first_num: "Prime",  
            last_num:fact(parseInt(req.query.last_num))  
        }; 
    }else{
        response = {  
            first_num: "Not Prime",  
            last_num:fact(parseInt(req.query.last_num))  
        }; 
    } 
  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
  console.log("Example app listening at http://localhost:8000");  
})  