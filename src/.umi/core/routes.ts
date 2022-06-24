// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/apple/Desktop/github/h5-visible-tool/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/LoadingCp';

export function getRoutes() {
  const routes = [
  {
    "exact": false,
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__index' */'@/layouts/index'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'/Users/apple/Desktop/github/h5-visible-tool/src/pages/home'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/editor",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor' */'/Users/apple/Desktop/github/h5-visible-tool/src/pages/editor'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/ide",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ide' */'/Users/apple/Desktop/github/h5-visible-tool/src/pages/ide'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/help",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__help' */'/Users/apple/Desktop/github/h5-visible-tool/src/pages/help'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login' */'/Users/apple/Desktop/github/h5-visible-tool/src/pages/login'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/mobileTip",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__mobileTip' */'/Users/apple/Desktop/github/h5-visible-tool/src/pages/mobileTip'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/preview",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__preview' */'/Users/apple/Desktop/github/h5-visible-tool/src/pages/editor/preview'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
