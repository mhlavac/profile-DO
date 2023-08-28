import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";
import { Card, Input, Label, Button } from '../components/ui'
import axios from '../api/axios';

function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    return (
        <Card >
            <div className="bg-gray-100 max-w-md w-full p-10 rounded-md ">
                <h1 className="text-3xl font-bold">Register</h1>
                <form onSubmit={handleSubmit(async(values) => {
                    console.log(values);
                    const res = await registerRequest(values)
                    //await axios.post(`/register`, values);
                    console.log(res)
                })}>

                    <Label htmlFor="username">Name:</Label>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Write your name"
                        {...register("name",
                            {
                                required: true,

                            })}
                        autoFocus
                    />
                    {
                        errors.name && <p className="text-red-500"> Name is required</p>
                    }



                    <Label htmlFor="email">Email:</Label>
                    <Input
                        name="email"
                        placeholder="youremail@domain.tld"
                        {...register("email",
                            { required: true })}
                    />
                    {
                        errors.email && <p className="text-red-500"> Email is required</p>
                    }

                    <Label htmlFor="role">Role:</Label>
                    <div className="flex items-center space-x-4">
                        <Label>
                            <Input
                                type="checkbox"
                                name="role"
                                {...register("role")}
                                value="student"
                            />
                            Student
                        </Label>
                        <Label>
                            <Input
                                type="checkbox"
                                name="role"
                                {...register("role")}
                                value="tutor"
                            />
                            Tutor
                        </Label>
                        {
                            errors.role && <p className="text-red-500"> Role is required</p>
                        }
                    </div>






                    <Label htmlFor="password">Password:</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="********"
                        {...register("password",
                            { required: true })}
                    />
                    {
                        errors.password && <p className="text-red-500"> Password is required</p>
                    }
                    <Label htmlFor="confirmPassword">Confirm Password:</Label>
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="********"
                        {...register("confirmPassword",
                            { required: true })}
                    />
                    {
                        errors.password && <p className="text-red-500"> Password is required</p>
                    }

                    <Button>Submit</Button>
                </form>
                {/* <p>
          Already Have an Account?
          <Link className="text-sky-500" to="/login">
            Login
          </Link>
        </p> */}
            </div>
        </Card>
    )
}

export default RegisterPage