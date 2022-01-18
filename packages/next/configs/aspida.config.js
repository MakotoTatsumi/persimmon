module.exports = {
  input: "./src/libs/apiClient", // "input" of aspida is "output" for openapi2aspida
  outputEachDir: true, // Generate $api.ts in each endpoint directory
  openapi: { inputFile: "../strapi/extensions/documentation/documentation/1.0.0/full_documentation.json" }
}
