export const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

export const randomIsoDateString = (): string => {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp).toISOString().split('T')[0];
};

export const baseUrl = 'http://127.0.0.1:8080';

export const apiCall = async (
  url: string,
  data: any,
  method = 'GET',
  headers = { 'Content-Type': 'application/json' },
) => {
  let opts;

  if (method === 'GET') {
    opts = {
      method,
      headers,
    };
  }

  if (method === 'POST') {
    opts = {
      method,
      headers,
      body: JSON.stringify(data),
    };
  }

  if (method === 'DELETE') {
    opts = {
      method,
      headers,
    };
  }

  if (method === 'PUT') {
    opts = {
      method,
      headers,
      body: JSON.stringify(data),
    };
  }

  const r = await fetch(url, opts);
  const json = await r.json();
  return json;
};
