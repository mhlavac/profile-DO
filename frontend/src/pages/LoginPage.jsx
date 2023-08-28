import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { loginUser } from '../api/auth';

function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onSubmit = async (values) => {
    try {
        const response = await loginUser(values);
        console.log('Registration successful:', response);
    } catch (error) {
        console.error('Registration error:', error);
    }
};

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        
        <h1 className="text-2xl font-bold">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Email:</Label>
          <Input
            label="Write your email"
            type="email"
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email", { required: true })
          }
          />
          <p>{errors.email?.message}</p>

          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Write your password"
            {...register("password", { required: true, minLength: 6 })}
          />
          <p>{errors.password?.message}</p>

          <Button>Login</Button>
        </form>

        {/* <p className="flex gap-x-2 justify-between">
          Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
        </p> */}
      </Card>
    </div>
  )
}

export default LoginPage