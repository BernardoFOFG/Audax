import "../styles/main.css";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export function Form() {
  const [sumbit, setSumbit] = useState(false);

  const [formValues, setFormValues] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };
  const cadastrarUsuario = (e) => {
    e.preventDefault();

    const formDados = new FormData(e.target);
    const Dados = Object.fromEntries(formDados);

    console.log(Dados);
  };

  const ativaSumbit = () => {
    setSumbit(true);
  };
  return (
    <div className="md:w-[704px] sm:w-[604px] xsm:w-[375px] flex flex-col justify-center items-center pt-40" id="Contato">
      <h2 className="md:w-[544px] sm:w-[444px] xsm:w-[360px] h-[102px] font-bold xsm:text-3rg md:text-xl text-primary text-center mb-8" >
        Sed ut perspiciatis unde monis iste natus error.
      </h2>

      <form
        onSubmit={cadastrarUsuario}
        className="xsm:w-[375px] sm:w-full gap-4 flex flex-col items-center mb-8"
        id="clientForm"
      >
        <label
          htmlFor="email"
          className="flex sm:w-full xsm:w-full items-center h-[52px] rounded-2xl "
        >
          <input
            type="email"
            name="email"
            value={formValues.email || ""}
            onChange={handleInput}
            required
            placeholder="Seu melhor e-mail"
            className="sm:w-full xsm:w-full p-4 bg-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
        <div className="flex md:gap-[10px] xsm:gap-4 xsm:w-full sm:flex-row xsm:flex-col">
          <label htmlFor="nome" className="flex items-center w-full h-[52px] ">
            <input
              className="p-4 bg-gray rounded-2xl sm:w-full xsm:w-full focus:outline-none focus:ring-2 focus:ring-primary"
              type="text"
              name="nome"
              value={formValues.nome || ""}
              onChange={handleInput}
              placeholder="Nome"
              required
            />
          </label>

          <label
            htmlFor="empresa"
            className="flex items-center w-full h-[52px] "
          >
            <input
              className="p-4 bg-gray rounded-2xl sm:w-full xsm:w-full focus:outline-none focus:ring-2 focus:ring-primary"
              type="text"
              name="empresa"
              value={formValues.empresa || ""}
              onChange={handleInput}
              placeholder="Empresa"
              required
            />
          </label>
        </div>
        <label htmlFor="assunto" className="flex w-full items-center h-[52px]">
          <input
            className="w-full p-4 bg-gray rounded-2xl sm:w-full xsm:w-full focus:outline-none focus:ring-2 focus:ring-primary"
            type="text"
            name="assunto"
            value={formValues.assunto || ""}
            onChange={handleInput}
            placeholder="Assunto"
            required
          />
        </label>
        <label htmlFor="avaliacao" className="w-full">
          <textarea
            className="h-[188px] w-full bg-gray rounded-2xl p-4"
            name="avaliacao"
            value={formValues.avaliacao || ""}
            onChange={handleInput}
          />
        </label>

        <div className="flex md:flex-row xsm:flex-col md:gap-0 xsm:gap-4 justify-between items-center w-[704px] mb-[53px]">
          <div>
            <ReCAPTCHA
              sitekey="6Ld4PrIiAAAAAIpKCLGtbgm26koH2Ij4HbRedR-H"
              data-theme="dark"
              onChange={ativaSumbit}
            />
          </div>
          <div>
            <input
              className="bg-btn w-[281px] h-[59px] rounded-2xl shadow-btn-shadow hover:cursor-pointer placeholder:text-text-primary placeholder:text-center focus:outline-none focus:ring focus:ring-secondary disabled:cursor-auto disabled:bg-text-secondary transition duration-300"
              type="submit"
              value="Entre em contato"
              disabled={!sumbit}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
