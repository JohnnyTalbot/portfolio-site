import React, { useState, useEffect, useRef } from 'react'

import Star from './Star';
import StarExplosion from './StarExplosion';

interface IconProps {
  icon: string;
  style: React.CSSProperties;
  className?: string;
}

function Icon({icon, style, className} : IconProps) {
  const [starsShow, setStarsShow] = useState(false)
  const [starsPosition, setStarsPosition] = useState<{top: number, left: number} | null>(null)
  const [iconSize, setIconSize] = useState(25)

  const targetRef = useRef<SVGSVGElement>(null)

  const handleMouseEnter = () => {
    if (targetRef.current) {
      const { top, left, width, height } = targetRef.current.getBoundingClientRect();
      setStarsPosition({
        top: top + height/2,
        left: left + width/2

      });
      setIconSize(width);
      setStarsShow(true);
    }
  };

  const handleMouseLeave = () => {
    setStarsShow(false);
  };

  return (
    <div>
    {icon == 'instagram' ?
    <div>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={style}
        className={className}
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <path d="M50 33.3333C45.5797 33.3333 41.3405 35.0893 38.2149 38.2149C35.0893 41.3405 33.3333 45.5797 33.3333 50C33.3333 54.4203 35.0893 58.6595 38.2149 61.7851C41.3405 64.9107 45.5797 66.6667 50 66.6667C54.4203 66.6667 58.6595 64.9107 61.7851 61.7851C64.9107 58.6595 66.6667 54.4203 66.6667 50C66.6667 45.5797 64.9107 41.3405 61.7851 38.2149C58.6595 35.0893 54.4203 33.3333 50 33.3333Z" fill="#FAF570"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M30 0C22.0435 0 14.4129 3.16071 8.7868 8.7868C3.16071 14.4129 0 22.0435 0 30V70C0 77.9565 3.16071 85.5871 8.7868 91.2132C14.4129 96.8393 22.0435 100 30 100H70C77.9565 100 85.5871 96.8393 91.2132 91.2132C96.8393 85.5871 100 77.9565 100 70V30C100 22.0435 96.8393 14.4129 91.2132 8.7868C85.5871 3.16071 77.9565 0 70 0H30ZM26.6667 50C26.6667 43.8116 29.125 37.8767 33.5008 33.5008C37.8767 29.125 43.8116 26.6667 50 26.6667C56.1884 26.6667 62.1233 29.125 66.4992 33.5008C70.875 37.8767 73.3333 43.8116 73.3333 50C73.3333 56.1884 70.875 62.1233 66.4992 66.4992C62.1233 70.875 56.1884 73.3333 50 73.3333C43.8116 73.3333 37.8767 70.875 33.5008 66.4992C29.125 62.1233 26.6667 56.1884 26.6667 50ZM73.3333 26.6667H80V20H73.3333V26.6667Z" fill="#FAF570"/>
      </svg>
    </div>
    : icon == 'linkedin' ?
    <div>
      <svg width="100" height="102" viewBox="0 0 100 102" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={style}
        className={className}
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M0 10.2C0 7.49479 1.05357 4.90038 2.92893 2.98751C4.8043 1.07464 7.34784 0 10 0L90 0C92.6522 0 95.1957 1.07464 97.0711 2.98751C98.9464 4.90038 100 7.49479 100 10.2V91.8C100 94.5052 98.9464 97.0996 97.0711 99.0125C95.1957 100.925 92.6522 102 90 102H10C7.34784 102 4.8043 100.925 2.92893 99.0125C1.05357 97.0996 0 94.5052 0 91.8L0 10.2ZM33.3333 34H26.6667V27.2H33.3333V34ZM26.6667 74.8V40.8H33.3333V74.8H26.6667ZM56.6667 47.6C54.0145 47.6 51.471 48.6746 49.5956 50.5875C47.7202 52.5004 46.6667 55.0948 46.6667 57.8V74.8H40V40.8H46.6667V44.2C49.1428 42.3057 52.0872 41.1522 55.1699 40.8687C58.2526 40.5852 61.3518 41.1828 64.1202 42.5947C66.8887 44.0066 69.2169 46.177 70.8442 48.8626C72.4714 51.5482 73.3333 54.6429 73.3333 57.8V74.8H66.6667V57.8C66.6667 55.0948 65.6131 52.5004 63.7377 50.5875C61.8624 48.6746 59.3188 47.6 56.6667 47.6Z" fill="#FAF570"/>
      </svg>
    </div>
    : icon == 'github' ?
    <div>
      <svg width="102" height="100" viewBox="0 0 102 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={style}
        className={className}
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <path d="M51 0C44.3026 0 37.6707 1.3254 31.4831 3.90052C25.2955 6.47563 19.6733 10.25 14.9376 15.0082C5.3732 24.6179 0 37.6513 0 51.2414C0 73.89 14.637 93.1055 34.884 99.9206C37.434 100.331 38.25 98.7421 38.25 97.3586V88.6988C24.123 91.7733 21.114 81.8324 21.114 81.8324C18.768 75.8884 15.453 74.3 15.453 74.3C10.812 71.123 15.81 71.2255 15.81 71.2255C20.91 71.5842 23.613 76.5033 23.613 76.5033C28.05 84.292 35.547 81.9862 38.454 80.7564C38.913 77.4257 40.239 75.1711 41.667 73.89C30.345 72.609 18.462 68.2022 18.462 48.6793C18.462 42.9915 20.4 38.431 23.715 34.7929C23.205 33.5118 21.42 28.1827 24.225 21.2652C24.225 21.2652 28.509 19.8816 38.25 26.4918C42.279 25.3645 46.665 24.8008 51 24.8008C55.335 24.8008 59.721 25.3645 63.75 26.4918C73.491 19.8816 77.775 21.2652 77.775 21.2652C80.58 28.1827 78.795 33.5118 78.285 34.7929C81.6 38.431 83.538 42.9915 83.538 48.6793C83.538 68.2535 71.604 72.5578 60.231 73.8388C62.067 75.4273 63.75 78.553 63.75 83.3184V97.3586C63.75 98.7421 64.566 100.382 67.167 99.9206C87.414 93.0543 102 73.89 102 51.2414C102 44.5122 100.681 37.849 98.1179 31.6321C95.5549 25.4152 91.7982 19.7664 87.0624 15.0082C82.3267 10.25 76.7045 6.47563 70.5169 3.90052C64.3293 1.3254 57.6974 0 51 0V0Z" fill="#FAF570"/>
      </svg>
    </div>
    : icon == 'phone' ?
    <div>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={style}
        className={className}
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M8.24758 7.16574C6.65779 8.75715 5.20009 10.7093 4.25758 12.4091C2.80546 14.9576 1.94724 17.7022 1.39883 20.5648C-2.92205 42.4853 2.56543 62.0945 20.6802 80.0788C32.5657 91.8788 41.5785 96.7278 53.919 98.498C60.8333 99.4898 67.8638 99.5746 74.8276 99.9714C77.9139 100.147 81.2136 99.4901 84.1638 98.6263C87.4797 97.4549 90.5071 95.5549 93.0423 93.0171C102.319 83.7307 102.319 68.6744 93.0423 59.388L92.2157 58.5987C83.2477 50.4334 69.5342 50.3588 60.4824 58.4149L53.6739 65.1273C52.417 66.3855 50.438 66.5559 48.9848 65.5312C45.9619 63.3994 37.9301 55.5389 35.9695 52.86C34.9037 51.4037 35.0584 49.3868 36.3339 48.1106C38.4929 45.9959 40.6757 43.903 42.8115 41.765C52.3561 32.2107 52.3561 16.7201 42.8115 7.16574C33.267 -2.38858 17.7921 -2.38858 8.24758 7.16574Z" fill="#FAF570"/>
      </svg>
    </div>
    : icon == 'email' ?
    <div>
      <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={style}
        className={className}
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <path d="M4.89094 3.91804C7.55741 1.48429 11.1054 0 15 0H85C88.8946 0 92.4426 1.48429 95.1091 3.91804L50 33.9907L4.89094 3.91804Z" fill="#FAF570"/>
        <path d="M0.162513 12.7843C0.0554584 13.5073 0 14.2472 0 15V65C0 73.2843 6.71573 80 15 80H85C93.2843 80 100 73.2843 100 65V15C100 14.2472 99.9445 13.5073 99.8375 12.7843L52.7735 44.1603C51.094 45.2799 48.906 45.2799 47.2265 44.1603L0.162513 12.7843Z" fill="#FAF570"/>
      </svg>
    </div>
    :
    <div></div>}

    {starsPosition && (
      <div>
        <StarExplosion position={starsPosition} iconSize={iconSize} starsShow={starsShow} />
      </div>
    )}
    </div>
  )
}

export default Icon
