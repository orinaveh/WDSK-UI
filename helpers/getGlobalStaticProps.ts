export const getStaticProps = () => {
  return {
    props: {
      email: process.env.EMAIL ?? null
    },
    revalidate: 10 * 60
  };
};
