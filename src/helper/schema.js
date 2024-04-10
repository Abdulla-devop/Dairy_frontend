import * as yup from "yup"

//schema for adding post page
export const postSchema = yup.object({
      title : yup.string().required("Title is required").min(3,"Minimum three words required"),
      content: yup.string().required("Please type the content")
});

// schema for signup page
export const signupSchema = yup.object({
      name:yup .string().required("Username is required")
      .min(3,"Minimum three words required")
      .max(12,"First or last name is enough"),
      email : yup.string().required("Please type email ID").email("name@gmail.com"),
      password:yup.string().required("Please type your password")
      .min(5,"Minimum 5 characters").max(15,"Kindly give password below 15")
});