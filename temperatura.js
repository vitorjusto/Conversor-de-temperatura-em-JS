
function calcular()
{
      var temp = document.getElementById("temp").value;
      var x = document.getElementById("valor").value;
      
      var c, f, k;
      
      if(temp === "0")
      {
            c = x;
            f = (c *(9/5)) + 32;
            k =  c + 273.15; 
      }
      else if(temp === "1")
      {
            f = x;
            c = (f - 32)*(5/9);
            k = c + 273.15;
      }
      else
      {
            k = x;
            c = k - 273.15;
            f = (c *(9/5)) + 32;
      }
      document.getElementById("c").innerHTML= c;
      document.getElementById("f").innerHTML= f;
      document.getElementById("k").innerHTML= k;
}