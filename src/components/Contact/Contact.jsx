import React, { useState } from "react";
import { Send, CheckCircle, XCircle, Loader2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    objet: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const response = await fetch(
        "https://send-mail-production-769a.up.railway.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        });

        // Reset le formulaire
        setFormData({
          nom: "",
          objet: "",
          email: "",
          telephone: "",
          message: "",
        });

        // Cache le message après 5 secondes
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false, message: "" }));
        }, 5000);
      } else {
        throw new Error(data.error || "Erreur inconnue");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Erreur lors de l'envoi. Veuillez réessayer.",
      });

      // Cache le message après 5 secondes
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: false, message: "" }));
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Side - Image & Text */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h2
                className="text-white text-3xl sm:text-4xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Me contacter
              </h2>

              <p
                className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Je souhaite mettre à profit mes compétences pour créer des
                applications innovantes et performantes.
              </p>
            </div>

            {/* Image avec décoration */}
            <div className="relative flex justify-center items-center lg:justify-start">
              {/* Decorative dots */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-300/60 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-1/2 right-5 w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-300 rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Empty for balance */}
          <div className="order-1 lg:order-2"></div>
        </div>

        {/* Form Section - Full Width */}
        <div className="max-w-5xl mx-auto">
          {/* Messages de statut */}
          {status.success && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <p
                className="text-green-400"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {status.message}
              </p>
            </div>
          )}

          {status.error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-400" />
              <p
                className="text-red-400"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {status.message}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1: Nom complet et Objet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Nom complet"
                className="w-full px-5 py-4 bg-white rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base disabled:opacity-50"
                style={{ fontFamily: "Raleway, sans-serif" }}
                disabled={status.loading}
                required
              />

              <input
                type="text"
                name="objet"
                value={formData.objet}
                onChange={handleChange}
                placeholder="Objet"
                className="w-full px-5 py-4 bg-white rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base disabled:opacity-50"
                style={{ fontFamily: "Raleway, sans-serif" }}
                disabled={status.loading}
                required
              />
            </div>

            {/* Row 2: Email et Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-5 py-4 bg-white rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base disabled:opacity-50"
                style={{ fontFamily: "Raleway, sans-serif" }}
                disabled={status.loading}
                required
              />

              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Numéro de téléphone"
                className="w-full px-5 py-4 bg-white rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base disabled:opacity-50"
                style={{ fontFamily: "Raleway, sans-serif" }}
                disabled={status.loading}
              />
            </div>

            {/* Row 3: Message - Full Width */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              className="w-full px-5 py-4 bg-white rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-base disabled:opacity-50"
              style={{ fontFamily: "Raleway, sans-serif" }}
              disabled={status.loading}
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.loading}
              className="bg-blue-500/90 hover:bg-blue-600 text-white px-10 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {status.loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer
                </>
              )}
            </button>
          </form>
        </div>

        {/* Decorative floating dots */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-yellow-400 rounded-full opacity-60 animate-pulse hidden md:block"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-green-400 rounded-full opacity-50 animate-pulse delay-200 hidden md:block"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-70 animate-pulse delay-100 hidden md:block"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-yellow-300/40 rounded-full blur-3xl hidden md:block"></div>
      </div>
    </section>
  );
};

export default Contact;