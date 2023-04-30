export default function disableCopy() {
    if (typeof window !== 'undefined') {
        window.document.addEventListener('copy', (event) => {
          event.preventDefault();
        });
      }
  }