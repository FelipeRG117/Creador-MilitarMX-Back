export default class CreatorDTO {
  constructor({
    id,
    email,
    creatorName,
    name,
    images,
    militaryGrade,
    institutions,
    sponsors = [],
    merches = [],
    courses = [],
    notification,
  }) {
    this.id = id;
    this.email = email;
    this.creatorName = creatorName;
    this.name = name;
    this.images = images;
    this.militaryGrade = militaryGrade;
    this.institutions = institutions;
    this.sponsors = sponsors;
    this.merches = merches;
    this.courses = courses;
    this.notification = notification;
  }
}
