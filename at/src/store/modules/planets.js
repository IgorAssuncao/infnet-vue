import services from "../../services";

const getters = {
  getFirstTime: (state) => state.firstTime,
  getPlanets: (state) => state.planets,
  getPlanetByName: (state) => (name) =>
    state.planets.find((planet) => planet.name === name),
};

const mutations = {
  EDIT_FIRSTTIME: (state) => (state.firstTime = false),
  FETCH_PLANETS: (state, planets) => (state.planets = planets),
  SAVE_PLANET: (state, planet) => state.planets.push(planet),
  EDIT_PLANET: (state, newPlanet) => {
    const index = state.planets.findIndex(
      (planet) => planet.name === newPlanet.name
    );
    if (index < 0) return state.planets.splice(index, 1, newPlanet);
    state.planets[index] = newPlanet;
  },
  DELETE_PLANET: (state, planetName) =>
    (state.planets = state.planets.filter(
      (planet) => planet.name !== planetName
    )),
};

const actions = {
  changeFirstTime: ({ commit }) => commit("EDIT_FIRSTTIME"),
  fetchPlanets: async ({ commit }) =>
    commit("FETCH_PLANETS", await services("planetsService").getAllPlanets()),
  createPlanet: ({ commit }, planet) => commit("SAVE_PLANET", planet),
  editPlanet: ({ commit }, newPlanet) => commit("EDIT_PLANET", newPlanet),
  deletePlanet: ({ commit }, planetName) => commit("DELETE_PLANET", planetName),
};

const state = {
  firstTime: true,
  planets: [],
};

export default {
  getters,
  state,
  mutations,
  actions,
};
