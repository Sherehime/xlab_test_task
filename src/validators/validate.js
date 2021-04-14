const validate = values => {
    const errors = {};

    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password invalid" ;
    }

    return errors;
};

export default validate;
