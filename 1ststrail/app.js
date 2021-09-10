class Navbar{
    constructor(drawer,target){
        this.isOpen =  false;
        this.drawer = drawer;//auter div
        this.target = target;//the list
        this.navList = drawer.querySelector('.nav-drawer__list');
        this.closeBtn = drawer.querySelector('.main-nav-drawer__close')
    }
    // ///////////////
    setEventsListeners(){
        this.target.addEventListener("click",(e)=>{
            if(!this.isOpen){
                return this.open()
            }
               return this.close();
        });
        this.closeBtn.addEventListener("click",()=>{
            this.close();
        });
    }
    // ///////////////
    open(){
        this.isOpen = !this.isOpen;
        this.drawer.classList.add("open-drawer");
        setTimeout(() => {
            this.navList.classList.add('slide-in');
        }, 30);
    }
    // ///////////////////
    close(){
        this.isOpen = !this.isOpen;
        this.navList.classList.remove('slidein');
        setTimeout(() => {
            this.drawer.classList.remove('open-drawer');
        }, 200);
    }
    // /////////////////////
}
// ***********************
const nav = new Navbar(
    document.querySelector('.main-nav-drawer'),
    document.querySelector('.main-nav__btn')
)