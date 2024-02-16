import * as Yup from "yup";

export const contactSchema = Yup.object({
name: Yup.string().min(3).max(20).required("Please enter your name"),
message: Yup.string().min(10).max(100).required("Please enter your message")
});