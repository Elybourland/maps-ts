export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const map = document.getElementById(divId);
    this.googleMap = new google.maps.Map(map as HTMLElement, {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      });
  }
}