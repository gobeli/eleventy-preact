
export const h  =
  typeof window === 'undefined' ? require('preact').h : (window as any).h;