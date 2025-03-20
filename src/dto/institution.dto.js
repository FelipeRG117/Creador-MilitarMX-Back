export default class InstitutionDTO {
  constructor({
    id,
    name,
    description,
    websites,
    images,
    adress,
    contactEmail,
    contactPhones,
    afiliatedCreators,
    estabilshedDate,
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.websites = websites;
    this.images = images;
    this.adress = adress;
    this.contactEmail = contactEmail;
    this.contactPhones = contactPhones;
    this.afiliatedCreators = afiliatedCreators;
    this.estabilshedDate = estabilshedDate;
  }
}
