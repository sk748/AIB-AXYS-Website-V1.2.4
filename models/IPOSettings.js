import mongoose from 'mongoose';

const IPOSettingsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: 'KPC IPO',
    },
    targetDate: {
      type: Date,
      required: true,
      default: () => new Date('2026-02-19T17:00:00'),
    },
    applyNowLink: {
      type: String,
      default: 'https://kpcipo.e-offer.app/',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      default: 'Kenya Pipeline Company IPO',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.IPOSettings || mongoose.model('IPOSettings', IPOSettingsSchema);
