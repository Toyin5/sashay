
import * as yup from 'yup'

export const AdminsignUpSchema = yup.object(
    {
        email: yup.string().email("Email must be a valid email format").required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
                "Password must be 8 characters long, uppercase and special character (!@#$%^&*)."
            ),
        date: yup.date().required("Date is required").typeError("Date is required"),
    }
)

export const Adminsignup2Schema = yup.object({
    firstName: yup.string().required("First name must not contain any special character")
        .matches(
            /^[A-Za-z ]+$/,
            "Full name should not contain any special characters"
        ),
    lastName: yup.string().required("Last name must not contain any special character")
        .matches(
            /^[A-Za-z ]+$/,
            "Full name should not contain any special characters"
        ),
    phoneNumber: yup
        .string()
        .required("Phone Number is required")
        .matches(/^0[789]\d{9}$/,
            "Please enter a valid phone number. Phone numbers can be in the following formats"
        ),
})

export const AdminsignupImgSchema = yup.object({
    avatar: yup
      .mixed()
      .required('An image is required')
      .test('fileSize', 'File size is too large', (value: any) => {
        return value && value.size <= 5 * 1024 * 1024;
      })
      .test('fileType', 'Invalid file type', (value: any) => {
        return value && ['image/jpeg', 'image/png'].includes(value.type);
      }),
  });