import * as yup from 'yup'

export const UsersignUpSchema = yup.object(
    {
        email: yup.string().email("Email must be a valid email format").required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
                "Password must be 8 characters long, uppercase and special character (!@#$%^&*)."
            ),
    }
)
    .required()

export const UsersignUpSchema2 = yup.object({
    userName: yup.string().required("Username is required")
        .matches(
            /^[a-zA-Z0-9_-]{3,20}$/,
            "Username must be between 3 and 20 characters and can only contain alphanumeric characters, underscores, and dashes."
        ),

    phoneNumber: yup
        .string()
        .required("Phone Number is required")
        .matches(/^0[789]\d{9}$/,
            "Please enter a valid phone number. Phone numbers can be in the following formats"
        ),

})
    .required()

export const UsersignUpImgSchema = yup.object({
    avatar: yup
        .mixed()
        .required('An image is required')
        .test('fileSize', 'File size is too large', (value: any) => {
            return value && value.size <= 5 * 1024 * 1024;
        })
        .test('fileType', 'Invalid file type', (value: any) => {
            return value && ['image/jpeg', 'image/png'].includes(value.type);
        }),
}
)
    .required()