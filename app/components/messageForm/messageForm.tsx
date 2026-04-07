"use client";

import "./messageForm.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface MessageFormProps {
  onClose: () => void;
}

const FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdaargtqXp9r2k2uMTIzXc0o1_EhUnJY6djDkRWnshSqqjlpg/formResponse";

const FORM_FIELDS = {
  name: "entry.1599393315",
  email: "entry.542226055",
  message: "entry.1165674592",
};

const FORM_META = {
  fvv: "1",
  partialResponse: '[null,null,"1686471633764599987"]',
  pageHistory: "0",
  fbzx: "1686471633764599987",
  submissionTimestamp: "-1",
};

export default function MessageForm({ onClose }: MessageFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const body = new URLSearchParams();
    body.append(FORM_FIELDS.name, name);
    body.append(FORM_FIELDS.email, email);
    body.append(FORM_FIELDS.message, message);
    body.append("fvv", FORM_META.fvv);
    body.append("partialResponse", FORM_META.partialResponse);
    body.append("pageHistory", FORM_META.pageHistory);
    body.append("fbzx", FORM_META.fbzx);
    body.append("submissionTimestamp", FORM_META.submissionTimestamp);

    try {
      await fetch(FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: body,
      });

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      className="message-form-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <motion.div
        className="message-form"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <div className="message-form__header">
          <div className="message-form__title-wrap">
            <h2>Message</h2>
          </div>

          <button
            type="button"
            className="message-form__close"
            onClick={onClose}
            aria-label="Close message form"
          >
            <X size={18} />
          </button>
        </div>
        <p className="message-form__description">
          Leave a message here - it will be saved and I will see it. No
          registration or extra steps required.
        </p>
        <form onSubmit={handleSubmit} className="message-form__body">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </form>

        {status === "success" && (
          <p className="message-form__status success">
            Thank you for your message!
          </p>
        )}
        {status === "error" && (
          <p className="message-form__status error">
            Failed to send. Please try again.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
