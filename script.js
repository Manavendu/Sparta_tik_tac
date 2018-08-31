const Firstplayer = [];
const Secondplayer = [];
var active = 0;
var FuncCalls=0;
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
];
var boxs = document.getElementsByTagName('td');
for (let box of boxs) {
  box.addEventListener('click', function() {
    if (!box.className) {
      play(box.getAttribute('data-num'),box);
    }
		else {
			console.log("error");
		}
  });
};

function play(attribute,element,functionCalls){
  if (active == 0 ) {//0 is playerOne
    element.className = 'selected';
    element.innerHTML = 'X';
    Firstplayer.push(attribute);
    active = 1;
  }
  else {
    element.className = 'selected';
    element.innerHTML = 'O';
    Secondplayer.push(attribute);
    active = 0;
  }
}
function functionCalls()
{
  FuncCalls++;
  console.log(FuncCalls);
  if (FuncCalls == 9)
  {
    alert("Draw");
    location.reload();
  }
}
