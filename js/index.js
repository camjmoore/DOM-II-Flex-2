//* Assignment: Create Unique Event Listeners

//* Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use;

	//* `mouseover`  'Funbus' h1 bounces up and down 
	//* `keydown` p blurs when keydown is used
	//* `wheel`  h2 slightly drifts up when wheel is used
	//* `drag//*//*drop`
	//* `load` 
	//* `focus` 
	//* `resize` 
	//* `scroll` */
	//* `select` 
	//* `dblclick`

//* Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

const logoHeading = document.querySelector('.nav-container .logo-heading');

logoHeading.addEventListener('mouseover', (e) => {
	TweenMax.to(e.target, 3, {
		x:200, 
		ease: Bounce.easeOut, 
		onComplete: () => {
			TweenMax.to(e.target, 3, {
				x:0, 
				ease: Bounce.easeOut
			})
		}
	});
})


const headingImage = document.querySelector('.intro img');

headingImage.addEventListener('dblclick', (e) => {
	TweenMax.from(e.target, 1.5, {
		x:700,
		ease: Elastic.easeOut
	})
})


const imageContainers = document.querySelectorAll('.img-content')

imageContainers.forEach( image => {
	document.addEventListener('scroll', () => {
		TweenMax.to(image, .25, { 
			scale: 1.15, 
			ease: Power4.easeOut, 
			onComplete: () => {
				TweenMax.to(image, .5, { 
					scale:1, 
					ease: Power1.easeOut
				})
			}
		});
	})

})


const paragraphText = document.querySelectorAll('h2')

paragraphText.forEach( paragraphTextItem => {
	paragraphTextItem.addEventListener("mouseenter", () => {
	paragraphTextItem.style.transform = "scale(1.2)";
	paragraphTextitem.style.transition = "all 1s"
	})
})

paragraphText.forEach( paragraphTextItem => {
	paragraphTextItem.addEventListener("mouseleave", () => {
	paragraphTextItem.style.transform = "scale(1.0)";
	paragraphTextitem.style.transition = "all 1s"
	})
})


const navItems = document.querySelectorAll('.nav-link')

navItems.forEach( navItem => {
	navItem.addEventListener('click', (e) => {
		TweenMax.from(navItem, .50, {
			y: 800,
			ease: Elastic.easeOut
		})
		e.preventDefault();
	})
	
})


const allText = document.querySelectorAll('p')

allText.forEach(paragraph => {
	document.addEventListener('wheel', () => { 
		TweenMax.to( paragraph, .25, {
			filter: 'blur(9px)',
			onComplete: () => {
				TweenMax.to(paragraph, .25, { 
					filter: 'none'
				})
			}
		})
	})
})


const backgroundColor = document.querySelector('html, body')
document.addEventListener('keydown', () => {
	backgroundColor.style.background = 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)'
})
	
	
const destinationPackages = document.querySelectorAll('h4')

destinationPackages.forEach( h4 => {
	h4.addEventListener('mousedown', () => { 
		h4.style.transform = "scale(3.0)"
	})
})

destinationPackages.forEach( h4 => {
	h4.addEventListener('mouseup', () => { 
		h4.style.transform = "scale(1.0)"
	})
})

// * Nest two similar events somewhere in the site and prevent the event propagation properly

const destinationBtn = document.querySelectorAll('.btn')

destinationBtn.forEach( btn => {
	btn.addEventListener('wheel', (e) => { 
		TweenMax.to( e.target, .25, {
			filter: 'blur(9px)',
			onComplete: () => {
				TweenMax.to(e.target, .25, { 
					filter: 'none'
				})
			}
		})
		e.stopPropagation();
	})
})

/* preventDefault contained in event handler on line 88 */