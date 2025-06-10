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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div>
      <h1>CONTACTANOS</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-slate-400 h-auto w-96 gap-2 p-4"
      >
        <label htmlFor="name">NOMBRE</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && <p className="text-red-500">{errors.name}</p>}

        <label htmlFor="surname">APELLIDO</label>
        <input
          type="text"
          name="surname"
          value={form.surname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.surname && errors.surname && <p className="text-red-500">{errors.surname}</p>}

        <label htmlFor="phone">TELÉFONO</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.phone && errors.phone && <p className="text-red-500">{errors.phone}</p>}

        <label htmlFor="email">EMAIL</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}

        <label htmlFor="message">MENSAJE</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
        />
        {touched.message && errors.message && <p className="text-red-500">{errors.message}</p>}

        <button
          type="submit"
          className="bg-orange-500 px-4 py-2 rounded text-white"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default Contact;