import dynamic from 'next/dynamic';

const selectedTheme =
  (process.env.THEME_STYLE as
    | 'nouns'
    | 'modern'
    | 'sleek'
    | 'tech'
    | undefined) ?? 'nouns';

const themes = {
  //example
  button: {
    sleek: 'border border-black',
    modern: 'border border-gray-500 rounded-lg',
    nouns: 'bg-red-500',
  },
};

const DynamicModernFont = dynamic(
  () => import('../components/layouts/Fonts/ModernFont'),
  { ssr: true }
);
const DynamicSleekFont = dynamic(
  () => import('../components/layouts/Fonts/SleekFont'),
  { ssr: true }
);
const DynamicTechFont = dynamic(
  () => import('../components/layouts/Fonts/TechFont'),
  { ssr: true }
);
const DynamicNounsFont = dynamic(
  () => import('../components/layouts/Fonts/NounsFont'),
  { ssr: true }
);

const DynamicFontWrappers = {
  nouns: DynamicNounsFont,
  modern: DynamicModernFont,
  sleek: DynamicSleekFont,
  tech: DynamicTechFont,
};

export const getFontWrapper = () => {
  return DynamicFontWrappers[selectedTheme];
};
