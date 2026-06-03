import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="droppable-zone-container animation-fadeInUp">
      <div className="max-w-4xl space-y-10">
        <div className="theme-contact-panel border border-l-4 p-6 rounded-r-2xl rounded-l-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-5 transform translate-x-4 -translate-y-4">
            <FaEnvelope size={120} />
          </div>
          <div className="theme-contact-icon p-4 rounded-full border z-10 shrink-0">
            <FaEnvelope size={28} className="text-[#00a4ac]" />
          </div>
          <div className="z-10">
            <p className="theme-text font-semibold text-lg mb-1">¡Estoy disponible!</p>
            <p className="theme-muted text-base max-w-2xl leading-relaxed">
              Mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta, una propuesta de proyecto o simplemente quieras saludar, ¡haré todo lo posible para responderte!
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10">
          <div className="space-y-6">
            <h2 className="theme-text text-xl font-semibold mb-6">Información de contacto</h2>
            
            <a href="https://linkedin.com/in/deimer-roncancio" target="_blank" rel="noreferrer" className="theme-contact-link theme-muted flex items-center gap-4 transition-colors">
              <div className="theme-contact-icon p-3 border rounded-xl">
                <FaLinkedin size={20} className="text-[#347fca]" />
              </div>
              <span className="theme-contact-link-text transition-colors">LinkedIn</span>
            </a>
            
            <a href="https://github.com/DeimerRoncancio" target="_blank" rel="noreferrer" className="theme-contact-link theme-muted flex items-center gap-4 transition-colors">
              <div className="theme-contact-icon p-3 border rounded-xl">
                <FaGithub size={20} className="theme-text text-[#f0f6fc]" />
              </div>
              <span className="theme-contact-link-text transition-colors">GitHub</span>
            </a>

            <a href="mailto:deimerroncancio@gmail.com" target="_blank" rel="noreferrer" className="theme-contact-link theme-muted flex items-center gap-4 transition-colors">
              <div className="theme-contact-icon p-3 border rounded-xl">
                <FaEnvelope size={20} className="text-[#61dafb]" />
              </div>
              <span className="theme-contact-link-text transition-colors">deimerroncancio@gmail.com</span>
            </a>
            
            <div className="theme-muted flex items-center gap-4">
              <div className="theme-contact-icon p-3 border rounded-xl">
                <FaMapMarkerAlt size={20} className="text-green-400" />
              </div>
              <span>Villavicencio, Colombia</span>
            </div>
          </div>

          <form className="theme-contact-form space-y-5 w-full p-6 rounded-2xl border">
            <div>
              <label className="theme-muted block text-sm font-medium mb-2" htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                className="theme-input w-full border rounded-lg p-3 focus:outline-none transition-colors"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label className="theme-muted block text-sm font-medium mb-2" htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="theme-input w-full border rounded-lg p-3 focus:outline-none transition-colors"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className="theme-muted block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                rows="4"
                className="theme-input w-full border rounded-lg p-3 focus:outline-none transition-colors resize-none"
                placeholder="Describe tu consulta o proyecto..."
              ></textarea>
            </div>
            <button
              type="button"
              className="theme-submit-button w-full font-medium py-3 rounded-lg transition-colors mt-2"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        <div className="theme-border pt-6 border-t text-center">
          <p className="theme-muted text-xs">
            &copy; {new Date().getFullYear()} Deimer Roncancio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
