import { createCipheriv } from "crypto";
import { Fetchparams } from "./type";

/**
 * Fetches data from themoviedb.org API endpoint and returns to the user
 *
 * @param URLExtension - the extension over the base API for example: /movie/550
 * @param URLparams array of url parameters to add to fetch request. For example [{param:Query, value:string}]
 * @returns Returns base object from the API parsed through response.json
 */
// export const APIFetch = async (
//   URLExtension: string,
//   URLparams?: Fetchparams[]
// ) => {
//   //Basic Fetch URL without params
//   const url = `${process.env.REACT_APP_BASE_URL}/3${URLExtension}?api_key=${process.env.REACT_APP_APIKEY}`;
//   let finalUrl = "";
//   //reduce additional parameters to string

//   if (URLparams && URLparams.length) {
//     const additionalParams = URLparams.reduce((acc, { param, value }) => {
//       return acc + `&${param}=${value}`;
//     }, "");
//     //create final URL params to Fetch
//     finalUrl = `${url}${additionalParams}`;
//   } else {
//     finalUrl = encodeURI(url);
//   }
//   //Fetch data
//   const results = await fetch(finalUrl)
//     .then(async (response) => {
//       if (response.status === 200) {
//         const data = await response.json();
//         return data;
//       }
//       //if Missing API key
//       if (response.status === 401) {
//         throw new Error("Missing API key");
//       }
//       //If there is no data available
//       if (response.status === 404) {
//         const data = await response.json();
//         return {
//           Errormessage: data.status_message,
//           Errorcode: data.statuscode,
//         };
//       }
//     })
//     .catch((err: Error) => {
//       console.error(err.message);
//       return err;
//     });
//   return results;
// };

export const APIFetch = async (
  requestURL: string,
  URLparams?: Fetchparams[]
) => {
  const fetchURL = `${process.env.REACT_APP_BASE_URL}${requestURL}?api_key=${process.env.REACT_APP_APIKEY}`;
  const queryParams = URLparams?.reduce(
    (acc, { param, value }: Fetchparams) => {
      acc += `&${param}=${value}`;
      return acc;
    },
    ""
  );

  const apiURL = queryParams ? fetchURL + encodeURI(queryParams) : fetchURL;
  const response = await fetch(apiURL);
  if (response.status === 200) {
    const results = await response.json();
    return results;
  } else if (response.status === 500) {
    return { error: "something went wrong!" };
  } else {
    return { error: response.statusText };
  }
};
