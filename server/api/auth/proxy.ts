// server/api/auth/proxy.ts

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Quick debug – remove later
  console.log('Proxy hit!', body);

  const { endpoint, payload } = body;

  if (!endpoint || !payload) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing endpoint or payload in body'
    });
  }

  try {
    const response = await $fetch(`http://localhost:1337/api/${endpoint}`, {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response; // { jwt, user, ... }
  } catch (err: any) {
    console.error('Proxy error:', err);

    throw createError({
      statusCode: err.status || 500,
      statusMessage: err.data?.error?.message || 'Strapi auth failed'
    });
  }
});