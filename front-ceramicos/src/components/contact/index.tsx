"use client";
import { useState } from "react";
import { toast } from "sonner";
import SendLoader from "../sendLoader";
import ReCAPTCHA from "react-google-recaptcha";
import { Ierror, IForm, ITouched } from "@/types";


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

  const [loading, setLoading] = useState(false);

  const [recaptcha, setRecaptcha] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;
  const validateForm = (form: IForm): Ierror => {
    const newErrors: Ierror = {
      name: "",
      surname: "",
      phone: "",
      email: "",
      message: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9()+\s-]{6,20}$/;

    if (!form.name.trim()) newErrors.name = "El nombre es requerido";
    if (!form.surname.trim()) newErrors.surname = "El apellido es requerido";

    if (!form.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!phoneRegex.test(form.phone.trim())) {
      newErrors.phone = "Formato de teléfono inválido";
    }

    if (!form.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Formato de email inválido";
    }

    if (!form.message.trim()) newErrors.message = "El mensaje es requerido";

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

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptcha }),
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      className="flex flex-col bg-gradient-to-b from-[#000000] via-[#292929db] to-[#272727] pt-20 relative scroll-mt-[-6rem] md:scroll-mt-0"
    >
      {loading && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
          <SendLoader />
        </div>
      )}
      <div className="absolute inset-0 grid z-[-1] [mask-image:linear-gradient(to_top,#000000,transparent)]">
        <div
          className="bg-cover bg-no-repeat bg-left mask-custom"
          style={{ backgroundImage: "url(/background-contact.jpg)" }}
        ></div>
      </div>

      {/* CONTENIDO RESPONSIVE */}
      <div className="flex flex-col gap-10 px-4 md:px-10 lg:px-20">
        {/* FORMULARIO */}
        <form
          aria-label="Formulario de contacto para Don Cerámicos"
          onSubmit={handleSubmit}
          className="flex flex-col justify-center h-[92vh] md:h-[88vh] w-full max-w-[700px] mx-auto p-6 font-phudu bg-gradient-to-b from-transparent via-[#373737e2] to-[#524c385e] rounded-md gap-2 shadow-md"
        >
          {/* NOMBRE */}
          <label className="color-font-2 flex justify-between" htmlFor="name">
            NOMBRE
            {touched.name && errors.name && (
              <p role="alert" className="text-red-400">
                {errors.name}
              </p>
            )}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-2 bg-[#dcd0c0] rounded text-black"
          />

          {/* APELLIDO */}
          <label
            className="color-font-2 flex justify-between"
            htmlFor="surname"
          >
            APELLIDO
            {touched.surname && errors.surname && (
              <p role="alert" className="text-red-400">
                {errors.surname}
              </p>
            )}
          </label>
          <input
            id="surname"
            name="surname"
            type="text"
            value={form.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-2 bg-[#dcd0c0] rounded text-black"
          />

          {/* TELÉFONO */}
          <label className="color-font-2 flex justify-between" htmlFor="phone">
            TELÉFONO
            {touched.phone && errors.phone && (
              <p role="alert" className="text-red-400">
                {errors.phone}
              </p>
            )}
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-2 bg-[#dcd0c0] rounded text-black"
          />

          {/* EMAIL */}
          <label className="color-font-2 flex justify-between" htmlFor="email">
              CORREO ELECTRONICO
            {touched.email && errors.email && (
              <p role="alert" className="text-red-400">
                {errors.email}
              </p>
            )}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-2 bg-[#dcd0c0] rounded text-black"
          />

          {/* MENSAJE */}
          <label
            className="color-font-2 flex justify-between"
            htmlFor="message"
          >
            MENSAJE
            {touched.message && errors.message && (
              <p role="alert" className="text-red-400">
                {errors.message}
              </p>
            )}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-2 bg-[#dcd0c0] rounded text-black w-full h-[120px] min-h-[120px] resize-none"
          />

          {/* RECAPTCHA */}
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <ReCAPTCHA
              sitekey={siteKey || ""}
              onChange={(token) => setRecaptcha(token)}
            />

            <button
              disabled={!recaptcha}
              type="submit"
              className="btn41-43 btn-42 mt-4 text-[16px] font-phudu tracking-widest"
            >
              Enviar
            </button>
          </div>
        </form>

        {/* GRID MAPA + REDES */}
        <div
          className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-10 w-full max-w-[1200px] mx-auto text-center font-phudu"
          role="region"
          aria-label="Sección con mapa, redes sociales y datos de contacto"
        >
          {/* MAPA Y DIRECCIÓN */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl md:text-2xl color-font-2">Encontranos en</h2>
            <a
              href="https://maps.app.goo.gl/YuBqy4cyh26zL5bJA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline color-font-3"
            >
              <h3 className="font-bold">
                J. Hernández 4490 esq. S. Liniers, Claypole, PBA
              </h3>
              <h3 className="font-bold">a 100 mts de la Estación Claypole</h3>
            </a>
            <div className="relative group w-full max-w-[450px] h-[300px] md:h-[400px] rounded overflow-hidden">
              <iframe
                title="Ubicación de Don Cerámicos en Google Maps"
                className="w-full h-full pointer-events-none group-hover:pointer-events-auto"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204.75964725243506!2d-58.33918134717725!3d-34.802058285409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32df17dc5fe73%3A0xbfbdb30ba7daca91!2sDon%20cer%C3%A1micos!5e0!3m2!1ses-419!2sar!4v1749953363088!5m2!1ses-419!2sar"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* REDES Y CONTACTO */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-phudu color-font-2">
                Redes
              </h3>
              <div className="flex justify-center items-center gap-4 mt-2">
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
                  href="https://wa.me/+5491133703961?text=Hola!%20Quiero%20hacer%20una%20consulta"
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

            <div className="text-sm color-font-2 text-center">
              <p>
                <a href="tel:+5491123456789">📞 11-2345-6789</a>
              </p>
              <p>
                <a href="mailto:donceramicos.info@gmail.com">
                  📧 donceramicos.info@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
