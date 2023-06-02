import { TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../services/api/authApi";
import { toast } from "react-hot-toast";
const Register = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 5
          ? "Password should have at least 5 words(letters,words or both) "
          : null,
    },
  });

  const notify = () => toast.success("Contact is Registered");

  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  return (
    <div className=" ">
      <div>
        <div className="mt-5 ml-5 flex gap-3">
          <img src="/src/assets/contact.svg" className=" w-[30px]" alt="" />
          <p className=" font-bold text-slate-400 text-2xl">Contacts</p>
        </div>
        <div className="flex  md:flex-col xl:flex-row lg:flex-row flex-col lg:gap-3 xl:gap-3 md:items-center justify-evenly mt-10">
          <div className="">
            <img
              src=" https://img.freepik.com/premium-vector/cartoon-hand-using-smartphone-cellphone-screen-scrolling-flat-vector-illustration_627510-561.jpg?w=2000"
              alt=""
              className=" w-[500px] h-[80vh] object-contain transition-all hover:translate-x-5"
            />
          </div>
          <form
            onSubmit={form.onSubmit(async (values) => {
              try {
                // const user = { name, email, password, password_confirmation };
                const { data } = await register(values);
                // console.log(data);

                if (data?.success) {
                  notify();
                  navigate(`/login`);
                }
              } catch (error) {
                console.log(error);
              }
            })}
            action=""
            className=" bg-white shadow-md  lg:w-[450px] sm:w-[50%] md:w-[80%] mx-auto  lg:my-20 md:my-5 my-2 p-5"
          >
            <h1 className=" text-2xl mb-5 font-bold">Register your account</h1>
            <div className="flex flex-col gap-4">
              <div className="">
                <p>Name</p>
                <TextInput
                  {...form.getInputProps("name")}
                  placeholder="Your name"
                  description="Your username must be added"
                  withAsterisk
                  className="w-full"
                />
              </div>

              <div className="">
                <p>Email</p>
                <TextInput
                  {...form.getInputProps("email")}
                  placeholder="Enter your email"
                  description="Email must contain '@gmail.com' besides your char "
                  withAsterisk
                  className="w-full"
                />
              </div>

              <div className="">
                <p>Password</p>

                <PasswordInput
                  {...form.getInputProps("password")}
                  placeholder="Password"
                  description="Password must include at least one letter, number and special character"
                  withAsterisk
                  className="w-full"
                />
              </div>

              <div className="">
                <p>Password confirmation</p>

                <PasswordInput
                  {...form.getInputProps("password_confirmation")}
                  placeholder="Confirm Password"
                  description="Password must include at least one letter, number and special character"
                  withAsterisk
                  className="w-full"
                />
              </div>

              <div className="flex gap-3">
                <p className=" font-bold text-gray-500">
                  Already have an account?
                </p>
                <Link to={`/login`}>
                  <p className=" underline  text-gray-500">Login</p>
                </Link>
              </div>
              <div className="">
                <button className=" bg-blue-900 text-white p-2 w-full rounded-md mt-3">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
