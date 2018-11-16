
// Grabbing elements
const trigger = document.querySelector('button'),
      heading = document.querySelector('.introHeading'),
      intro = document.querySelector('.intro'),
      introLayer = document.querySelector('.introLayer');

// Hover effect over .introLayer
introLayer.addEventListener('mouseover', function(){
   intro.classList.add('semiTransparent');
})

introLayer.addEventListener('mouseleave', function(){
   intro.classList.remove('semiTransparent');
})

// Hover effect over button
trigger.addEventListener('mouseover', function(){
   intro.classList.add('semiTransparent');
})

trigger.addEventListener('mouseleave', function(){
   intro.classList.remove('semiTransparent');
})
// Hover effect over .introHeading
heading.addEventListener('mouseover', function(){
   intro.classList.add('semiTransparent');
})

heading.addEventListener('mouseleave', function(){
   intro.classList.remove('semiTransparent');
})

// Disappear of the intro
trigger.addEventListener('click', function(){
   intro.classList.add('gone');
});

