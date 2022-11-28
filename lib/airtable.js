const AirtablePlus = require('airtable-plus')

const API_KEY = process.env.AIRTABLE;

export const registrationsAirtable = new AirtablePlus({
  baseID: 'appHdQ4iabQYiIFXL',
  apiKey: API_KEY,
  tableName: 'Registrations',
})
