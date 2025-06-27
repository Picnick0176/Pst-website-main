declare module 'aos' {
  interface AOSOptions {
    offset?: number;
    duration?: number;
    easing?: string;
    delay?: number;
    // เพิ่มตามที่คุณใช้จริง
    [key: string]: unknown;
  }

  const AOS: {
    init: (options?: AOSOptions) => void;
    refresh: () => void;
    refreshHard: () => void;
  };

  export default AOS;
}
