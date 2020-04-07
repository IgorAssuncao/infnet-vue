import services from "../../services";

const getters = {
  getPlanets: (state) => state.planets,
  getPlanetByName: (state) => (name) =>
    state.planets.find((planet) => planet.name === name),
};

const mutations = {
  FETCH_PLANETS: (state, planets) => (state.planets = planets),
  SAVE_PLANET: (state, planet) => state.planets.push(planet),
};

const actions = {
  fetchPlanets: async ({ commit }) => {
    commit("FETCH_PLANETS", await services("planetsService").getAllPlanets());
  },
  createPlanet: ({ commit }, planet) => commit("SAVE_PLANET", planet),
};

const state = {
  planets: [],
};

export default {
  getters,
  state,
  mutations,
  actions,
};
