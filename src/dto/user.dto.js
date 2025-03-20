export default class UserDTO {
  constructor({
    id,
    userName,
    firstName,
    preference,
    notification,
    location,
    followed,
  }) {
    this.id = id;
    this.userName = userName;
    this.firstName = firstName;
    this.preference = preference;
    this.notification = notification;
    this.location = location;
    this.followed = followed;
  }
}
