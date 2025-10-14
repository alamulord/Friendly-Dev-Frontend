import {
  type RouteConfig,
  index,
  route,
  layout,
} from '@react-router/dev/routes';

export default [
  layout('./routes/Layout/home.tsx', [index('routes/home/index.tsx')]),
  layout('./routes/Layout/main.tsx', [
    route('contact', './routes/contact/index.tsx'),
    route('blog', './routes/blog/index.tsx'),
    route('blog/:slug', './routes/blog/details.tsx'),
    route('projects', './routes/project/index.tsx'),
    route('projects/:documentId', './routes/project/CardInfo.tsx'),
    route('about', './routes/about/index.tsx'),
    route('*', './routes/error/error.tsx'),
  ]),
] satisfies RouteConfig;
