//restart game button
var restart=document.querySelector("#b");
//grab all the squares
var squares=document.querySelectorAll('td');
//clear all squares
function clearBoard(){
	for(var i=0; i < squares.length;i++){
		squares[i].textContent='';
	}
}
var click='O';
restart.addEventListener('click',clearBoard);
function changeMarker(){
	
		if(this.textContent===''){
		this.textContent=click;
		check();
		toggle();
		
	}
}

function toggle()
{
	if(click=='O')
		click="X";
	else
		click="O";
}

for(var i=0;i<squares.length;i++){
	squares[i].addEventListener('click',changeMarker)
}
for(i=0;i<9;i++)
{
var b1=squares[0];
var b2=squares[1];
var b3=squares[2];
var b4=squares[3];
var b5=squares[4];
var b6=squares[5];
var b7=squares[6];
var b8=squares[7];
var b9=squares[8];
}
function check()
{  
			if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) 
				console.log("win")
			else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7)))
			console.log("win")
             else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7)))
             console.log("win")
             else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3)))
             console.log("win")
             else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6)))
             console.log("win")
             else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8)))
             console.log("win")
             else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9)))
             console.log("win")
              else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3)))
             console.log("win")



			// if(squares[i].textContent!='')
			// {
			// 	if((squares[0].textContent===squares[1].textContent)&&(squares[1].textContent===squares[2].textContent))
		 //       { console.log('win')
		 //        break;
		 //        }
		 //    else if((squares[3].textContent===squares[4].textContent)&&(squares[4].textContent===squares[5].textContent))
		 //    	{ console.log('win')
		 //           break;
		 //        }
		 //    else if((squares[6].textContent===squares[7].textContent)&&(squares[7].textContent===squares[8].textContent))
			// { console.log('win')
		 //       break;
		 //    }
		 //    else if((squares[0].textContent===squares[3].textContent)&&(squares[3].textContent===squares[6].textContent))
		 //    	{ console.log('win')
		 //           break;
		 //        }
		 //     else if((squares[1].textContent===squares[4].textContent)&&(squares[4].textContent===squares[7].textContent))
		 //    	{ console.log('win')
		 //           break;
		 //        }   
		 //     else if((squares[2].textContent===squares[5].textContent)&&(squares[5].textContent===squares[8].textContent))
		 //    	{ console.log('win')
		 //           break;
		 //        }
		 //      else if((squares[0].textContent===squares[4].textContent)&&(squares[4].textContent===squares[8].textContent))
		 //    	{ console.log('win')
		 //           break;
		 //        }
		 //       else if((squares[2].textContent===squares[4].textContent)&&(squares[4].textContent===squares[8].textContent))
		 //    	{ console.log('win')
		 //           break;
		 //        }

			//  }
			
}
