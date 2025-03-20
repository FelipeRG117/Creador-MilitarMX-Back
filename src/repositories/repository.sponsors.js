import { sponsorModel } from "../models/model.sponsors.js";
import SponsorDTO from "../dto/sponsor.dto.js";
export class SponsorRepository {
  async getAllSponsors() {
    try {
      //aqui pedirmeos el modeloo
      const sponsorsData = await sponsorModel
        .find()
        .populate("sponseredCreators")
        .lean();
      const Sponsor = sponsorsData.map(
        (sponsor) =>
          new SponsorDTO({
            id: sponsor._id.toString(),
            name: sponsor.name,
            imgs: sponsor.imgs,
            website: sponsor.website,
            description: sponsor.description,
            sponseredCreators: sponsor.sponseredCreators || [],
            clickCounts: sponsor.clickCounts,
            isActive: sponsor.isActive,
          })
      );
      console.log("estoes sponsors", Sponsor);
      return Sponsor;
    } catch (error) {
      console.log(error);
    }
  }
}
