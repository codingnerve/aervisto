import { z } from "zod";

export const FlightEnquirySchema = z
  .object({
    tripType: z.enum(["round-trip", "one-way", "multi-city"], {
      message: "Please select a trip type",
    }),
    origin: z
      .string()
      .min(2, "Please enter an origin city or airport code")
      .max(100, "Origin name is too long"),
    destination: z
      .string()
      .min(2, "Please enter a destination city or airport code")
      .max(100, "Destination name is too long"),
    departureDate: z
      .string()
      .min(1, "Please select a departure date")
      .refine((val) => !isNaN(Date.parse(val)), "Invalid departure date format"),
    returnDate: z.string().optional(),
    adults: z.coerce
      .number()
      .int()
      .min(1, "At least 1 adult passenger is required")
      .max(9, "Maximum 9 adult passengers per enquiry"),
    children: z.coerce
      .number()
      .int()
      .min(0, "Invalid children count")
      .max(8, "Maximum 8 children per enquiry")
      .default(0),
    infants: z.coerce
      .number()
      .int()
      .min(0, "Invalid infants count")
      .max(4, "Maximum 4 infants per enquiry")
      .default(0),
    cabinClass: z.enum(["economy", "premium_economy", "business", "first"], {
      message: "Please select a cabin class",
    }),
    flexibleDates: z.boolean().default(false),
    fullName: z
      .string()
      .min(2, "Please enter your full name")
      .max(120, "Name is too long"),
    email: z
      .string()
      .email("Please provide a valid email address")
      .max(150, "Email address is too long"),
    countryCode: z.string().default("+1"),
    phone: z
      .string()
      .min(6, "Please provide a valid telephone number")
      .max(25, "Phone number is too long"),
    preferredContactMethod: z
      .enum(["phone", "email", "whatsapp"])
      .default("phone"),
    additionalNotes: z.string().max(1000, "Notes cannot exceed 1000 characters").optional(),
    consent: z.literal(true, {
      message: "You must consent to be contacted regarding this flight enquiry",
    }),
    // Spam Trap / Honeypot field - must remain empty!
    website_url: z.string().max(0, "Invalid submission").optional(),
    // Optional Campaign Attribution
    utm_source: z.string().max(100).optional(),
    utm_medium: z.string().max(100).optional(),
    utm_campaign: z.string().max(100).optional(),
    utm_term: z.string().max(100).optional(),
    utm_content: z.string().max(100).optional(),
    gclid: z.string().max(150).optional(),
  })
  .refine(
    (data) => {
      if (data.tripType === "round-trip") {
        if (!data.returnDate || data.returnDate.trim() === "") return false;
        const dep = new Date(data.departureDate).getTime();
        const ret = new Date(data.returnDate).getTime();
        return ret >= dep;
      }
      return true;
    },
    {
      message: "Return date must be on or after the departure date",
      path: ["returnDate"],
    }
  );

export type FlightEnquiryInput = z.infer<typeof FlightEnquirySchema>;

export const QuickContactSchema = z.object({
  fullName: z.string().min(2, "Please enter your name").max(100),
  phoneOrEmail: z.string().min(5, "Please enter your phone number or email").max(120),
  travelRequirement: z.string().min(5, "Please provide brief details about your flight request").max(1000),
  preferredMarket: z.enum(["US", "UK", "CA", "INTL"]).default("US"),
  consent: z.literal(true, {
    message: "Please confirm your consent to be contacted",
  }),
  website_url: z.string().max(0, "Invalid submission").optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  gclid: z.string().optional(),
});

export type QuickContactInput = z.infer<typeof QuickContactSchema>;
