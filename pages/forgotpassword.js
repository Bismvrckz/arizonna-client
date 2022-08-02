import React from "react";
import MainLogo from "../components/mainLogo";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ForgotPassword() {
  const onSendRecoveryMailClick = async () => {};

  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-900 to-green-800 flex justify-start items-center flex-col relative">
      <div className="flex justify-start mt-[10vh] pl-[10vh] w-[30%]">
        <MainLogo />
      </div>

      <img
        src="https://static.vecteezy.com/system/resources/previews/000/690/821/original/blue-mailbox-with-red-flag-and-letters-vector.jpg"
        className="rounded-[50%] mt-[8vh] w-[15%] z-[2] m-[0vh] opacity-[.8]"
      />

      <div className="w-[30%] z-[3] mt-[-15vh] rounded-[2vh bg-transparent font-[montserrat] flex flex-col items-center justify-center h-[60%] ">
        <div className="flex flex-col justify-center w-[80%]">
          <div className="text-[2vw] my-[1vh] font-[500] text-white">
            Forgot password ?
          </div>
          <p className="text-[1vw] font-[200] mb-[1vh] text-gray-400">
            Please enter your registered email address. <br />
            We'll send instructions to help reset your <br />
            password.
          </p>

          <TextField
            color="info"
            autoComplete="off"
            id="outlined-basic"
            label="Email"
            sx={{ m: 0, width: "100%" }}
            variant="outlined"
          />
          <Button className="w-[100%] h-[7vh] my-[1vh]" variant="contained">
            <p className="text-[2vh]">Send reset instructions</p>
          </Button>
        </div>
      </div>

      <a className="z-[2] absolute left-[2vw] top-[3vh]" href="/signin">
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" className="w-[1vw]" />{" "}
        Back to Login
      </a>

      <div className="absolute z-[1]  w-[30%] mt-[20vh] rounded-[2vh] opacity-25 bg-black h-[63%]" />
    </div>
  );
}

export default ForgotPassword;
