export function health(request, response) {
  response.json({ status: 'ok', service: 'paryatan-360-backend' });
}
