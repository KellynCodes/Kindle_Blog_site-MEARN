import Head from "next/head";
//
import { useState } from "react";
// import { PageTitle } from "components/shared";
import { useForm } from "react-hook-form";
import { useMutate } from "restful-react";
import { useRouter } from "next/router";

const register = () => {
  const [info, setInfo] = useState();
  const {
    mutate: registerUser,
    loading,
    error,
  } = useMutate({
    verb: "POST",
    path: "register",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setInfo();
    registerUser(data).then((_) =>
      setInfo("Check your email for verificaiton")
    );
  };

  return (
    <div className="Register">
      <Head>
        <title>Relicon | Register User</title>
      </Head>
      <h2>Register To explore the goodies in kindle</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="name"
            name="fullname"
            className="RegName"
            placeholder="FullName"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && "Name is required"}
        </div>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="name"
            name="username"
            className="RegUserName"
            placeholder="Username"
            {...register("username", {
              required: true,
            })}
          />
          {errors.username && "Username is required"}
        </div>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="number"
            name="phone"
            className="RegPhone"
            placeholder="phone"
            {...register("phone", {
              required: true,
            })}
          />
          {errors.phone && "Phone is required"}
        </div>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="email"
            name="email"
            className="RegEmail"
            placeholder="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && "Email is required"}
        </div>

        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="text"
            name="country"
            className="RegCountry"
            placeholder="Country"
            {...register("country", {
              required: true,
            })}
          />
          {errors.country && "Country Is required"}
        </div>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="password"
            name="password"
            className="RegPassword"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && "Password is Required"}
        </div>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="password"
            name="confirmPassword"
            className="RegConfirmPassWord"
            placeholder="Confirm Password"
          />
        </div>
        {info && <div className="success">{info}</div>}
        {error && <div className="danger">{error?.data}</div>}
        <div className="btnContainer">
          <button disabled={loading} className="button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default register;
