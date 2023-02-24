import './drinnk-item.js';
class DrinnkList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set drinnks(drinnks) {
        this._drinnks = drinnks;
        this.render();
  
    }
    render() {
        this.shadowDOM.innerHTML = "";
       this._drinnks.forEach(drinnk => {
           const drinnkItemElement = document.createElement("drinnk-item");
           drinnkItemElement.drinnk = drinnk
           this.shadowDOM.appendChild(drinnkItemElement);
       })
       
    }
    renderError(message){
        this.shadowDOM.innerHTML = `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color:#2F4F4F ;
            
        }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message}</h2>`;
    }
  
   
 }
 customElements.define("drinnk-list", DrinnkList);