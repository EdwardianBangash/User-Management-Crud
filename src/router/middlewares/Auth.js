export default function auth({ next, router }) {
    if (this.$store.getters.user === null) {
      return router.push('/');
    }

return next();
}