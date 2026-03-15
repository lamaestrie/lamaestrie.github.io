var isBurgerMenuOpened = false;

function toggleBurgerMenu() {
	isBurgerMenuOpened = !isBurgerMenuOpened;

	var burgerButton = document.getElementById("burger-button");
	var burgerMenu = document.getElementById("burger-menu");
	var burgerUnderlay = document.getElementById("burger-underlay");

	if (isBurgerMenuOpened) {
		burgerButton.classList.add("open");
		burgerMenu.classList.add("open");
		burgerUnderlay.classList.add("open");
	}
	else {
		burgerButton.classList.remove("open");
		burgerMenu.classList.remove("open");
		burgerUnderlay.classList.remove("open");
	}
}
