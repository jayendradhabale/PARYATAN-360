export function notFound(request, response) {
  response.status(404).json({ message: 'API route not found.' });
}

export function errorHandler(error, request, response, next) {
  console.error(error);
  response.status(error.statusCode || 500).json({ message: error.statusCode ? error.message : 'Unexpected server error.' });
}
