import axios from 'axios'; // using axios because is better than fetch(). 

/* As the video explanation
  async function getResults(query){
  const proxy = 'https://crossorigin.me/';
  const key = '12345678910';
  const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
  console.log(res);
}
getResults(pizza) 
*/


// Change of API Source. Use this instead of the video example

export default class Search{
  constructor(query){
    this.query = query;
  }

  async getResults(query){
    try{
    const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`)
    this.result = res.data.recipes
    } catch(error){
      console.log(error);
    }
  }

}
