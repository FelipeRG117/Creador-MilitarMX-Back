import { SponsorRepository } from "../repositories/repository.sponsors.js";
const sponsorRepository = new SponsorRepository();

export class SponsorController {
  async getSponsors(req, res) {
    try {
      const Sponsors = await sponsorRepository.getAllSponsors();
      console.log("sponsor cl", Sponsors);
      return res.json(Sponsors);
    } catch (error) {
      console.log(error);
    }
  }
}
