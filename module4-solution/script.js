var names=["Kim Namjoon","Kim Seokjin","Min Yoongi","Jung Hoseok","Park Jimin","Kim Taehyung"];



var speakWord1 = "Good Bye";
var speakWord2 = "Hello";
  
function speak(name) {
      
        if (name[0]==("J" || 'j')){
            console.log(speakWord1 + " " + name);
        }
        else
            console.log(speakWord2 + " " + name);
      }

    
  for (var name=0;name<names.length;name++){
    speak(names[name]);
  }
