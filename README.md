# Password-Generator-helper
In order to get started with my password Generator I first started to
declare my variables. I started with declaring my Upercase, Lowercase, numbers and special characters!

![](https://file%2B.vscode-resource.vscode-cdn.net/Users/abdullahiabdulkadir/bootcamp/Password-Generator-helper/Assets/Screen%20Shot%202022-09-19%20at%208.42.47%20PM.png?version%3D1663638239514)
I than started by declaring my prompt questions and setting up my uppercaseArray wit 1

My next step was to make sure to set up my if statements so that my delcared elements were concatenated
I used the join method to a return a concatenated string and used a for loop so that it run through the code over and over!

{ for (var i = 0; i< numCharacter; i++) {

    inputArray.push (returnArray[Math.floor(Math.random() * returnArray.length)]);
  }

  return inputArray.join("") ;
  }

  