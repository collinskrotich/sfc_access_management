import mongoose, {Schema} from "mongoose";

const gatekeeperSchema = new Schema(
  {
    name: {
      type: String,
    },
    onDuty: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Gatekeeper = mongoose.models.Gatekeeper || mongoose.model("Gatekeeper", gatekeeperSchema);

module.exports = Gatekeeper;
