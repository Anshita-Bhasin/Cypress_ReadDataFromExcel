const { defineConfig } = require("cypress");
const xlsx = require("xlsx")


function readDataFromExcel(data) {

  const workbook = xlsx.readFile(data.filePath, { dateNF: 'mm/dd/yyyy' });
  const worksheet = workbook.Sheets[data.sheetName];
  return xlsx.utils.sheet_to_json(worksheet, { raw: false });
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        readDataFromExcel: readDataFromExcel,
      })
      return config
    },
  },
});
