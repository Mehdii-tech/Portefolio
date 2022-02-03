import { Switch } from "@headlessui/react";
import React, { useState } from "react"
import { useTheme } from "../hooks/Theme";


const daynight = () => {
  const { theme, dark, toggle } = useTheme();
  const [enabled, setEnabled] = useState(false)
  typeof window !== "undefined" && (document.body.style.backgroundColor = theme.bg);
  return (
    <>
      <div className={"day-night outline-none"}>
        <div style={{ cursor: "pointer" }}  onClick={() => toggle()}>
                        <Switch 
                                checked={enabled || dark}
                                onChange={setEnabled}
                                className={`${enabled || dark ? 'bg-gray-600 ': 'bg-yellow-200 '} relative inline-flex items-center  h-6 focus:outline-none  rounded-full w-11`}>                                                                                      
                            <span className="sr-only">Enable notifications</span>
                            <div className="fixed inline-flex items-center">
                            <span className={`${enabled || dark ? 'opacity-100 ' : 'hidden'} w-2 pr-2`} >🌑️</span> 
                            <span className={`${enabled || dark ? 'translate-x-4' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white pl-3  rounded-full`}/>
                            <span className={`${enabled || dark ? 'hidden' : 'opacity-100'} w-2 pl-2`} >💡</span>
                            </div>
                        </Switch>
        </div>
      </div>
      <style jsx>{`
        .day-night {
          top: 0;
          right: 6;
          margin-top: 8px;
        }
      `}</style>
    </>
  );
};

export default daynight;