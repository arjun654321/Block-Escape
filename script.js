const g = document.getElementById("g");
const lvl = document.getElementById("lvl");
const reset = document.getElementById("reset");
const up = document.getElementById("up");
const left = document.getElementById("left");
const right = document.getElementById("right");
const down = document.getElementById("down");
const clk = document.getElementById("clk");
const startBtn = document.getElementById("start-btn");

const player = document.createElement("div");
player.classList.add("g__player");

let lvlNum = 0;
let cellSize = 29;
const levels = [
    ["ox---", "---xe"],
    ["ox---", "---xe", "--xxx"],
    ["o--xx", "x--xe", "--x--", "-----", "-----"],
    ["e-xx-", "x--xx", "--xo-", "-x---", "-----"],
    ["xx--e", "---xx", "--xxx", "----x", "-x-ox"],
    ["ox--e", "-x-xx", "---xx", "--xxx", "x---x"],
    ["ox--x", "-x-xe", "---x-", "x----", "x---x"],
    ["ox---", "---xe", "--xxx", "---x-", "x----"],
    ["ox--x", "-----", "x--x-", "x--e-", "x---x"],
    ["ox---", "---x-", "x----", "---xx", "xexxx"],
    ["o-x--", "--x--", "x----", "x--ex", "x--xx"],
    ["ox--x", "---x-", "--e--", "x-x--", "x---x"],
    ["---x---", "-x----e", "--x----", "x------", "o-----x"],
    ["ox----x---", "--------xe", "-----x---x"],
    [
      "xxo---x---",
      "--------x-",
      "-----x----",
      "--x-------",
      "---------e",
      "-x---x----"
    ],
    ["xollx---", "l-----xe"],
    [
      "xx----x--o",
      "------x---",
      "--------xx",
      "--x----x--",
      "---ll----e",
      "xx-xx---x-"
    ],
    [
      "xx----x--o",
      "------x---",
      "---x----xx",
      "--x----x--",
      "--x-xx----",
      "---x----xx",
      "--x-------",
      "----xlll--",
      "xx-xxlllxe"
    ],
    [
      "xx----x--o",
      "------x--x",
      "-lxlx-----",
      "-llx--x-xx",
      "-lx-------",
      "-llx----xx",
      "-lxx---x--",
      "----x-----",
      "xxe-x---x-"
    ],
    [
      "xx----x---",
      "------x--x",
      "--x-x-----",
      "x--x--x-xx",
      "l-xx------",
      "l--xlll--x",
      "l-xxlxlx--",
      "l---xe--x-",
      "xx------xo"
    ],
    [
      "xx----x---",
      "---l--x--x",
      "---l------",
      "x--x--x-x-",
      "-----x--x-",
      "--ex-x----",
      "--x-----x-",
      "----------",
      "xx-------o"
    ],
    [
      "xx----x---",
      "---l--x--x",
      "---l----l-",
      "------x-x-",
      "-----x--x-",
      "--lx-x----",
      "--x-----x-",
      "-l---xx---",
      "ex-------o"
    ],
    ["xx----xxll", "---x----lx", "-lxx-lx--o", "-x---lx---", "--elxxx--x"],
    [
      "xx----xxll",
      "ll-x----lx",
      "ll-l-xx-lx",
      "ll-l-ll-lx",
      "---x----lx",
      "-lxx-xl--o",
      "-xlllex---",
      "------x--x"
    ],
    [
      "xx----llll",
      "------exlx",
      "-l-l-xxxlx",
      "-l-l-ll-xx",
      "---x-----x",
      "-lxx-xl--o",
      "-xll-lxx--",
      "------x--x"
    ],
    [
      "xx--------",
      "--llx--xl-",
      "-x----xlx-",
      "-l---x-xx-",
      "-l-x------",
      "---x---x-x",
      "-lxx-xl--o",
      "exll-lxx--",
      "x--------x"
    ],
    ["o---s---", "--------", "---xe--s", "--------"],
    [
      "o--xxx----",
      "---xxx-x--",
      "-------e--",
      "-----x-s--",
      "---xx----x",
      "x------xxx"
    ],
    [
      "o-------s-",
      "-x-xxx-x--",
      "---------e",
      "-----x----",
      "---xx----x",
      "x------xxx"
    ],
    [
      "o---------",
      "---xxx-x--",
      "-s-s--slse",
      "-----x----",
      "---xx----x",
      "x-----xxxx"
    ],
    [
      "o---------",
      "------s-s-",
      "-s-s------",
      "-------ss-",
      "---s-ss---",
      "-s-----e--"
    ],
    [
      "o---------",
      "------s-s-",
      "-s-s------",
      "--------s-",
      "----s--s--",
      "----s---s-",
      "---s-ss---",
      "-s-----e--"
    ],
    [
      "o------e--",
      "--lll-s-s-",
      "-s-s------",
      "---llll-s-",
      "----s--s--",
      "--lls---ss",
      "---s-ssll-",
      "-s--------"
    ],
    [
      "o-xxx---x-",
      "--lll-s-s-",
      "-s-s---x--",
      "xx-llll-s-",
      "----sxxx--",
      "--lls---ss",
      "---sxxxll-",
      "-s-s---ex-"
    ],
    [
      "--xxx---x-",
      "--lll-s-s-",
      "-s-s---xll",
      "-l-llx--s-",
      "---lsxxx--",
      "--lls---ss",
      "---sxxxll-",
      "xs-s---exo"
    ],
    [
      "-s--x---x-",
      "e--ll-s-s-",
      "x--s---xll",
      "-l-l-xlll-",
      "----sxxx--",
      "-l-ls---ss",
      "--s-xxxll-",
      "xs-s----lo"
    ],
    [
      "es--l-----",
      "xxx---s---",
      "ol-ls---ss",
      "--s-xx-ll-",
      "xs-s----l-",
      "x--s---xl-",
      "-l-l-xlll-",
      "----s-----"
    ],
    ["-x-e---xxx", "-x--xlsllx", "s------x--", "-xs-xl-l--", "---------o"],
    [
      "lllls--x--",
      "sxxx-s-x--",
      "-x--slell-",
      "-x--xlx-l-",
      "s--------s",
      "-xsxxx-ls-",
      "-xs-xlxx--",
      "-xs-xlol--",
      "--slll---x"
    ],
    [
      "s-e-s-x-s-",
      "x--lx-slx-",
      "sss-ls--ss",
      "x-x-x-x-x-",
      "-sl-s-l-s-",
      "-x--llo-ss",
      "-xs-xlxx--",
      "s--s--s--s",
      "x--s--x--s"
    ],
    [
      "x-l-l-lxe-",
      "------xlx-",
      "-l--l--l--",
      "-lx-x--xx-",
      "-x--xx--l-",
      "----ll----",
      "x--x--x--l",
      "-l-l---l-l",
      "o--xl---xl"
    ],
    [
      "ss-ss-s--s",
      "o--s----s-",
      "-s--s--s--",
      "--ss--s---",
      "-s--ss--s-",
      "-------s-e",
      "s--s--s--s",
      "----s----s",
      "s--s--s--s"
    ],
    [
      "s-sss-s-ss",
      "---s--ss-s",
      "-----s-s--",
      "s-ss--s---",
      "-s--s---s-",
      "-------s--",
      "s--s--s--s",
      "-s--s-s--s",
      "s--soe----"
    ],
    [
      "s-s---s--s",
      "o--s--ss-s",
      "-s---s-s--",
      "s-ss--s---",
      "-s------s-",
      "--s-s--s--",
      "s--s--s--s",
      "-s--s-s--s",
      "s--s----e-"
    ],
    [
      "-s--sll--s",
      "---sllss-s",
      "-s---s----",
      "s-ss--s-ll",
      "-s-ll--s-l",
      "--s-s--s--",
      "sl-s--s--s",
      "-s--s-s--s",
      "s--s-eloll"
    ],
    [
      "-s-------s",
      "x--sllss-s",
      "lsllls-xx-",
      "l-ss--s-ll",
      "-sxx-----l",
      "-xxll--s--",
      "---sl-s--s",
      "--x-l-s--s",
      "--ls-xl-ll",
      "-sl--ex--o"
    ],
    [
      "os-xx------s--",
      "x--sllssxx---x",
      "lsllls-xx-s-xx",
      "l-ss--s-ll-xx-",
      "-s-l--xx---lxx",
      "-x-ll--s--xx-l",
      "-x---sl-s--ll-",
      "---xx-l-s--s-e"
    ],
    [
      "o---e-------------",
      "xxxx-xxxxxxxxxxxx-",
      "----------------x-",
      "-xxx-xxxxxxxxxx-x-",
      "------------------",
      "xxxx------------xx"
    ],
    [
      "xxxx-xxxxxxxxxxxxx",
      "e-----------------",
      "xxxx-xxxxxxxx-xxx-",
      "o-----------------",
      "xxxx-xxxxxxxx-xxx-",
      "----------------x-",
      "-xxx-xxxxxxxx-x-x-",
      "------------------",
      "xxxx------------xx",
      "xxxx-xxxxxxxx-xxxx",
      "xxxx----------xxxx"
    ],
    [
      "xxxx----------xxxx",
      "xxxx-xxxx-xxx-xxxx",
      "------------------",
      "xxxx-xxxx-xxx-xxx-",
      "o-----------------",
      "xxxx-xxxx-xxx-x-x-",
      "----------xxx-x-x-",
      "-xxx-xxxx-xxx-x-x-",
      "------------------",
      "xxxx------------xx",
      "xxxx-xxxx-xxx-xxxx",
      "e-------------xxxx",
      "xxxx------xxxxxxxx"
    ],
    [
      "xxxx----xx----xxxx",
      "xxox-xx-xx-xx-xxxx",
      "e----------xx-----",
      "xx-x-xxxxx-xx-xxx-",
      "------------------",
      "-x-x-xx-xx-xx-x-x-",
      "-----------xx-x-x-",
      "-x-x-xx-xx-xx-x-x-",
      "------------------",
      "xx--------------x-",
      "xxxx-xxxxx-xx-xxx-",
      "--------------xxx-",
      "xxxx--------------"
    ],
    [
      "xxxx----xx----xxxx",
      "xxox-xx-xx-xx-xxxx",
      "e----------xx-----",
      "-x-x-xx-xx-xx-x-x-",
      "-------------s----",
      "xx--------------x-",
      "xxxx-xxxxx-xx-xxx-",
      "--------------xxx-",
      "xxxx--------------"
    ],
    ["oe"]
];

