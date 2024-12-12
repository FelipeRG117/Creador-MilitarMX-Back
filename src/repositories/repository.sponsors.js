import { sponsorModel } from "../models/model.sponsors.js";

export class SponsorRepository {
  async getAllSponsors() {
    try {
      //aqui pedirmeos el modeloo
      const Sponsors = await sponsorModel.find();
      console.log("estoes sponsors", Sponsors);
      return Sponsors;
    } catch (error) {
      console.log(error);
    }
  }
}
