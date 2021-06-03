const hamburger = document.querySelector('.navhead .nav-bar .navlist .hamburger');
const mobile_menu = document.querySelector('.navhead .nav-bar .navlist ul');
const menu_item = document.querySelectorAll('.navhead .nav-bar .navlist ul li a');
const header = document.querySelector('.navhead.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
	var scroll_position=window.scrollY;
	if(scroll_position>250){
		navhead.style.backgroundColor="#29323c";
	}else{
		navhead.style.backgroundColor="transparent";
	}
})

menu_item.forEach(item=>{
	item.addEventListener('click', ()=>{
		hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
	})
})