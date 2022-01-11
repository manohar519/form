
import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'
//import { makeStyles } from '@mui/material';








export default function Form() {
    const initialValues={
        fullName: "",
        email: "",
        mobile: "",
        contactNumber:"",
        fatherName:"",
        fatherNumber:"",
        dob:"",
        bloodGroup:"",
        checkInDate:"",
        occupation:"",
        workAddrress:"",
        workNumber:"",
        permanentAddress:"",
        idProof:"",
        roomRent:"",
        securityDeposit:"",
        transactionId:"",
        signOfResident:"",
        signofManager:"",
        //hireDate: new Date(),
    };

    const [values, setValues] = useState(initialValues);
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
    }
    const handleSubmit = (e) => {
            e.preventDefault();
            console.log("InputFields", values);
            setValues({
                fullName: "",
                email: "",
                mobile: "",
                contactNumber:"",
                fatherName:"",
                fatherNumber:"",
                dob:"",
                bloodGroup:"",
                checkInDate:"",
                occupation:"",
                workAddrress:"",
                workNumber:"",
                permanentAddress:"",
                idProof:"",
                roomRent:"",
                securityDeposit:"",
                transactionId:"",
                signOfResident:"",
                signofManager:"",
            });
         
    };
   
   




    return (

        <form>
            <h3>Admission Form</h3>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} >
                    <TextField
                        variant="standard"
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange} />


                </Grid>

                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="ContactNumber"
                        name="contactNumber"
                        value={values.contactNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="FatherName"
                        name="fatherName"
                        value={values.fatherName}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Contact Number"
                        name="fatherNumber"
                        value={values.fatherNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="DOB"
                        name="dob"
                        value={values.dob}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Blood Group"
                        name="bloodGroup"
                        value={values.bloodGroup}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Check In Date"
                        name="checkInDate"
                        value={values.checkInDate}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Occupation"
                        name="occupation"
                        value={values.occupation}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Work Address"
                        name="workAddrress"
                        value={values.workAddrress}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Work Number"
                        name="workNumber"
                        value={values.workNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Permanent Address"
                        name="permanentAddress"
                        value={values.permanentAddress}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="ID Proof"
                        name="idProof"
                        value={values.idProof}
                        onChange={handleInputChange} />
                    <Button
                        component="label"
                    >
                        Upload File
                        <input
                            type="file"
                            hidden
                        />
                    </Button>

                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Room rent"
                        name="roomRent"
                        value={values.roomRent}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Security Deposit"
                        name="securityDeposit"
                        value={values.securityDeposit}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Transaction ID"
                        name="transactionId"
                        value={values.transactionId}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Sign of Resident"
                        name="signOfResident"
                        value={values.signOfResident}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Sign of Manager"
                        name="signofManager"
                        value={values.signofManager}
                        onChange={handleInputChange} />
                </Grid>

            </Grid>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>

        </form>



    )
}
