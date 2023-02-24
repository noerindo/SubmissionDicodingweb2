class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
  
    render() {
  this.shadowDOM.innerHTML =`
  <style>
  *{
      margin:10px;
      padding:4px;
      box-sizing:boerder-box;
      border-radius: 10px;
      
  }
  :host{
    display:block;
    width: 100%;
    height:100px;;
    background-color:#2F4F4F;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    
}
h1{
    padding:16px;
    
}
p{
    padding:16px;
    color:black;
    
}

</style>
  <h2>Menu Drink</h2>
  <p>Silahkan cari menu minuman</p>`;
    }
 }
 customElements.define("app-bar", AppBar);