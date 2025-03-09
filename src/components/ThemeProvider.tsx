import { createContext, useContext, useEffect, useState } from "react";

// Estado inicial del contexto
const initialState: ThemeProviderState = {
  theme: { mode: "dark", color: "zinc" },
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = { mode: "dark", color: "zinc" },
  storageKey = "distort-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Obtener el tema inicial desde localStorage o usar el tema por defecto
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem(storageKey);
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  };

  const [storedTheme, setStoredTheme] = useState<Theme>(getInitialTheme);

  // Efecto para guardar el tema en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(storedTheme));
  }, [storedTheme, storageKey]);

  const value = {
    theme: storedTheme,
    setTheme: (theme: Theme) => {
      setStoredTheme(theme);
    },
  };

  // Detectar el modo del sistema operativo si está en "system"
  if (storedTheme.mode === "system") {
    const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    return (
      <ThemeProviderContext.Provider value={value} {...props}>
        <div data-theme={`${storedTheme.color}-${systemMode}`}>{children}</div>
      </ThemeProviderContext.Provider>
    );
  }

  // Manejo normal si no es modo "system"
  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      <div
        className={`${storedTheme.mode}`}
        data-theme={`${storedTheme.color}-${storedTheme.mode}`}
      >
        {children}
      </div>
    </ThemeProviderContext.Provider>
  );
}

/**
 * Hook para usar y actualizar el tema en toda la aplicación
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
