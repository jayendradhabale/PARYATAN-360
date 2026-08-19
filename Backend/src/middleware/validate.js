export function requireFields(...fields) {
  return (request, response, next) => {
    const missing = fields.filter((field) => typeof request.body?.[field] !== 'string' || !request.body[field].trim());
    if (missing.length) return response.status(400).json({ message: `Required fields: ${missing.join(', ')}.` });
    return next();
  };
}

export function validateRegistration(request, response, next) {
  const { role } = request.body || {};
  if (!['Tourist', 'Hotel', 'Business', 'Government'].includes(role)) return response.status(400).json({ message: 'Name, email and a valid role are required.' });
  return next();
}

export function validateTripPlan(request, response, next) {
  const { days } = request.body || {};
  if (!Number.isInteger(Number(days)) || Number(days) < 1 || Number(days) > 5) return response.status(400).json({ message: 'Destination and a trip length from 1 to 5 days are required.' });
  return next();
}
