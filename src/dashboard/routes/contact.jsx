import '../../../css/style.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="dropable-zone-container py-14 animation-fadeInUp">
      <div className="max-w-4xl space-y-10">
        <div className="bg-[#1e273a]/60 border border-[#2a3852] border-l-4 border-l-[#00a4ac] p-6 rounded-r-2xl rounded-l-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-5 transform translate-x-4 -translate-y-4">
            <FaEnvelope size={120} />
          </div>
          <div className="bg-[#151c2c] p-4 rounded-full border border-[#2a3852] z-10 shrink-0">
            <FaEnvelope size={28} className="text-[#00a4ac]" />
          </div>
          <div className="z-10">
            <p className="text-white font-semibold text-lg mb-1">¡Estoy disponible!</p>
            <p className="text-[#979fa1] text-base max-w-2xl leading-relaxed">
              Mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta, una propuesta de proyecto o simplemente quieras saludar, ¡haré todo lo posible para responderte!
            </p>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-6">Información de contacto</h2>
            
            <a href="https://linkedin.com/in/deimer-roncancio" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#979fa1] hover:text-white transition-colors">
              <div className="p-3 bg-[#1e273a] border border-[#2a3852] rounded-xl group-hover:bg-[#2a3852]">
                <FaLinkedin size={20} className="text-[#347fca]" />
              </div>
              <span>LinkedIn</span>
            </a>
            
            <a href="https://github.com/DeimerRoncancio" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#979fa1] hover:text-white transition-colors">
              <div className="p-3 bg-[#1e273a] border border-[#2a3852] rounded-xl group-hover:bg-[#2a3852]">
                <FaGithub size={20} className="text-[#f0f6fc]" />
              </div>
              <span>GitHub</span>
            </a>

            <a href="mailto:deimerroncancio@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#979fa1] hover:text-white transition-colors">
              <div className="p-3 bg-[#1e273a] border border-[#2a3852] rounded-xl group-hover:bg-[#2a3852]">
                <FaEnvelope size={20} className="text-[#61dafb]" />
              </div>
              <span>deimerroncancio@gmail.com</span>
            </a>
            
            <div className="flex items-center gap-4 text-[#979fa1]">
              <div className="p-3 bg-[#1e273a] border border-[#2a3852] rounded-xl">
                <FaMapMarkerAlt size={20} className="text-green-400" />
              </div>
              <span>Villavicencio, Colombia</span>
            </div>
          </div>

          <form className="space-y-5 w-full bg-[#1e273a] p-6 rounded-2xl border border-[#2a3852]">
            <div>
              <label className="block text-sm font-medium text-[#979fa1] mb-2" htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#151c2c] border border-[#2a3852] rounded-lg p-3 text-white focus:outline-none focus:border-[#00a4ac] transition-colors"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#979fa1] mb-2" htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#151c2c] border border-[#2a3852] rounded-lg p-3 text-white focus:outline-none focus:border-[#00a4ac] transition-colors"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#979fa1] mb-2" htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-[#151c2c] border border-[#2a3852] rounded-lg p-3 text-white focus:outline-none focus:border-[#00a4ac] transition-colors resize-none"
                placeholder="Describe tu consulta o proyecto..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-[#00a4ac] hover:bg-[#008f96] text-white font-medium py-3 rounded-lg transition-colors mt-2"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        <div className="pt-6 border-t border-[#2a3852] text-center">
          <p className="text-[#979fa1] text-xs">
            &copy; {new Date().getFullYear()} Deimer Roncancio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
