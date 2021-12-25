module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0f562fc9a5f826273f12c4b7d130aaa6'),
  },
});
