import { useState } from 'react';

export default function PinCard() {
  const [likes, setLikes] = useState(142);
  const [isLiked, setIsLiked] = useState(false);
  const [commentsCount, setCommentsCount] = useState(18);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden font-sans">
      
      {/* Cabecera del Post (Perfil, Nombre y Fecha) */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pinimg.com/736x/93/55/fb/9355fbc43f8175645e2e3bd8b1d0da59.jpg"
            alt="Avatar de usuario"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold text-sm text-slate-900">Wendy Daniela</h3>
            </div>
            <p className="text-xs text-slate-500">
              Hace 2 horas
            </p>
          </div>
        </div>

        {/* Botón de opciones (3 puntos) */}
        <button className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>

      {/* Texto de la publicación */}
      <div className="px-4 pb-3 text-sm text-slate-800 leading-relaxed">
        Miren esto tan increible que hice, que opinan? no hate plis
      </div>

      {/* Contenedor de la Imagen del Post */}
      <div className="w-full bg-slate-900 max-h-[400px] overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/8e/62/05/8e6205ba989d8546bce016586987b9ab.jpg"
          alt="Contenido multimedia"
          className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-300"
        />
      </div>

      {/* Estadísticas de Reacciones y Comentarios */}
      <div className="px-4 py-2.5 flex items-center justify-between text-xs text-slate-500 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
              <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
          <span className="font-medium text-slate-700">{likes}</span>
        </div>
        <div className="flex gap-3">
          <span>{commentsCount} comentarios</span>
          <span>12 compartidos</span>
        </div>
      </div>

      {/* Botones de Acción (Me gusta, Comentar, Compartir) */}
      <div className="px-2 py-1 grid grid-cols-3 gap-1">
        
        {/* Botón Me Gusta */}
        <button
          onClick={handleLike}
          className={`flex items-center justify-center gap-2 py-2 rounded-lg font-medium text-sm transition hover:bg-slate-100 ${
            isLiked ? "text-blue-600 font-semibold" : "text-slate-600"
          }`}
        >
          <svg className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          Me gusta
        </button>

        {/* Botón Comentar */}
        <button className="flex items-center justify-center gap-2 py-2 rounded-lg font-medium text-sm text-slate-600 hover:bg-slate-100 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Comentarios
        </button>

        {/* Botón Compartir */}
        <button className="flex items-center justify-center gap-2 py-2 rounded-lg font-medium text-sm text-slate-600 hover:bg-slate-100 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Compartir
        </button>

      </div>

    </div>
  );
}