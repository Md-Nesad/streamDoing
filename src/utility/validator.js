import { z } from "zod";

export const agencySchema = z.object({
  agencyType: z.string().min(1, "Agency type is required"),
  agencyName: z.string().min(2, "Agency name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
  phoneNumber: z.string().min(4, "User ID required"),
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
  bannerLink: z.string().min(2, "Banner link is required"),
  webLink: z.string().min(2, "Web link is required"),
  description: z.string().min(5, "at least 5 characters"),
  price: z.string().min(1, "Price is required"),
  bannerFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner file is required")
    .refine(
      (files) =>
        ["image/png", "image/svg+xml", "video/mp4"].includes(files?.[0]?.type),
      "Only SVG, PNG or MP4 allowed"
    ),
});

// badge schema
export const badgeSchema = z.object({
  badgeName: z.string().min(2, "Badge name is required"),
  badgeDescription: z.string().min(2, "Badge description is required"),
  badgePrice: z.string().min(2, "Badge price is required"),
  badgeFile: z
    .any()
    .refine((files) => files?.length > 0, "Badge file is required")
    .refine(
      (files) =>
        ["image/png", "image/svg+xml", "video/mp4"].includes(files?.[0]?.type),
      "Only SVG, PNG or MP4 allowed"
    ),
});

export const tempSchema = z.object({
  tempName: z.string().min(2, "Name is required"),
  tempPrice: z.string().min(2, "Price is required"),
  tempFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        ["image/png", "image/svg+xml", "video/mp4"].includes(files?.[0]?.type),
      "Only SVG, PNG or MP4 allowed"
    ),
});

export const levelSchema = z.object({
  levelName: z.string().min(2, "Level name is required"),
  levelPrice: z.string().min(2, "Price is required"),
  levelFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        ["image/png", "image/svg+xml", "video/mp4"].includes(files?.[0]?.type),
      "Only SVG, PNG or MP4 allowed"
    ),
});

export const crownSchema = z.object({
  crownName: z.string().min(2, "Crown level is required"),
  crownPrice: z.string().min(2, "Price is required"),
  crownFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        ["image/png", "image/svg+xml", "video/mp4"].includes(files?.[0]?.type),
      "Only SVG, PNG or MP4 allowed"
    ),
});

export const entrySchema = z.object({
  entryName: z.string().min(2, "Entry level is required"),
  entryPrice: z.string().min(2, "Price is required"),
  entryCategory: z.string().min(1, "Category is required"),
  entryFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        ["image/png", "image/svg+xml", "video/mp4"].includes(files?.[0]?.type),
      "Only SVG, PNG or MP4 allowed"
    ),
});

export const eventSchema = z.object({
  eventName: z.string().min(2, "Event name is required"),
  eventPrice: z.string().min(2, "Price is required"),
  eventCategory: z.string().min(1, "Category is required"),
  eventFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        ["image/png", "image/svg+xml", "video/mp4"].includes(files?.[0]?.type),
      "Only SVG, PNG or MP4 allowed"
    ),
});

export const vipSchema = z.object({
  vipName: z.string().min(2, "Event name is required"),
  vipPrice: z.string().min(2, "Price is required"),
  vipCategory: z.string().min(1, "Category is required"),
  vipFile: z
    .any()
    .refine((files) => files?.length > 0, "Banner is required")
    .refine(
      (files) =>
        ["image/png", "image/svg+xml", "video/mp4"].includes(files?.[0]?.type),
      "Only SVG, PNG or MP4 allowed"
    ),
});
