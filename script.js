const stick1 = document.querySelector('#stick1');
const stick2 = document.querySelector('#stick2');
const stick3 = document.querySelector('#stick3');
const sticks = [stick1, stick2, stick3];
const startBtn = document.querySelector('#startBtn');
const stepCounter = document.querySelector(".counter");

let selected = '';
let stack1 = []
let stack2 = []
let stack3 = []
let steps = 0
let stacks = [stack1, stack2, stack3];
let selectedStack;
let gameStarted = false;


for (let stick of sticks){
	stick.addEventListener('click', function(e) {
		if (gameStarted){
		if (!(selected === '')) {
			selected = '';
			//check if selectedstack[-1] is smaller than this stack
			check_illegal_move(selectedStack, stacks[sticks.indexOf(this)]) 
			check_win()
			selectedStack = '';
		} else {
			selected = this.id
			this.classList.add('selected');
			selectedStack = stacks[sticks.indexOf(this)]
		}
	}
	})
}

startBtn.addEventListener('click', function(e) {
	start()
})


function check_win() {
	if (stack3.length === 5) {
		alert(`congratulations! you won! you took ${steps} moves!`)
		start()
	}
}
function check_illegal_move(from, to) {
	if (to.length === 0 || from[from.length-1] < to[to.length-1] || from === to) {
		to.push(from.pop())
		sticks[stacks.indexOf(from)].innerText = from;
		sticks[stacks.indexOf(to)].innerText = to;
		steps++;
		stepCounter.innerText = `Steps: ${steps}`;
	} else {
		alert('bad move')
	}
	for (let stick of sticks) {
		stick.classList.remove('selected');
	}
}

function start() {
	stack1 = [5,4,3,2,1]
	stack2 = []
	stack3 = []
	steps = 0
	stacks = [stack1, stack2, stack3];
	stepCounter.innerText = "Steps: 0"
	stick1.innerText = "5,4,3,2,1"
	stick2.innerText = ""
	stick3.innerText = ""
	gameStarted = true;
}