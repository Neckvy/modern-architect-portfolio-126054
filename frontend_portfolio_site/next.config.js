module.exports = {
  // PUBLIC_INTERFACE
  /**
   * Next.js configuration for static export compatibility.
   * This disables Next.js image optimization, which is not supported when using output: 'export'.
   * See: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#image-optimization
   */
  images: {
    unoptimized: true,
  },
};
