"use client";
import { useState } from "react";

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
      alert("Correo enviado correctamente ✅");
    } catch (error) {
      console.error(error);
      alert("Hubo un error al enviar el correo ❌");
    }
  };

  return (
    <div
      id="contacto"
      className="flex flex-col h-[97vh] md:h-[91vh] scroll-mt-16 bg-custom"
    >
      <h1 className="font-poiret-one text-5xl w-[24rem] text-center mx-8 font-bold md:text-[3rem] md:w-[46rem] my-6">
        CONTACTANOS
      </h1>

      <div className="flex justify-evenly items-center border">

        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-slate-400 h-[30rem] w-[30rem] gap-2 p-4  border"
        >
          <label htmlFor="name">NOMBRE</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <p className="text-red-500">{errors.name}</p>
          )}

          <label htmlFor="surname">APELLIDO</label>
          <input
            type="text"
            name="surname"
            value={form.surname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.surname && errors.surname && (
            <p className="text-red-500">{errors.surname}</p>
          )}

          <label htmlFor="phone">TELÉFONO</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.phone && errors.phone && (
            <p className="text-red-500">{errors.phone}</p>
          )}

          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p className="text-red-500">{errors.email}</p>
          )}

          <label htmlFor="message">MENSAJE</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
          />
          {touched.message && errors.message && (
            <p className="text-red-500">{errors.message}</p>
          )}

          <button
            type="submit"
            className="bg-orange-500 px-4 py-2 rounded text-white"
          >
            ENVIAR
          </button>
        </form>

        {/* REDES */}
        <div className="border flex flex-col gap-2 w-full max-w-[240px] text-[14px] items-center">
          <h3 className="text-center text-2xl">REDES</h3>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.facebook.com/p/Don-cer%C3%A1micos-100068413961241"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/facebook-color.png"
                alt="facebook"
                className="h-15 w-15 hover:scale-110 transition"
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
                className="h-15 w-15 hover:scale-110 transition"
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
                className="h-15 w-15 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>

        {/* DIRECCION */}
        <div className="border flex flex-col gap-2 text-[14px] items-center md:items-center text-center md:text-left md:h-[30rem]">
          <h3 className="text-center text-4xl w-full">ENCONTRANOS EN</h3>
          <a
            href="https://maps.app.goo.gl/YuBqy4cyh26zL5bJA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline "
          >
            <h4 className="text-center  w-full">J. Hernandez 4490</h4>
            <h4 className="text-center  w-full">
              frente a la Estación Claypole, PBA
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
