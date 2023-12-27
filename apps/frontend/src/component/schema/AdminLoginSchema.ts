import * as yup from 'yup'

export const AdminLoginSchema = yup.object().shape(
    {
        email: yup
            .string()
            .required("email is required")
            .matches(
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,}$/,
                "Please enter a valid email address."
            ),
        password: yup
            .string()
            .required("password is required")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{8,}$/,
                "Password must be at least 8 characters long uppercase letter and one special character."
            ),
    }
)
    .required()