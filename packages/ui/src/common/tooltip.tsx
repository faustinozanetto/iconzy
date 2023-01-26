import React, { MouseEvent, useState, createRef, PropsWithChildren, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props extends PropsWithChildren {
  text: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<Props> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPortalRoot(document.getElementById('tooltip-root'));
    }
  }, []);

  return (
    <>
      <div ref={ref} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        {children}
      </div>
      {isVisible &&
        portalRoot &&
        createPortal(
          <div
            className="bg-gray-800 text-white rounded py-2 px-3 absolute"
            style={{
              left: ref.current?.offsetLeft!,
              top: ref.current?.offsetTop! - ref.current?.clientHeight! / 2,
            }}
          >
            {text}
          </div>,
          portalRoot
        )}
    </>
  );
};
