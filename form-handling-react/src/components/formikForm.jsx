import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    //Initial Form Values
    const initialValues ={
        username: "",
        email: "",
        password: "",
    };

    //Validation schema using yup
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, 'Username must be at 3 characters')
            .max(20, 'Username must be 20 character or less')
            .required('Email is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
            .required('Password is required'),
    });

    //Handle Form submission
    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        console.log('Form submitted:', values);

        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
        }, 400);
    };

    return(
        <div className="form-container">
        <h2>Registration Form</h2>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
            <Form>
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                />
                <ErrorMessage name="username" component="div" className="error-message" />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                />
                <ErrorMessage name="email" component="div" className="error-message" />
                </div>

                <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                />
                <ErrorMessage name="password" component="div" className="error-message" />
                </div>

                <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Register'}
                </button>
            </Form>
            )}
        </Formik>

        <style jsx>{`
            .form-container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            }
            .form-group {
            margin-bottom: 15px;
            }
            label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            }
            input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            }
            .error-message {
            color: red;
            font-size: 0.8rem;
            margin-top: 5px;
            }
            button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            }
            button:hover {
            background-color: #45a049;
            }
            button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
            }
        `}</style>
        </div>
  );
};

export default FormikForm;