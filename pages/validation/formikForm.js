// helping url:
// https://formik.org/docs/examples/with-material-ui

import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Button,
    MenuItem
} from '@material-ui/core';

//password validation
const lowercaseRegEx = /(?=.*[a-z])/
const uppercaseRegEx = /(?=.*[A-Z])/
const numericRegEx = /(?=.*[0-9])/
const lengthRegEx = /(?=.{6,})/

const validationSchema = yup.object({
    fullname: yup.string().required('Fullname is required'),
    username: yup.string()
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),

    // password: yup.string()
    //     .matches(
    //         lowercaseRegEx,
    //         "Must contain one lowercase alphabetical character!"
    //     )
    //     .matches(
    //         uppercaseRegEx,
    //         "Must contain one uppercase alphabetical character!"
    //     )
    //     .matches(numericRegEx, "Must contain one numeric character!")
    //     .matches(lengthRegEx, "Must contain 6 characters!")
    //     .required("Required!"),
    state_id: yup.number().required('State is required'),
    password: yup
        .string('Enter your password')
        .min(7, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirmPassword: yup.string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),
    // acceptTerms: yup.bool().oneOf([true], 'Accept Terms is required') 
});

import Title from '../../components/Title'


export default function formikForm() {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            username: '',
            state_id: '',
            email: 'example@gmail.com',
            password: 'example',
            confirmPassword: 'example',
            acceptTerms: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <Title title="formik validation" />
            <Fragment>
                <Paper>
                    <Box px={3} py={2}>
                        <Typography variant="h6" align="center" margin="dense">
                            Formik - Material UI - Validation
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={4} sm={4}> </Grid>
                            <Grid item xs={4} sm={4}>
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="fullname"
                                            name="fullname"
                                            label="Fullname"
                                            value={formik.values.fullname}
                                            onChange={formik.handleChange}
                                            error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                                            helperText={formik.touched.fullname && formik.errors.fullname}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="username"
                                            name="username"
                                            label="Username"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                            error={formik.touched.username && Boolean(formik.errors.username)}
                                            helperText={formik.touched.username && formik.errors.username}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="email"
                                            name="email"
                                            label="Email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="state_id"
                                            name="state_id"
                                            select
                                            label="State"
                                            value={formik.values.state_id}
                                            onChange={formik.handleChange}
                                            error={formik.touched.state_id && Boolean(formik.errors.state_id)}
                                            helperText={formik.touched.state_id && formik.errors.state_id}
                                        >
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            <MenuItem key="1" value='1'>UP</MenuItem>
                                            <MenuItem key="2" value='2'>UK</MenuItem>
                                            <MenuItem key="3" value='3'>HR</MenuItem>
                                            <MenuItem key="4" value='4'>MP</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="password"
                                            name="password"
                                            label="Password"
                                            type="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            helperText={formik.touched.password && formik.errors.password}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            type="password"
                                            value={formik.values.confirmPassword}
                                            onChange={formik.handleChange}
                                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                        />
                                    </Grid>
                                    <Box mt={6}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                        >
                                            Register
                                        </Button>
                                    </Box>
                                </form>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={4}> </Grid>

                    </Box>
                </Paper>
            </Fragment>
        </>
    )
}