export default class SponsorDTO {
  constructor({
    id,
    name,
    imgs,
    website,
    description,
    sponseredCreators = [],
    clickCounts,
    isActive,
  }) {
    this.id = id;
    this.name = name;
    (this.imgs = imgs), (this.website = website);
    this.description = description;
    this.sponseredCreators = sponseredCreators;
    this.clickCounts = clickCounts;
    this.isActive = isActive;
  }
}
