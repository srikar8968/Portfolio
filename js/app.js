const skills = [
  {
    name: 'HTML',
    level: 90
  },
  {
    name: 'CSS',
    level: 90
  },
  {
    name: 'Javascript',
    level: 85
  },
  {
    name: 'Bootstrap',
    level: 90
  },
  {
    name: 'VueJS',
    level: 80
  },
  {
    name: 'PHP',
    level: 80
  },
  {
    name: 'MySQL',
    level: 75
  },
  {
    name: 'Laravel',
    level: 80
  },
  {
    name: 'Codeigniter',
    level: 85
  },
  {
    name: 'Photoshop',
    level: 65
  }
];
getMySkills();
function getMySkills(){
  for(skill in skills){
    var node = document.createElement('div');
    var nodeChild = document.createElement('div');
    var nodeText = document.createTextNode(skills[skill].name);
    node.classList.add('progress');
    nodeChild.classList.add('progress-bar');
    nodeChild.style.width = skills[skill].level + '%';
    nodeChild.setAttribute('title', skills[skill].name + ' - ' + skills[skill].level + '%');
    nodeChild.setAttribute('role', 'progressbar');
    nodeChild.setAttribute('aria-valuenow', skills[skill].level);
    nodeChild.setAttribute('aria-valuemin', '0');
    nodeChild.setAttribute('aria-valuemax', '100');
    nodeChild.setAttribute('role', 'progressbar');
    nodeChild.appendChild(nodeText);
    node.appendChild(nodeChild);
    document.getElementById('skill__set').appendChild(node);
  }
}

window.onscroll = function() {onPortfolioExp()};
function onPortfolioExp() {
  var element = document.getElementById("portfolioLogo");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
}

function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}
function doScrolling(element, duration = 1000) {
  const offset = 70;
  var startingY = window.pageYOffset
  var elementY = getElementY(element)
  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
  var diff = targetY - startingY - offset;
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  var start

  if (!diff) return

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}