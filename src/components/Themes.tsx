  
import { useTheme } from "next-themes";
import { Switch } from '@headlessui/react';
import { useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);


  const getNextTheme = (): string => {
    if (theme === "dark") return "light";
    if (theme === "light") return "dark";
    return "light";
  };
  return (

    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-blue-600' : 'bg-gray-800'} relative inline-flex items-center h-6 rounded-full w-11`}
    >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full`} />
      </Switch>
  );
  
}
 