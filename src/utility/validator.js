import { date, z } from "zod";

export const agencySchema = z.object({
  agencyType: z.string().min(1, "Agency type is required"),
  agencyName: z.string().min(2, "Agency name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
  phoneNumber: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  documentType: z.string().min(1, "Document type required"),
  whatsapp: z.string().min(1, "Whatsapp number is required"),
  profilePic: z
    .any()
    .optional()
    .refine((files) => files?.length > 0, "Profile picture is required"),
  documentFront: z
    .any()
    .optional()
    .refine((files) => files?.length > 0, "Document front is required"),
  documentBack: z
    .any()
    .optional()
    .refine((files) => files?.length > 0, "Document back is required"),
});

export const bannerSchema = z.object({
  bannerName: z.string().min(2, "Banner name is required"),
  bannerLink: z.string().optional(),
  webLink: z.string().optional(),
  description: z.string().optional(),
  price: z.string().optional(),
  bannerFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner file is required")
    .refine(
      (files) =>
        [
          "image/png",
          "image/svg+xml",
          "video/mp4",
          "image/jpeg",
          "image/jpg",
        ].includes(files?.[0]?.type),
      "Invalid file type",
    ),
});

// badge schema
export const badgeSchema = z.object({
  badgeName: z.string().min(2, "Badge name is required"),
  badgeDescription: z.string().optional(),
  badgePrice: z.string().optional(),
  // badgeValidity: z.string().min(1, "Badge validity is required"),
  badgeFile: z
    .any()
    .refine((files) => files?.length > 0, "Badge file is required")
    .refine(
      (files) =>
        [
          "image/png",
          "image/svg+xml",
          "image/jpeg",
          "image/jpg",
          "image/gif",
        ].includes(files?.[0]?.type),
      "Invalid file type",
    ),
});

export const tempSchema = z.object({
  tempName: z.string().min(2, "Name is required"),
  tempPrice: z.string().optional(),
  tempValidity: z.string().min(1, "Validity is required"),
  tempFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        [
          "image/png",
          "image/svg+xml",
          "video/mp4",
          "image/jpeg",
          "image/jpg",
        ].includes(files?.[0]?.type),
      "Invalid file type",
    ),
});

export const frameSchema = z.object({
  levelName: z.string().min(2, "Level name is required"),
  levelPrice: z.string().optional(),
  validity: z.string().min(1, "Validity is required"),
  levelFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        [
          "image/png",
          "image/svg+xml",
          "image/jpeg",
          "image/jpg",
          "image/gif",
        ].includes(files?.[0]?.type),
      "Invalid file type",
    ),
});

export const levelSchema = z.object({
  levelName: z.string().min(2, "Level name is required"),
  levelPrice: z.string().optional(),
  levelFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        [
          "image/png",
          "image/svg+xml",
          "image/jpeg",
          "image/jpg",
          "image/gif",
        ].includes(files?.[0]?.type),
      "Invalid file type",
    ),
});

export const crownSchema = z.object({
  crownName: z.string().min(2, "Crown level is required"),
  crownPrice: z.string().optional(),
  crownValidity: z.string().min(1, "Validity is required"),
  crownFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        [
          "image/png",
          "image/svg+xml",
          "image/jpeg",
          "image/jpg",
          "image/gif",
        ].includes(files?.[0]?.type),
      "Invalid file type",
    ),
});

export const entrySchema = z.object({
  entryName: z.string().min(2, "Entry level is required"),
  entryPrice: z.string().optional(),
  entryCategory: z.string().min(1, "Category is required"),
  entryValidity: z.string().min(1, "Validity is required"),
  entryFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        [
          "image/png",
          "image/svg+xml",
          "image/jpeg",
          "image/jpg",
          "image/gif",
        ].includes(files?.[0]?.type),
      "Invalid file type",
    ),
});

export const eventSchema = z.object({
  eventName: z.string().min(2, "Event name is required"),
  eventPrice: z.string().optional(),
  eventCategory: z.string().min(1, "Category is required"),
  eventFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        [
          "image/png",
          "image/svg+xml",
          "image/jpeg",
          "image/jpg",
          "image/gif",
        ].includes(files?.[0]?.type),
      "Invalid file type",
    ),
});

