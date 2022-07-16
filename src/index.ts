/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

// parcel index.html in cmd line to run in browser

const map = document.getElementById('map');
new google.maps.Map(map as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});

