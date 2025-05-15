import 'react';

interface TabProps {
  currentTab: string;
  setCurrentTab: Function;
}

function Tab({currentTab, setCurrentTab} : TabProps) {

  const activeBorder = "solid #5A7AFB 2px";
  const inactiveBorder = "solid rgba(90, 122, 251, 0.5) 2px";

  return (
    <div className='flex flex-row'>
      {/* Profile */}
      <div 
        className='flex flex-col justify-center items-center cursor-pointer'
        style={{
          height: "60px",
          width: "70px",
          borderTop: currentTab == 'profile' ? activeBorder : inactiveBorder,
          borderLeft: currentTab == 'profile' ? activeBorder : inactiveBorder,
          borderRight: currentTab == 'profile' ? activeBorder : "none",
          borderBottom: currentTab == 'profile' ? "none" : activeBorder,
          boxSizing: "border-box",
        }}
        onClick = {() => {setCurrentTab('profile')}
        }
        >
        <svg width="50%" viewBox="0 0 43 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.46337 33.0254C6.54602 28.445 12.0055 25 21.109 25C30.2125 25 35.672 28.445 38.7546 33.0254C41.734 37.4523 42.2085 42.5263 42.218 45.3339C42.2275 48.1572 40.0069 50 37.7302 50H4.4878C2.21112 50 -0.00949683 48.1572 3.05476e-05 45.3339C0.00950536 42.5263 0.484035 37.4523 3.46337 33.0254Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M21.1092 20C26.2907 20 30.4911 15.5228 30.4911 10C30.4911 4.47715 26.2907 0 21.1092 0C15.9278 0 11.7274 4.47715 11.7274 10C11.7274 15.5228 15.9278 20 21.1092 20Z" fill="white"/>
        </svg>
      </div>

      {/* School */}
      <div 
        className='flex flex-col justify-center items-center cursor-pointer'
        style={{
          height: "60px",
          width: "70px",
          borderTop: currentTab == 'school' ? activeBorder : inactiveBorder,
          borderLeft: currentTab == 'school' ? activeBorder : "none",
          borderRight: currentTab == 'school' ? activeBorder : "none",
          borderBottom: currentTab == 'school' ? "none" : activeBorder,
          boxSizing: "border-box",
        }}
        onClick = {() => {setCurrentTab('school')}
        }
        >
        <svg width="50%" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.03571 23.3757L23.5221 30.2056C25.5999 31.1219 27.9716 31.1219 30.0493 30.2056L45.5357 23.3757V40.6971C45.5357 44.367 37.1411 50 26.7857 50C16.4304 50 8.03571 44.367 8.03571 40.6971V23.3757Z" fill="white"/>
          <path d="M30.0493 0.687257C27.9716 -0.229087 25.5999 -0.229085 23.5221 0.687258L1.5907 10.3596C0.623394 10.7862 0 11.738 0 12.7884C0 13.8388 0.623394 14.7907 1.5907 15.2173L23.5221 24.8896C25.5999 25.806 27.9716 25.806 30.0493 24.8896L51.9807 15.2173C52.948 14.7907 53.5714 13.8388 53.5714 12.7884C53.5714 11.738 52.948 10.7862 51.9807 10.3596L30.0493 0.687257Z" fill="white"/>
        </svg>
      </div>

      {/* Hobbies */}
      <div 
        className='flex flex-col justify-center items-center cursor-pointer'
        style={{
          height: "60px",
          width: "70px",
          borderTop: currentTab == 'hobbies' ? activeBorder : inactiveBorder,
          borderLeft: currentTab == 'hobbies' ? activeBorder : "none",
          borderRight: currentTab == 'hobbies' ? activeBorder : inactiveBorder,
          borderBottom: currentTab == 'hobbies' ? "none" : activeBorder,
          boxSizing: "border-box",
        }}
        onClick = {() => {setCurrentTab('hobbies')}
        }
        >
        <svg width="50%" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.0775 14.5728C26.2062 14.1357 27.1992 13.3813 27.9695 12.4097C29.0092 11.0938 29.637 9.37744 29.637 7.5C29.637 3.35693 26.5758 0 22.7977 0C19.0196 0 15.9584 3.35693 15.9584 7.5C15.9584 10.7666 17.8619 13.5425 20.5179 14.5728V27.5C20.5179 28.8818 21.5376 30 22.7977 30C23.4812 30 24.0934 29.6729 24.5098 29.1528C24.8638 28.7109 25.0775 28.1323 25.0775 27.5V14.5728Z" fill="white"/>
          <path d="M9.68012 20C7.85898 20 6.21371 21.1865 5.49238 23.02L0.374025 36.0352L0.280519 36.2939L0.200371 36.5503C0.171428 36.6528 0.144712 36.7578 0.124675 36.8628L0.0935063 37.0093C0.0311688 37.3389 0 37.6758 0 38.0151V45C0 47.7612 2.04155 50 4.55954 50H41.0359C43.5539 50 45.5954 47.7612 45.5954 45V38.0151C45.5954 37.334 45.4685 36.6602 45.2214 36.0352L40.1031 23.02C39.3817 21.1865 37.7365 20 35.9153 20H32.3866C31.7877 20 31.2422 20.2539 30.8348 20.6665C30.3873 21.123 30.1068 21.7749 30.1068 22.5C30.1068 23.3301 30.4741 24.0649 31.0419 24.519C31.2534 24.6875 31.4916 24.8193 31.7498 24.9023C31.9524 24.9658 32.1662 25 32.3866 25H35.9153L39.8493 35H5.74618L9.68012 25H13.2089C14.469 25 15.4886 23.8818 15.4886 22.5C15.4886 21.1182 14.469 20 13.2089 20H9.68012Z" fill="white"/>
        </svg>
      </div>

      <div 
      className='grow'
      style={{borderBottom: "solid #5A7AFB 2px",}}>
      </div>
    </div>
  )
}

export default Tab;