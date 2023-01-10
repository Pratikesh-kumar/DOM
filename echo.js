// traversing the Dom::::
// var itemList=document.querySelector('#items');
  
    // Parent node :::
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
       //childNode::::
// console.log(itemList.childNodes);
// console.log the childNode is ::
// please see the output , 0:1=text ... coming 
//because in the HTML section the li tag have space 
//thats why this method is pain in the ass...

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

   // FirstChild
   // console.log(itemList.firstChild)
    
   // firstElementaryChild:::
   // console.log(itemList.firstElementChild);
   //  itemList.firstElementChild.textContent ='hello1'; 
   //   same like last node and last elemnt child
   

   // next sibling
   //  console.log(itemList.nextSibling)
   //nextElementSibling
   // console.log(itemList.nextElementSibling);
    //same like before sibling and before elemnet sibling;
      

         //   create Element:::::::
         //create a div::::
     var newDiv =document.createElement('div');
     //  Add class
       newDiv.className="hello";
    //  Add id
       newDiv.id='hello';
    // Add attribute
      newDiv.setAttribute('title','hello Div');
     // Create text node;
 var newDivText=document.createTextNode("Hello world");
      // Add text to Div;
      newDiv.appendChild(newDivText),
      console.log(newDiv);
      // where to insert :::


      var container =document.querySelector('header .container');
      var h1=document.querySelector('header h1');
      console.log(newDiv);
      container.insertBefore(newDiv,h1);
      // var item =document.querySelector('#items');
      // var li=document.querySelector('#item ');
      // console.log(newDiv);
      // item.insertBefore(newDiv,li);