let initPos = [];
let currPos = [];
let endPos = [];
let obstacles = [];
let startTime = Date.now();

const totalLevels = levels.length; 

const createLevel = () => {
  if (lvlNum === 0) {
    g.classList.add("g--tutorial");
  } else {
    g.classList.remove("g--tutorial");
  }
  document.body.style = `--cell: ${cellSize / levels[lvlNum][0].length}rem`;
  obstacles = [];
  levels[lvlNum].forEach((row, rIdx) => {
    const cells = row.split("");
    cells.forEach((cell, cIdx) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("g__cell");
      if (cell === "o") {
        initPos = [cIdx, rIdx];
        currPos = [cIdx, rIdx];
      } else if (cell === "x") {
        obstacles.push([cIdx, rIdx, "rock"]);
        newDiv.classList.add("g__cell--rock");
      } else if (cell === "l") {
        obstacles.push([cIdx, rIdx, "lava"]);
        newDiv.classList.add("g__cell--lava");
      } else if (cell === "s") {
        obstacles.push([cIdx, rIdx, "stop"]);
        newDiv.classList.add("g__cell--stop");
      } else if (cell === "e") {
        endPos = [cIdx, rIdx];
        newDiv.classList.add("g__cell--end");
      }
      g.appendChild(newDiv);
    });
  });
  g.appendChild(player);
  
  
  lvl.innerHTML = `Level: ${lvlNum + 1}/${totalLevels}`; 
};

