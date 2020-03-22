// Global app controller
import Search from '../models/Search';
import * as searchView from '../views/searchView'; // will be an Obj 
import { elements } from '../views/base';


/* Global state of the App 
  * Search Object
  * Current Recipe Obj
  * Shopping List Obj
  * Liked recipes
*/

const state = {};

const controlSearch = async () => {
  // 1. get query from view
  const query = searchView.getInput(); // TODO
  console.log(query);

  if(query){
    // 2. New Search obj and add to this.state
    state.search = new Search(query) 
    // state is the empty obj above, create a new property using the Search constructor and retrieves the this.result
  }
  // 3. Prepare UI for results

  // 4. Search for recipes
  await state.search.getResults()

  // 5. Render results on UI
  console.log(state.search.result);
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault(); // so page won't reload
  controlSearch();
});


