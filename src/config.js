import React from 'react'

export const BLOGS_URL = 'https://raw.githubusercontent.com/tsa-dom/contents/main'

export const PAGE_COMPONENTS = {
  p: ({ ...props }) => <p style={{ color: 'white' }} {...props} />,
  h1: ({ ...props }) => <h1 style={{ color: 'white' }} {...props} />,
  h2: ({ ...props }) => <h2 style={{ color: 'white' }} {...props} />,
  h3: ({ ...props }) => <h3 style={{ color: 'white' }} {...props} />,
  h4: ({ ...props }) => <h4 style={{ color: 'white' }} {...props} />,
  h5: ({ ...props }) => <h5 style={{ color: 'white' }} {...props} />,
  h6: ({ ...props }) => <h6 style={{ color: 'white' }} {...props} />,
  ul: ({ ...props }) => <ul style={{ color: 'white' }} {...props} />,
}