export default class CourseDTO {
  constructor({
    id,
    title,
    description,
    category,
    images = [],
    videos,
    plans,
    creators,
    tags,
    isActive,
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.images = images;
    (this.videos = videos), (this.plans = plans);
    this.creators = creators;
    this.tags = tags;
    this.isActive = isActive;
  }
}
