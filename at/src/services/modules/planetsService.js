export default (axiosClient) => {
  const baseUrl = axiosClient.defaults.baseUrl;
  return {
    getAllPlanets: async () =>
      (await axiosClient(`${baseUrl}planets`)).data.results,
  };
};