const setPlayerPos = () => {
  player.style = `--posLeft: ${currPos[0]}; --posTop: ${currPos[1]};`;
};

const blockEvent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const levelWin = () => {
    g.classList.add("g--win");
    document.addEventListener("keydown", blockEvent);
    removeCtrlEvents();
    setTimeout(() => {
      g.innerHTML = "";
      g.classList.remove("g--win");
      lvlNum++;
      lvl.innerHTML = lvlNum;
      createLevel();
      setPlayerPos();
      document.removeEventListener("keydown", blockEvent);
      addCtrlEvents();
    }, 500);
  };

  const handleBurstEffect = () => {
    player.classList.add("burst-effect");
    setTimeout(() => {
      player.classList.remove("burst-effect");
    }, 500);
  };
  
  const checkNextLevel = () => {
    if (currPos[0] === endPos[0] && currPos[1] === endPos[1]) {
      if (lvlNum === levels.length - 1) {
        const elapsed = (Date.now() - startTime) / 1000;
        clk.innerHTML = `${parseInt(elapsed / 3600)}h ${parseInt((elapsed / 60) % 60)}m ${parseInt(elapsed % 60)}s`;
        g.classList.add("g--final-win");
      } else {
        levelWin();
      }
    }
  };

const levelLose = () => {
  g.classList.add("g--lose");
  document.addEventListener("keydown", blockEvent);
  removeCtrlEvents();
  setTimeout(() => {
    g.classList.remove("g--lose");
    currPos = [...initPos];
    setPlayerPos();
    document.removeEventListener("keydown", blockEvent);
    addCtrlEvents();
  }, 500);
};



