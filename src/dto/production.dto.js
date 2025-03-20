export default class ProductionDTO {
  constructor({
    id,
    relatedEntity,
    entityType,
    title,
    description,
    videoUrl,
    thumbnailUrl,
    tags,
    views,
    likes,
    isFeatured,
  }) {
    this.id = id;
    this.relatedEntity = relatedEntity;
    this.entityType = entityType;
    this.title = title;
    this.description = description;
    this.videoUrl = videoUrl;
    this.thumbnailUrl = thumbnailUrl;
    this.tags = tags;
    this.views = views;
    this.likes = likes;
    this.isFeatured = isFeatured;
  }
}
