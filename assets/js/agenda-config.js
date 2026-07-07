// LockwoodSTEM agenda configuration
// Replace these URLs with your own Google Sheets CSV publish links when you are ready.
// In Google Sheets: File > Share > Publish to web > select the tab > CSV.
// Recommended tab names now match the course names used on the site: IED, POE, ADM, and Quotes.
window.LOCKWOOD_AGENDA_CONFIG = {
  csvUrls: {
    IED: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGavl1IoXufiUADMCgpdT1zif5eFLIDrORvyMxvvQD6XJjWGQsfqa4GjCH_p8SYw/pub?gid=2010815960&single=true&output=csv",
    POE: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGavl1IoXufiUADMCgpdT1zif5eFLIDrORvyMxvvQD6XJjWGQsfqa4GjCH_p8SYw/pub?gid=516081764&single=true&output=csv",
    ADM: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGavl1IoXufiUADMCgpdT1zif5eFLIDrORvyMxvvQD6XJjWGQsfqa4GjCH_p8SYw/pub?gid=2072934888&single=true&output=csv"
  },
  quotesCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGavl1IoXufiUADMCgpdT1zif5eFLIDrORvyMxvvQD6XJjWGQsfqa4GjCH_p8SYw/pub?gid=369538355&single=true&output=csv",
  defaultCourse: "IED",
  courseLabels: {
    IED: "IED",
    POE: "POE",
    ADM: "ADM"
  },
  legacyCourseAliases: {
    IED: ["AED"],
    POE: ["ASE"],
    ADM: ["AM"]
  }
};
