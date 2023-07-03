import {Field, Form, Formik, ErrorMessage} from "formik";
import {useState} from "react";
import {Box, Button, CircularProgress} from "@mui/material";
import {informationFormProps} from "../utils/types.ts";
import FetchConfiguration from "./helpers/fetch-configuration.ts";

const validateEmail = (value: string): string | undefined => {
    if (!value) {
        return "Email is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return "Invalid email format";
    }

    return undefined;
};

const InformationForm = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
        const fetchConfiguration = new FetchConfiguration()
    const handleSubmit = async (fields: informationFormProps, { resetForm }: any) => {
        setIsSubmitting(true);

        try {
            await fetchConfiguration.postInformationForm(fields);
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setIsSubmitted(true);
            resetForm();
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                city: "",
                state: "",
                zip: "",
            }}
            onSubmit={handleSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Box sx={{display: 'flex'}}>
                        <Field type="text" name="firstName" placeholder="First name"/>
                        <Field type="text" name="lastName" placeholder="Last name"/>
                    </Box>

                    <ErrorMessage name="email" component="div"/>
                    <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        validate={validateEmail}
                    />

                    <Field type="text" name="address" placeholder="Address"/>

                    <Box sx={{display: 'flex'}}>
                        <Field type="text" name="city" placeholder="City"/>
                        <Field type="text" name="state" placeholder="State"/>
                        <Field type="text" name="zip" placeholder="Zip"/>
                    </Box>
                    {isSubmitting ? (
                        <div><CircularProgress color="secondary"/></div>
                    ) : (
                        <Button type='submit' variant="contained">Submit</Button>

                    )}

                    {isSubmitted && !isSubmitting && (
                        <div>Form submitted successfully!</div>
                    )}
                </Form>
            )}
        </Formik>
    );
};

export default InformationForm;