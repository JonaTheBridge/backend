function unauthorizedRole(res) {
  res.status(401);
  res.json('Unauthorized role');
}

function middleware(req, res, next) {
  const isAdmin = req.user?.role === 'admin';

  if (!isAdmin) {
    return unauthorizedRole(res);
  }

  return next();
}

export default middleware;
