import { useForm } from "react-hook-form";
import { useState } from "react";
import { serviceOptions } from "../data/services";
import { useWhatsAppBooking } from "../hooks/useWhatsAppBooking";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { sendBooking } = useWhatsAppBooking();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    sendBooking(data);
    setSubmitted(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl2 bg-white p-11 text-ink shadow-premium dark:bg-[#161414] dark:text-[#f4efe9]"
    >
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input
            {...register("name", { required: "Please enter your name" })}
            type="text"
            placeholder="Your name"
            className="form-input"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input
            {...register("phone", { required: "Please enter your phone number" })}
            type="tel"
            placeholder="+91 00000 00000"
            className="form-input"
          />
        </Field>
      </div>

      <Field label="Email Address">
        <input
          {...register("email")}
          type="email"
          placeholder="you@email.com"
          className="form-input"
        />
      </Field>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <Field label="Select Service" error={errors.service}>
          <select
            {...register("service", { required: "Please choose a service" })}
            className="form-input"
            defaultValue=""
          >
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Date" error={errors.date}>
          <input
            {...register("date", { required: "Please pick a date" })}
            type="date"
            className="form-input"
          />
        </Field>
      </div>

      <Field label="Preferred Time" error={errors.time}>
        <input
          {...register("time", { required: "Please pick a time" })}
          type="time"
          className="form-input"
        />
      </Field>

      <Field label="Special Request">
        <textarea
          {...register("note")}
          placeholder="Anything specific we should know?"
          className="form-input min-h-[90px] resize-y"
        />
      </Field>

      <button type="submit" className="btn btn-primary w-full">
        Book Appointment via WhatsApp
      </button>

      {submitted && (
        <p className="mt-4 text-[13.5px] text-rose-deep dark:text-rose-light">
          Opening WhatsApp with your booking details — just tap Send to
          confirm with us.
        </p>
      )}
    </form>
  );
}

function Field({ label, children, error }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-rose-deep">{error.message}</p>
      )}
    </div>
  );
}
