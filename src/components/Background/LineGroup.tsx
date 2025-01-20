import React, { useEffect, useState, ReactNode, ReactElement, CSSProperties } from 'react'

interface MyComponentProps {
  isTop?: boolean;
  children: ReactNode;
}

function LineGroup({isTop = false, children}: MyComponentProps) {
  const [isVisible, setVisible] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setVisible(true);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getScale = () => {
    if (windowWidth >= 1024) {
      return 'scale(1)';
    } else if (windowWidth >= 768) {
      return 'scale(0.75)';
    } else {
      return 'scale(0.5)';
    }
  };

  return (
    <div
        className="flex flex-row gap-10 justify-center transition-transform duration-700 ease-out"
        style={{
          transform: `${isVisible ? "translateX(0)" : isTop ? "translateX(1000px)" : "translateX(-1000px)"} ${getScale()}`,
        }}
      >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childWithProps = child as ReactElement<{ style?: CSSProperties }>;
          return React.cloneElement(childWithProps, {
            style: { ...(childWithProps.props.style || {}), flexShrink: 0 },
          });
        }
        return child;
      })}
    </div>
  )
}

export default LineGroup
