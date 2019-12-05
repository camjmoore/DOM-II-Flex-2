const blocks = document.querySelectorAll('.block');

const blocksDiv = document.querySelector('.blocks');

const blocksArr = Array.from(blocks);

const firstPosition = document.querySelector('.block');

const redBlock = document.querySelector('.block--red'); //0

let savedDistances = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
}

blocks.forEach( (block, index) => {

  block.addEventListener("click", (e) => {
    blocksDiv.removeChild(e.target)
    blocksDiv.prepend(e.target)
  })

  block.addEventListener("mousedown", (e) => {
    interval = window.setInterval(function () {
      savedDistances[index]++
      TweenMax.to(e.target, 0.5, {
        x:savedDistances[index]++,
      })
    }, 10)
  })

  window.addEventListener('mouseup', () => {
    window.clearInterval(interval);
    
  })
})

const block = document.querySelectorAll(".block");

// let lastOrder = 0;
// let xIndex = {
//   "block--red": 0,
//   "block--blue": 0,
//   "block--green": 0,
//   "block--pink": 0,
//   "block--gray": 0
// }
// let interval;
// for (let i = 0; i <= block.length; i++) {
//     block[i].addEventListener('click', function () {
//       lastOrder -= 1;
//       block[i].style.order = `${lastOrder}`;
//     })

//     block[i].addEventListener('mousedown', function () {
//         interval = window.setInterval(function () {
//           xIndex[block[i].classList[1]]++;
//           console.log(xIndex)
//           TweenMax.to(`.${block[i].classList[1]}`, 0.5, {
//             x:xIndex[block[i].classList[1]],
//           })
//         }, 10)
//         interval;
//         console.log("holding it down");
//       })

//       window.addEventListener('mouseup', function () {
//         window.clearInterval(interval);
//         console.log("released");
//       })
//     }