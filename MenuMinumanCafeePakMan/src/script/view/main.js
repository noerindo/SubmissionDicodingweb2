import'../component/drinnk-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
const main =  () => {
    const searchElement = document.querySelector("search-bar");
    const drinnkListElement = document.querySelector("drinnk-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchDrinnk(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        drinnkListElement.drinnks=results;
    };

    const fallbackResult = message => {
        drinnkListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};
export default main;