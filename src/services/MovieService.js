const endpoint = "movie/";
import { api, apiKey } from "./UseApi";

export default {
  topRated() {
    return api().get(endpoint + "/top_rated?api_key=" + apiKey());
  },
};
