//query selector::::::::::::::::


// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// console.log(secondItem);
// secondItem.style.backgroundColor='green';




// Make the 3rd item invisible:::::::::::

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// console.log(thirdItem);
// thirdItem.style.display='none';

// Using QuerySelectorALL ::::::

//  1) change the font color to green for 2nd item in the item list::::

// var secondItem = document.querySelectorAll('.list-group-item');
// console.log(secondItem[1]);
// secondItem[1].style.backgroundColor='green';


// 2)Choose all the odd elements and make their background green using
//  QuerySelectorALL

var odd = document.querySelectorAll('li:nth-child(Odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i = 0;i<odd.length;i++){
    odd[i].style.backgroundColor='grey';
    even[i].style.backgroundColor='pink';

}

