export const roleAuthorization = (rolePermissions) => {
  return (req, res, next) => {
    const userRole = req.userRole;
    const authorized = rolePermissions[userRole];
    if (!authorized) {
      return res.status(403).json({
        message:
          "Vous n'avez pas les autorisations nécessaires pour accéder à cette ressource",
      });
    }
    next();
  };
};
