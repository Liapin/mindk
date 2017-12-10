//Task 1
let btn = document.getElementById('insertButton');
let copyCounter = 0;
btn.onclick = () => {
  const position = document.getElementsByTagName('select')[0].selectedIndex;
  const container = document.getElementById('container');
  switch(position) {
    case 0:
      container.insertAdjacentElement('afterBegin', getFragment(++copyCounter));
      break;
    case 1:
      container.insertBefore(getFragment(++copyCounter), container.children[Math.floor(copyCounter/2)]);
      break;
    case 2:
      container.appendChild(getFragment(++copyCounter));
      break;
  }
};

function getFragment(copyCounter) {
  let fragment = document.getElementsByTagName('pre')[0].innerHTML;
  fragment = fragment.replace('#', copyCounter);
  const pre = document.createElement('pre');
  pre.innerHTML = fragment;
  return pre;
}

//Task 2
const elem = document.getElementsByClassName('play')[0]
document.getElementById('playAnimation').onclick = (e) => {
  e.preventDefault();
  if(parseInt(elem.style.left) === 0)
    elem.style.left = elem.parentElement.offsetWidth - elem.offsetWidth + 'px';
  else
    elem.style.left = 0 + 'px';
}
