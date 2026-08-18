import { useEffect, useRef } from "react";

function ButtonComponent() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
    buttonRef.current.textContent = "Hello I am different";

    let timeOut = setTimeout(() => {
      buttonRef.current.textContent = "Click me!";
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div>
      <button ref={buttonRef}>Click me</button>
    </div>
  );
}

export default ButtonComponent;
