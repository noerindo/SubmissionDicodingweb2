class DrinnkItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set drinnk(drinnk) {
        this._drinnk = drinnk;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
        }

        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            align:center;
        }
        
        .fan-art-drinnk {
            width: 80%;
            max-height: 270px;
            object-fit: cover;
            object-position: center;
            padding=12px;
        }
        
        .drinnk-info {
            padding: 24px;
        }
        
        .drinnk-info > h2 {
            font-weight: lighter;
        }
        
        .drinnk-info > p {
            background-color:#FFD700 ;
            margin-top: 10px;
            padding:5px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
        </style>
        <img class="fan-art" src="${this._drinnk.strDrinkThumb}" alt="Fan Art">
            <div class="drinnk-info">
            <h2>${this._drinnk.strDrink}</h2>
            <p>${this._drinnk.strCategory}</p>
            <p>${this._drinnk.strGlass}</p>
            <p>${this._drinnk.strAlcoholic}</p>
           
            </div>`;
    }
 }
 customElements.define("drinnk-item", DrinnkItem);