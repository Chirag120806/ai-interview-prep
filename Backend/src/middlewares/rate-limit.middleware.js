function rateLimit({ windowMs, max, message }) {
    const requests = new Map();

    return (req, res, next) => {
        const key = req.user?.id || req.ip;
        const now = Date.now();
        const recentRequests = (requests.get(key) || []).filter((timestamp) => now - timestamp < windowMs);

        if (recentRequests.length >= max) {
            return res.status(429).json({ message });
        }

        recentRequests.push(now);
        requests.set(key, recentRequests);
        next();
    };
}

module.exports = { rateLimit };
