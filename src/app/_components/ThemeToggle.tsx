'use client';

import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800"
            suppressHydrationWarning
        >
            {resolvedTheme === 'dark' ? '🌞' : '🌙'}
        </button>
    );
}
