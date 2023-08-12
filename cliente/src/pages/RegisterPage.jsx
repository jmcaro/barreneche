import { registerUser } from "../api/auth";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useEffect } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Option,
} from "@material-tailwind/react";

const styleSelect =
  "peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-blue-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50";

const tipoID = [
  { id: 1, tipo: "CC" },
  { id: 2, tipo: "CE" },
  { id: 3, tipo: "NIT" },
];

export default function RegisterPage() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();
 
  useEffect(() => {
    if(isAuthenticated) navigate("/")
  },[isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    /* await registerUser(values); */
    signup(values);
  });

  return (
    <div className="flex justify-center">
      <Card
        className="flex items-center max-w-full mt-10 py-4 px-6 bg-indigo-50"
        shadow={false}
      >
        <Typography variant="h4">Registrate</Typography>
        <Typography className="mt-1 font-normal">
          Introduzca los siguientes datos.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg md:w-fit sm:w-96"
          onSubmit={onSubmit}
        >
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-7 justify-center  text-orange-50">
            <select className={styleSelect} {...register("tipoDocumento")}>
              {tipoID.map(({ id, tipo }) => (
                <option key={id} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
            <Input
              size="lg"
              error={errors.numeroDocumento ? true : false}
              label="# Identificación"
              {...register("numeroDocumento", { required: true })}
            />
            {
              errors.numeroDocumento && <p role="alert">Documento requerido</p>
            }
            <Input
              type="email"
              size="lg"
              label="Correo electrónico"
              {...register("correo", { required: true })}
            />
            <Input size="lg" label="Telefono" {...register("telefono")} />
            <Input
              size="lg"
              label="Primer nombre"
              {...register("primerNombre", { required: true })}
            />
            <Input
              size="lg"
              label="Segundo nombre"
              {...register("segundoNombre")}
            />
            <Input
              size="lg"
              label="Primer apellido"
              {...register("primerApellido", { required: true })}
            />
            <Input
              size="lg"
              label="Segundo apellido"
              {...register("segundoApellido", { required: true })}
            />
            <Input
              type="password"
              size="lg"
              label="Contraseña"
              {...register("password", { required: true })}
            />
            <Input
              type="password"
              size="lg"
              label="Repetir Contraseña"
              {...register("repeatPassword")}
            />
          </div>

          <Button type="submit" color="orange" className="mt-6" fullWidth>
            Registrarse
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
    </div>
  );
}
