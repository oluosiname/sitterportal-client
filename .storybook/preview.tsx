import '../src/styles/globals.css';
import { quicksand, robotoSlab, sora } from '../src/assets/fonts';

import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { withThemeByClassName } from '@storybook/addon-styling';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <div
        className={`${quicksand.variable} ${sora.variable} ${robotoSlab.variable} font-quicksand`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
