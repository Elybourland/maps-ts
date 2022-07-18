/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

const customMap = new CustomMap('map');

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);

// parcel index.html in cmd line to run in browser

// const map = document.getElementById('map');
// new google.maps.Map(map as HTMLElement, {
//   zoom: 1,
//   center: {
//     lat: 0,
//     lng: 0
//   }
// });

