export const recommendations = [
  { id: 'amber-fort', name: 'Amber Fort', type: 'Heritage', time: '8:30 AM', crowd: 'Low crowd', cost: '₹500', rating: '4.8', note: 'Visit before the peak tour-bus window for a calmer experience.', icon: '🏰' },
  { id: 'jawahar-circle', name: 'Jawahar Circle', type: 'Local experience', time: '5:00 PM', crowd: 'Comfortable', cost: 'Free', rating: '4.5', note: 'A relaxed evening alternative near food and craft stops.', icon: '🌳' },
  { id: 'nahargarh-fort', name: 'Nahargarh Fort', type: 'Viewpoint', time: '4:30 PM', crowd: 'Moderate crowd', cost: '₹200', rating: '4.7', note: 'Best timed for sunset; leave early to avoid the exit rush.', icon: '🌅' },
];

export const insights = {
  government: {
    role: 'Government',
    metrics: [{ label: 'Active visitors', value: '12,480', change: 'Across monitored zones' }, { label: 'High-crowd zones', value: '2', change: 'Action recommended', trend: 'down' }, { label: 'Local spend signal', value: '₹8.4L', change: 'Today so far' }],
    crowdAlert: { level: 'Amber', title: 'Crowd alert', message: 'City Palace approach is nearing comfortable capacity.', detail: 'Promote the nearby museum circuit and stagger entry messaging for the next 90 minutes.' },
    flow: [{ zone: 'City Palace', visitors: 3420, status: 'Busy' }, { zone: 'Amber Fort', visitors: 2860, status: 'Comfortable' }, { zone: 'Bapu Bazaar', visitors: 1940, status: 'Comfortable' }],
    revenue: [{ category: 'Hotels', share: 42, value: '₹3.5L' }, { category: 'Food & dining', share: 31, value: '₹2.6L' }, { category: 'Experiences', share: 17, value: '₹1.4L' }, { category: 'Transport', share: 10, value: '₹0.9L' }],
    demand: { periods: { '7 days': [54, 62, 58, 72, 82, 94, 86], '30 days': [44, 56, 63, 71, 78, 88, 91] }, labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  },
  hotel: {
    role: 'Hotel',
    metrics: [{ label: 'Current occupancy', value: '68%', change: '8% this week' }, { label: 'Forecast demand', value: '86%', change: 'For festival weekend' }, { label: 'Open room nights', value: '42', change: 'Revenue opportunity', trend: 'down' }],
    occupancy: [{ day: 'Mon', value: 58 }, { day: 'Tue', value: 61 }, { day: 'Wed', value: 65 }, { day: 'Thu', value: 68 }, { day: 'Fri', value: 76 }, { day: 'Sat', value: 89 }, { day: 'Sun', value: 82 }],
    demandSignals: [{ signal: 'Cultural festival', status: 'High', timing: '12–15 Sep', detail: 'Local visitor interest is increasing package searches.' }, { signal: 'Rail arrivals', status: 'Rising', timing: 'This weekend', detail: 'Inbound capacity suggests higher short-stay demand.' }, { signal: 'Nearby hotel availability', status: 'Low', timing: 'Next 4 days', detail: 'Competitors are nearing full occupancy.' }],
    packages: [{ name: 'Heritage weekend', detail: 'Two nights, breakfast and guided city walk', price: '₹8,900' }, { name: 'Slow Jaipur stay', detail: 'Three nights with a local dining experience', price: '₹12,400' }],
  },
  business: {
    role: 'Business',
    metrics: [{ label: 'Tourists in reach', value: '1,286', change: 'Near your area today' }, { label: 'Offer views', value: '348', change: '18% this week' }, { label: 'Potential revenue', value: '₹18,600', change: 'This weekend' }],
    reach: [{ label: 'Heritage-trail visitors', value: 72 }, { label: 'Evening arrivals', value: 58 }, { label: 'Repeat visitors', value: 34 }],
    opportunities: [{ title: 'Evening snack experience', audience: 'Heritage-trail visitors', estimate: '₹8,400' }, { title: 'Craft workshop bundle', audience: 'Culture-focused travellers', estimate: '₹6,200' }],
  },
};
