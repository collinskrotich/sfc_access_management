import mongoose, {Schema} from "mongoose";

const gatekeeperSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a gatekeeper"],
    },
    onDuty: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Gatekeeper = mongoose.models.Gatekeeper || mongoose.model("Gatekeeper", gatekeeperSchema);

module.exports = Gatekeeper;
