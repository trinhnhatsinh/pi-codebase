import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

export const siteConfig = {
  appName: '19team.com',
  title: 'Thiết kế sáng tạo, nâng cao thương hiệu',
  description:
    'Chúng tôi cung cấp dịch vụ thiết kế website chuyên nghiệp và tối ưu SEO, giúp doanh nghiệp của bạn tiếp cận nhiều khách hàng hơn. Liên hệ ngay để được tư vấn miễn phí!',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://19team.com',
  image: "https://images.prismic.io/xpixel/ZxSSjoF3NbkBXveS_banner-19team.com.png?auto=format,compress"
};

export const animationOpacityBottomToTop = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const animationOpacityLeftToRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const animationOpacityRightToLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const animationBottomToTop = {
  hidden: { y: 50 },
  visible: { y: 0 },
};

export const animationOpacityZoom = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export const animationOpacity = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const createClient = (config = {}) => {
  const client = prismic.createClient('xpixel', {
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
        : { next: { revalidate: 5 } },
    accessToken:
      'MC5aeE5nT0JJQUFCOEFoX3Jy.cn0eIGnvv73vv73vv701Z3Tvv73vv71I77-9bu-_vWHvv73vv71XM--_vWTvv71bGu-_ve-_ve-_ve-_vW8',
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};
