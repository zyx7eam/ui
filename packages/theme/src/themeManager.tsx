'use client';

import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  ThemeProvider as NextThemeProvider,
  useTheme as useNextTheme,
} from 'next-themes';

export type ThemeConfig = {
  glassEffect?: boolean;
  animations?: boolean;
  reducedMotion?: boolean;
  colorMode?: 'light' | 'dark' | 'system';
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  density?: 'compact' | 'normal' | 'comfortable';
  avatar?: {
    class?: string;
    statusDot?: {
      class?: string;
    };
  };
  badge?: {
    class?: string;
    childWrapperClass?: string;
  };
};

export type NextThemesProps = {
  attribute?: string;
  themes?: string[];
  defaultTheme?: string;
  enableSystem?: boolean;
  enableColorScheme?: boolean;
  storageKey?: string;
  value?: { [key: string]: string };
  forcedTheme?: string;
  nonce?: string;
  disableTransitionOnChange?: boolean;
};

export type ThemeContextProps = {
  selectedTheme?: string;
  changeTheme: (theme: string) => void;
  config: ThemeConfig;
  updateConfig: (newConfig: Partial<ThemeConfig>) => void;
  themesList: string[];
  isDark: boolean;
  isLight: boolean;
  isSystem: boolean;
};

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined,
);

const defaultThemes: Record<string, string> = {
  light: 'light',
  dark: 'dark',
  system: 'system',
};

const defaultConfig: ThemeConfig = {
  glassEffect: false,
  animations: true,
  reducedMotion: false,
  colorMode: 'system',
  borderRadius: 'md',
  density: 'normal',
  avatar: {
    class: '',
    statusDot: {
      class: '',
    },
  },
  badge: {
    class: '',
    childWrapperClass: '',
  },
};

type ThemeProviderProps = PropsWithChildren<{
  config?: Partial<ThemeConfig>;
  nextThemeConfig?: NextThemesProps;
  themes?: Record<string, string>;
}>;

export function ThemeProvider({
  children,
  config: initialConfig = {},
  nextThemeConfig,
  themes: customThemes,
}: ThemeProviderProps) {
  return (
    <NextThemeProvider
      {...nextThemeConfig}
      attribute={nextThemeConfig?.attribute || 'class'}
      themes={
        nextThemeConfig?.themes || Object.values(customThemes || defaultThemes)
      }
      defaultTheme={nextThemeConfig?.defaultTheme || 'system'}
      enableSystem={nextThemeConfig?.enableSystem ?? true}
    >
      <ThemeProviderWrapper
        config={initialConfig}
        themes={customThemes || defaultThemes}
      >
        {children}
      </ThemeProviderWrapper>
    </NextThemeProvider>
  );
}

const ThemeProviderWrapper = ({
  children,
  config: initialConfig = {},
  themes: customThemes = defaultThemes,
}: ThemeProviderProps) => {
  const [config, setConfig] = useState<ThemeConfig>({
    ...defaultConfig,
    ...initialConfig,
  });
  const [themes] = useState<Record<string, string>>(customThemes);

  const { theme, setTheme, systemTheme, resolvedTheme } = useNextTheme();

  useEffect(() => {
    setConfig((prev) => ({ ...prev, ...initialConfig }));
  }, [initialConfig]);

  // Apply CSS custom properties based on config
  useEffect(() => {
    const root = document.documentElement;

    // Apply border radius
    const radiusMap = {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
    };
    root.style.setProperty('--radius', radiusMap[config.borderRadius || 'md']);

    // Apply density spacing
    const densityMap = {
      compact: '0.75',
      normal: '1',
      comfortable: '1.25',
    };
    root.style.setProperty(
      '--density-scale',
      densityMap[config.density || 'normal'],
    );

    // Apply animation preferences
    if (config.reducedMotion) {
      root.style.setProperty('--animation-duration', '0ms');
    } else {
      root.style.setProperty(
        '--animation-duration',
        config.animations ? '200ms' : '0ms',
      );
    }
  }, [config]);

  // Change the theme
  const changeTheme = useCallback(
    (name: string) => {
      if (themes[name]) {
        setTheme(themes[name]);
      } else {
        console.warn(`Theme ${name} does not exist`);
      }
    },
    [themes, setTheme],
  );

  // Update configuration
  const updateConfig = useCallback((newConfig: Partial<ThemeConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  }, []);

  const themesList = Object.keys(themes);
  const isDark = resolvedTheme === 'dark';
  const isLight = resolvedTheme === 'light';
  const isSystem = theme === 'system';

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme: theme,
        changeTheme,
        config,
        updateConfig,
        themesList,
        isDark,
        isLight,
        isSystem,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Safe version that doesn't throw - returns default values when no provider exists
export const useThemeSafe = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      selectedTheme: 'light',
      changeTheme: () => {},
      config: defaultConfig,
      updateConfig: () => {},
      themesList: ['light', 'dark'],
      isDark: false,
      isLight: true,
      isSystem: false,
    };
  }
  return context;
};

// Hook to check if theme provider exists
export const useHasThemeProvider = () => {
  const context = useContext(ThemeContext);
  return !!context;
};

// Hook for accessing Next.js theme functionality directly
export const useNextJSTheme = () => {
  return useNextTheme();
};

// Utility function to create theme-aware CSS classes
export const createThemeAwareClasses = (
  lightClasses: string,
  darkClasses: string,
) => {
  return `${lightClasses} dark:${darkClasses}`;
};
