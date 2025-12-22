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
