import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
 
export default function LoginPage() {
  return (
    <Card className="container mx-auto flex items-center w-max mt-10 py-4 px-6 bg-indigo-50" shadow={false}>
      <Typography variant="h4">
        Ingresar
      </Typography>
      <Typography className="mt-1 font-normal">
        Introduzca su usuario y contraseña.
      </Typography>
      <form className=" mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6 text-orange-50">
          <Input size="lg" label="Identificación" />
          <Input type="password" size="lg" label="Contraseña" />
        </div>
       
        <Button className="mt-6" fullWidth>
          Ingresar
        </Button>
        <Typography className="mt-4 text-center font-normal">
          Olvidó su contraseña?{" "}
          <a
            href="#"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Recuperar
          </a>
        </Typography>
      </form>
    </Card>
  );
}