var images = [
	'../img/slide-item-7.jpg',
	'../img/slide-item-8.jpg',
	'../img/slide-item-9.jpg',
	'../img/slide-item-10.jpg',
	'../img/slide-item-11.jpg',
];

new rbgShiftSlider({
	nav: true,
	navElement: '.scene-nav',
	slideImages: images,
	stageWidth: 1920,
	stageHeight: 1280,
	displacementImage: './img/displace-circle.png',
	fullScreen: true,
	transitionDuration: 0.35, // must be 0.1 > transitionGhostDuration
	transitionGhostDuration : 0.25,
	transitionFilterIntensity: 350,
	transitionSpriteIntensity: 2,
	mouseDispIntensity: 3,
	interactive: true,
	autoPlay: true,
	autoPlaySpeed: 15000,
});