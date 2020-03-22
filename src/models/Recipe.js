import Axios from "axios";

// Change of API Source. Use this instead of the video example
const res = await Axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`)