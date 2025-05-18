class menuNavBar {
    constructor(menuToggle, navList, navLinks) {
        this.menuToggle = document.querySelector(menuToggle);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.menuToggle.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menuToggle) {
            this.addClickEvent();
        }
        return this;
    }
}

const menuNavBar = new menuNavBar(
    ".menu-toggle",
    ".nav-list",
    ".nav-list li",
);
menuNavBar.init();