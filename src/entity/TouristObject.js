class TouristObject {
  constructor(id, name, location, description, img, lat, lon) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.description = description;
    this.img = img;
    this.lat = lat;
    this.lon = lon;
  }
  
  toString() {
    return `${this.name} - ${this.location}\n${this.description}`;
  }
}
export default TouristObject