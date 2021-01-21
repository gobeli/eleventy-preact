// For the admin preview, use the createElement function provided by netlify cms, else use preact
export const h  =
  typeof window === 'undefined' ? require('preact').h : (window as any).h;