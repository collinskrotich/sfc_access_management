import mongoose, {Schema} from "mongoose";

const gatekeeperSchema = new Schema(
  {
    name: String,
    phoneNo: String,
    staffNo: String,
    station: String,
    onDuty: Boolean
  },
  {
    timestamps: true,
  }
);

const Gatekeeper = mongoose.models.Gatekeeper || mongoose.model("Gatekeeper", gatekeeperSchema);

module.exports = Gatekeeper;
