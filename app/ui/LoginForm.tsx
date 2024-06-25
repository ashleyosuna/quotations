import { loginUser } from "../utils/users";

export default function LoginForm() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center bg-pink-200">
      <form
        action={loginUser}
        className="w-3/4 self-center md:w-fit border-2 rounded-lg flex flex-col p-6 gap-4 bg-white border-white"
      >
        <h1 className="text-center font-bold text-xl">Iniciar Sesión</h1>
        <span className="flex flex-col md:grid md:grid-cols-4 md:gap-2">
          <label className="md:col-span-1 md:text-center py-1">
            Nombre de usuario:
          </label>
          <input
            name="username"
            className="md:col-span-3 border-2 rounded-md pl-2 py-1"
          ></input>
        </span>
        <span className="flex flex-col md:grid md:grid-cols-4 md:gap-2">
          <label className="md:col-span-1 md:text-center py-1">
            Contraseña:
          </label>
          <input
            name="password"
            className="md:col-span-3 border-2 rounded-md pl-2 py-1"
          ></input>
        </span>
        <button className="w-fit self-center mt-2 text-white font-bold border-2 rounded-lg py-1 px-2 hover:scale-110 transition bg-pink-400 border-pink-400 shadow-md">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
