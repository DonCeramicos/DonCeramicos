"use client";
import { useState } from "react";
import { toast } from "sonner";

interface IForm {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
}

interface Ierror {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
}

interface ITouched {
  name: boolean;
  surname: boolean;
  phone: boolean;
  email: boolean;
  message: boolean;
}

export const Contact = () => {
  const [form, setForm] = useState<IForm>({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Ierror>({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState<ITouched>({
    name: false,
    surname: false,
    phone: false,
    email: false,
    message: false,
  });

  const validateForm = (form: IForm): Ierror => {
    const newErrors: Ierror = {
      name: "",
      surname: "",
      phone: "",
      email: "",
      message: "",
    };
    if (!form.name) newErrors.name = "El nombre es requerido";
    if (!form.surname) newErrors.surname = "El apellido es requerido";
    if (!form.phone) newErrors.phone = "El teléfono es requerido";
    if (!form.email) newErrors.email = "El email es requerido";
    if (!form.message) newErrors.message = "El mensaje es requerido";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    setErrors(validateForm(updatedForm));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    // Marcar todos los campos como tocados
    setTouched({
      name: true,
      surname: true,
      phone: true,
      email: true,
      message: true,
    });

    const hasErrors = Object.values(validationErrors).some((err) => err !== "");
    if (hasErrors) return;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Error en el envío del email");

      const data = await response.json();
      console.log(data);
      toast.success("Correo enviado con exito", {
        style: {
          background: "#e8e8e8",
          color: "#000000",
          fontSize: "1.2rem",
          textAlign: "center",
        },
      });
      setForm({
        name: "",
        surname: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar el correo", {
        style: {
          background: "#e8e8e8",
          color: "#000000",
        },
      });
    }
  };

  return (
    <div
      id="contacto"
      className="flex flex-col h-[97vh] md:h-[91vh] scroll-mt-16 bg-custom"
    >
      <h1
        style={{ color: "#bababa" }}
        className="font-rancho font-light text-left md:mx-18 text-[2.4rem]"
      >
        Contactanos
      </h1>

      <div className="flex justify-between items-start px-19">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-[url('/background-app.jpg')] bg-cover rounded bg-center h-[35rem] w-[30rem] p-4 font-poiret-one font-extrabold gap-2"
        >
          <label htmlFor="name">NOMBRE</label>
          <div className="flex gap-1">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-1 bg-white rounded w-[15rem] mb-1"
            />
            {touched.name && errors.name && (
              <p className="text-red-500">{errors.name}</p>
            )}
          </div>

          <label htmlFor="surname">APELLIDO</label>
          <div className="flex gap-1">
            <input
              type="text"
              name="surname"
              value={form.surname}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-1 bg-white rounded w-[15rem] mb-1"
            />
            {touched.surname && errors.surname && (
              <p className="text-red-500">{errors.surname}</p>
            )}
          </div>

          <label htmlFor="phone">TELÉFONO</label>
          <div className="flex gap-1">
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-1 bg-white rounded w-[15rem] mb-1"
            />
            {touched.phone && errors.phone && (
              <p className="text-red-500">{errors.phone}</p>
            )}
          </div>

          <label htmlFor="email">EMAIL</label>
          <div className="flex gap-1">
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-1 bg-white rounded w-[15rem] mb-1"
            />
            {touched.email && errors.email && (
              <p className="text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <div className="flex justify-between">
              <label htmlFor="message">MENSAJE</label>
              {touched.message && errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              cols={30}
              className="p-1 bg-white rounded"
            />
          </div>
          <button
            type="submit"
            className="btn41-43 btn-42 translate-x-30 text-[16px] font-rancho tracking-widest"
          >
            Enviar
          </button>
        </form>
        {/* DIRECCION */}
        <div className=" font-poiret-one font-extrabold flex flex-col gap-2 text-[14px] items-center justify-center  md:h-[30rem]">
          <h3
            style={{ color: "#bababa" }}
            className="text-center text-4xl w-full font-rancho "
          >
            Encontranos en
          </h3>
          <a
            href="https://maps.app.goo.gl/YuBqy4cyh26zL5bJA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline "
          >
            <h4 style={{ color: "#bababa" }} className="text-center w-full">
              J. Hernandez 4490 esq. S. Liniers Claypole PBA
            </h4>
            <h4 style={{ color: "#bababa" }} className="text-center w-full">
              a 100 mts a la Estación Claypole
            </h4>
          </a>

          <div className="relative group w-full md:w-[450px] h-[400px] rounded overflow-hidden">
            <iframe
              className="pointer-events-none group-hover:pointer-events-auto"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204.75964725243506!2d-58.33918134717725!3d-34.802058285409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32df17dc5fe73%3A0xbfbdb30ba7daca91!2sDon%20cer%C3%A1micos!5e0!3m2!1ses-419!2sar!4v1749953363088!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* REDES */}
          <div className="flex justify-center gap-6 w-full max-w-[300px] text-[14px] mt-2 ">
            <h3
              style={{ color: "#bababa" }}
              className="text-center text-2xl font-rancho"
            >
              Redes
            </h3>
            <div className="flex justify-center items-center gap-4 w-full ">
              <a
                href="https://www.facebook.com/p/Don-cer%C3%A1micos-100068413961241"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/facebook-color.png"
                  alt="facebook"
                  className="h-10 w-10 hover:scale-110 transition"
                />
              </a>
              <a
                href="https://www.instagram.com/reel/DCCDuEYOjtj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagram-color.png"
                  alt="instagram"
                  className="h-10 w-10 hover:scale-110 transition"
                />
              </a>
              <a
                href="https://wa.me/+5491128254000?text=Hola!%20Quiero%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/whatsapp-button.png"
                  alt="whatsapp"
                  className="h-10 w-10 hover:scale-110 transition"
                />
              </a>
            </div>
          </div>
          <div
            style={{ color: "#bababa" }}
            className=" flex justify-center items-center gap-3 w-full max-w-[400px] text-[14px] "
          >
            <p>11-2345-6789</p>
            <p className="text-center text-4xl">.</p>
            <p>donceramicos.info@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