export const vipSchema = z.object({
  vipName: z.string().min(2, "Event name is required"),
  vipPrice: z.string().min(2, "Price is required"),
  vipCategory: z.string().min(1, "Category is required"),
  vipValidity: z.string().min(1, "Validity is required"),
  vipFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        [
          "image/png",
          "image/svg+xml",
          "image/jpeg",
          "image/jpg",
          "image/gif",
        ].includes(files?.[0]?.type),
      "Invalid file type",
    ),
});

//add gift schema
export const addGiftSchema = z
  .object({
    giftName: z.string().min(2, "Gift Name is required"),
    giftPrice: z
      .string()
      .min(1, "Price is required")
      .refine(
        (val) => !isNaN(Number(val)) && Number(val) > 0,
        "Price must be a positive number",
      ),
    giftCategory: z.string().min(1, "Category is required"),
    giftSubCategory: z.string().min(1, "Sub category is required"),
    giftLogo: z
      .any()
      .refine((files) => files?.length > 0, "Logo is required")
      .refine(
        (files) =>
          [
            "image/png",
            "image/svg+xml",
            "video/mp4",
            "image/jpeg",
            "image/jpg",
          ].includes(files?.[0]?.type),
        "Invalid file type",
      ),
    giftThumbnail: z.any().optional(),
    giftSound: z
      .any()
      .optional()
      .refine(
        (files) => {
          if (!files || files.length === 0) return true; // no file, no error
          return ["audio/mpeg", "audio/wav", "audio/ogg"].includes(
            files[0]?.type,
          );
        },
        { message: "Only MP3, WAV or OGG audio files are allowed" },
      ),
  })
  .superRefine((data, ctx) => {
    // Conditional thumbnail requirement
    const giftLogoType = data.giftLogo?.[0]?.type;
    if (
      giftLogoType === "video/mp4" &&
      (!data.giftThumbnail || data.giftThumbnail?.length === 0)
    ) {
      ctx.addIssue({
        path: ["giftThumbnail"],
        message: "Thumbnail is required for video logo",
        code: "custom",
      });
    }
  });

//suport agency schema
export const supportAgencySchema = z.object({
  supportName: z.string().min(1, "Agency Name is required"),
  supportEmail: z.string().email("Invalid email"),
  supportPhone: z.string().min(4, "Phone number required"),
  supportGender: z.string().min(1, "Gender is required"),
  supportPassword: z.string().min(6, "Minimum 6 characters"),
  supportLocation: z.string().min(1, "Country is required"),
  supportNID: z.string().min(1, "NID is required"),
  supportProfilePic: z
    .any()
    .optional()
    .refine((files) => files?.length > 0, "Profile picture is required"),
  supportDocumentFront: z
    .any()
    .optional()
    .refine((files) => files?.length > 0, "NID front is required"),
  supportDocumentBack: z
    .any()
    .optional()
    .refine((files) => files?.length > 0, "NID back is required"),
});

//adminHostAgencySchema
export const adminHostAgencySchema = z.object({
  agencyName: z.string().min(2, "Agency name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
  rePassword: z.string().min(6, "Minimum 6 characters"),
  phoneNumber: z.string().min(4, "Phone number required"),
  country: z.string().min(1, "Country is required"),
  documentType: z.string().min(1, "Document type required"),
  whatsapp: z.string().min(1, "Whatsapp number is required"),
  profilePic: z
    .any()
    .optional()
    .refine((files) => files?.length > 0, "Profile picture is required"),
  documentFront: z
    .any()
    .optional()
    .refine((files) => files?.length > 0, "Document front is required"),
  documentBack: z
    .any()
    .optional()
    .refine((files) => files?.length > 0, "Document back is required"),
});

//host add
export const hostAdd = z.object({
  hostName: z.string().min(2, "Host name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
  phoneNumber: z.string().min(4, "Phone number required"),
  gender: z.string().min(1, "Gender is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
});