const movePlayer = (axis, perpAxis, forward) => {
  const relevantObs = obstacles
    .filter((obs) => obs[axis] === currPos[axis])
    .filter((obs) => forward ? obs[perpAxis] > currPos[perpAxis] : obs[perpAxis] < currPos[perpAxis]);
  
  if (relevantObs.length) {
    const minMax = forward ? Math.min(...relevantObs.map((obs) => obs[perpAxis])) : Math.max(...relevantObs.map((obs) => obs[perpAxis]));
    const relevantRock = relevantObs.find((obs) => obs[perpAxis] === minMax);
    if (relevantRock[2] === "rock") {
      currPos[perpAxis] = forward ? minMax - 1 : minMax + 1;
    } else {
      currPos[perpAxis] = minMax;
      if (relevantRock[2] === "lava") {
        levelLose();
      }
    }
  } else {
    const maxCells = axis === 1 ? levels[lvlNum][currPos[1]].length : levels[lvlNum].length;
    currPos[perpAxis] = forward ? maxCells - 1 : 0;
  }
  setPlayerPos();
  checkNextLevel();
};

const moveUp = () => movePlayer(0, 1, false);
const moveLeft = () => movePlayer(1, 0, false);
const moveRight = () => movePlayer(1, 0, true);
const moveDown = () => movePlayer(0, 1, true);

const addCtrlEvents = () => {
    up.addEventListener("click", moveUp);
    left.addEventListener("click", moveLeft);
    right.addEventListener("click", moveRight);
    down.addEventListener("click", moveDown);
  };

const removeCtrlEvents = () => {
  up.removeEventListener("click", moveUp);
  left.removeEventListener("click", moveLeft);
  right.removeEventListener("click", moveRight);
  down.removeEventListener("click", moveDown);
};


createLevel();
setPlayerPos();
addCtrlEvents();

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      moveRight();
    } else if (event.key === "ArrowLeft") {
      moveLeft();
    } else if (event.key === "ArrowDown") {
      moveDown();
    } else if (event.key === "ArrowUp") {
      moveUp();
    }
  });
  
  reset.addEventListener("click", () => {
    currPos = [...initPos];
    setPlayerPos();
  });









startBtn.addEventListener("click", () => {
  document.getElementById("start-screen").classList.add("start-screen--hidden");
});