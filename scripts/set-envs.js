

require('dotenv').config();


const targetPath = './src/environments/environment.ts';
const envFileContent = `

export const environment = {
mapbox_key: "${ process.env['MAPBOX_KEY']}",
};
`;

mkdir
