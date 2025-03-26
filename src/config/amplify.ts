function validateAndFormatUrl(url: string | undefined): string {
  if (!url) {
    throw new Error('API URL is not defined');
  }

  // If the URL doesn't start with http:// or https://, add https://
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = `https://${url}`;
  }

  try {
    new URL(url);
    return url;
  } catch (error) {
    throw new Error(`Invalid API URL: ${url}`);
  }
}

// Debug logging
console.log('Environment Variables:', {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  region: process.env.NEXT_PUBLIC_REGION,
  apiKey: process.env.NEXT_PUBLIC_API_KEY ? '***' : undefined,
});

const endpoint = validateAndFormatUrl(process.env.NEXT_PUBLIC_API_URL);
console.log('Formatted API endpoint:', endpoint);

export const amplifyConfig = {
  API: {
    GraphQL: {
      endpoint,
      region: process.env.NEXT_PUBLIC_REGION || 'us-east-1',
      defaultAuthMode: 'apiKey' as const,
      apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    },
  },
}; 