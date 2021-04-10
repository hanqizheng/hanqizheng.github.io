import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? dynamic({
          loader: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index.js'),
          loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
            .default,
        })
      : require('../../layouts/index.js').default,
    routes: [
      {
        path: '/achievement/achievementManage/components/AdminModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__achievementManage__components__AdminModal" */ '../achievement/achievementManage/components/AdminModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/achievementManage/components/AdminModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/achievementManage/components/CreateForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__achievementManage__components__CreateForm" */ '../achievement/achievementManage/components/CreateForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/achievementManage/components/CreateForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/achievementManage/components/DeptTable',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__achievementManage__components__DeptTable" */ '../achievement/achievementManage/components/DeptTable.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/achievementManage/components/DeptTable.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/achievementManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__achievementManage__index" */ '../achievement/achievementManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/achievementManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__index" */ '../achievement/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/components/BaseComponents',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__components__BaseComponents" */ '../achievement/myAchievement/achievementWait/components/modal/components/BaseComponents.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/components/BaseComponents.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/components/BchartsPersonNew',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__components__BchartsPersonNew" */ '../achievement/myAchievement/achievementWait/components/modal/components/BchartsPersonNew.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/components/BchartsPersonNew.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/components/DepartmentView',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__components__DepartmentView" */ '../achievement/myAchievement/achievementWait/components/modal/components/DepartmentView.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/components/DepartmentView.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/components/PersonCard',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__components__PersonCard" */ '../achievement/myAchievement/achievementWait/components/modal/components/PersonCard.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/components/PersonCard.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/components/PersonList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__components__PersonList" */ '../achievement/myAchievement/achievementWait/components/modal/components/PersonList.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/components/PersonList.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/components/ResultAdjustRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__components__ResultAdjustRecord" */ '../achievement/myAchievement/achievementWait/components/modal/components/ResultAdjustRecord.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/components/ResultAdjustRecord.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/components/StatusCard',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__components__StatusCard" */ '../achievement/myAchievement/achievementWait/components/modal/components/StatusCard.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/components/StatusCard.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/components/TabView',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__components__TabView" */ '../achievement/myAchievement/achievementWait/components/modal/components/TabView.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/components/TabView.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/components/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__components__injector" */ '../achievement/myAchievement/achievementWait/components/modal/components/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/components/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__components__utils" */ '../achievement/myAchievement/achievementWait/components/modal/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/achievementWait/components/modal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__index" */ '../achievement/myAchievement/achievementWait/components/modal/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/modal/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__modal__injector" */ '../achievement/myAchievement/achievementWait/components/modal/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/modal/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/achievementWait/components/notificationHeader',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__components__notificationHeader__index" */ '../achievement/myAchievement/achievementWait/components/notificationHeader/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/components/notificationHeader/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/achievementWait',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__index" */ '../achievement/myAchievement/achievementWait/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/achievementWait/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__injector" */ '../achievement/myAchievement/achievementWait/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/achievementWait/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__achievementWait__utils" */ '../achievement/myAchievement/achievementWait/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/achievementWait/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/components/LevelSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__components__LevelSelect" */ '../achievement/myAchievement/components/LevelSelect.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/components/LevelSelect.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/components/StatusSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__components__StatusSelect" */ '../achievement/myAchievement/components/StatusSelect.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/components/StatusSelect.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__index" */ '../achievement/myAchievement/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/personAchievement/HistoryDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__personAchievement__HistoryDetail__index" */ '../achievement/myAchievement/personAchievement/HistoryDetail/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/personAchievement/HistoryDetail/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/personAchievement/Historylist',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__personAchievement__Historylist__index" */ '../achievement/myAchievement/personAchievement/Historylist/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/personAchievement/Historylist/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/personAchievement/components/HorizontalTimeline',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__personAchievement__components__HorizontalTimeline" */ '../achievement/myAchievement/personAchievement/components/HorizontalTimeline.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/personAchievement/components/HorizontalTimeline.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/personAchievement',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__personAchievement__index" */ '../achievement/myAchievement/personAchievement/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/personAchievement/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/personAchievement/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__personAchievement__injector" */ '../achievement/myAchievement/personAchievement/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/personAchievement/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/teamAchievement/components/drawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__teamAchievement__components__drawer" */ '../achievement/myAchievement/teamAchievement/components/drawer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/teamAchievement/components/drawer.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/teamAchievement/componentsActivity/deliverModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__teamAchievement__componentsActivity__deliverModal" */ '../achievement/myAchievement/teamAchievement/componentsActivity/deliverModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/teamAchievement/componentsActivity/deliverModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/teamAchievement/componentsActivity/drawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__teamAchievement__componentsActivity__drawer" */ '../achievement/myAchievement/teamAchievement/componentsActivity/drawer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/teamAchievement/componentsActivity/drawer.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/achievement/myAchievement/teamAchievement/componentsActivity/stopModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__teamAchievement__componentsActivity__stopModal" */ '../achievement/myAchievement/teamAchievement/componentsActivity/stopModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/teamAchievement/componentsActivity/stopModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievement/myAchievement/teamAchievement',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievement__myAchievement__teamAchievement__index" */ '../achievement/myAchievement/teamAchievement/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievement/myAchievement/teamAchievement/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievementActDetail/TYPES',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievementActDetail__TYPES" */ '../achievementActDetail/TYPES.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievementActDetail/TYPES.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievementActDetail/components/BatchTransfer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievementActDetail__components__BatchTransfer" */ '../achievementActDetail/components/BatchTransfer.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievementActDetail/components/BatchTransfer.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievementActDetail/components/SkipLink',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievementActDetail__components__SkipLink" */ '../achievementActDetail/components/SkipLink.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievementActDetail/components/SkipLink.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievementActDetail/contants',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievementActDetail__contants" */ '../achievementActDetail/contants.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievementActDetail/contants.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievementActDetail/header',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievementActDetail__header__index" */ '../achievementActDetail/header/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievementActDetail/header/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievementActDetail/hooks',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievementActDetail__hooks" */ '../achievementActDetail/hooks.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievementActDetail/hooks.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/achievementActDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__achievementActDetail__index" */ '../achievementActDetail/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../achievementActDetail/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/biReport/*',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__biReport__*" */ '../biReport/*.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../biReport/*.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/biReport',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__biReport__index" */ '../biReport/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../biReport/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/contract/components/printModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__contract__components__printModal__index" */ '../contract/components/printModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../contract/components/printModal/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/contract',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__contract__index" */ '../contract/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../contract/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/contract/:contractType/components/banner',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__contract__$contractType__components__banner__index" */ '../contract/$contractType/components/banner/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../contract/$contractType/components/banner/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/contract/:contractType/components/contractNav',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__contract__$contractType__components__contractNav__index" */ '../contract/$contractType/components/contractNav/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../contract/$contractType/components/contractNav/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/contract/:contractType/components/contractTable',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__contract__$contractType__components__contractTable__index" */ '../contract/$contractType/components/contractTable/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../contract/$contractType/components/contractTable/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/contract/:contractType/components/filterBox',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__contract__$contractType__components__filterBox__index" */ '../contract/$contractType/components/filterBox/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../contract/$contractType/components/filterBox/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/dashboard/components/AssignedFlow',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__dashboard__components__AssignedFlow" */ '../dashboard/components/AssignedFlow.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../dashboard/components/AssignedFlow.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/dashboard/components/FlowTemplate',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__dashboard__components__FlowTemplate" */ '../dashboard/components/FlowTemplate.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../dashboard/components/FlowTemplate.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/dashboard/components/IncomingTasks',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__dashboard__components__IncomingTasks" */ '../dashboard/components/IncomingTasks.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../dashboard/components/IncomingTasks.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/dashboard/components/InitiatedFlow',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__dashboard__components__InitiatedFlow" */ '../dashboard/components/InitiatedFlow.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../dashboard/components/InitiatedFlow.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/dashboard/components/SchedulingList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__dashboard__components__SchedulingList" */ '../dashboard/components/SchedulingList.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../dashboard/components/SchedulingList.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/dashboard/components/UserInfo',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__dashboard__components__UserInfo" */ '../dashboard/components/UserInfo.tsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../dashboard/components/UserInfo.tsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/dashboard/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__dashboard__components__utils" */ '../dashboard/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../dashboard/components/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/dashboard',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__dashboard__index" */ '../dashboard/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../dashboard/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/dashboard/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__dashboard__services" */ '../dashboard/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../dashboard/services.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/departureModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__departureModal__index" */ '../departure/components/departureModal/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/departureModal/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/departureSubMenu',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__departureSubMenu__index" */ '../departure/components/departureSubMenu/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/departureSubMenu/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/editComment',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__editComment__index" */ '../departure/components/editComment/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/editComment/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/filterBox',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__filterBox__index" */ '../departure/components/filterBox/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/filterBox/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/holidayShow',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__holidayShow" */ '../departure/components/holidayShow.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/holidayShow.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__index" */ '../departure/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/leavePrintModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__leavePrintModal__index" */ '../departure/components/leavePrintModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/leavePrintModal/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/startDeparture',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__startDeparture__index" */ '../departure/components/startDeparture/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/startDeparture/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/tabBar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__tabBar__index" */ '../departure/components/tabBar/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/tabBar/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/tabNav',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__tabNav__index" */ '../departure/components/tabNav/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/tabNav/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/tableTab',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__tableTab__index" */ '../departure/components/tableTab/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/tableTab/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure/components/triggerTime',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__components__triggerTime__index" */ '../departure/components/triggerTime/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/components/triggerTime/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/departure',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__departure__index" */ '../departure/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../departure/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/fromExternal/loginRedirect/:toUrl',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__fromExternal__loginRedirect__$toUrl__index" */ '../fromExternal/loginRedirect/$toUrl/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../fromExternal/loginRedirect/$toUrl/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/fromExternal/:toUrl',
        exact: false,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__fromExternal__$toUrl___layout" */ '../fromExternal/$toUrl/_layout.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../fromExternal/$toUrl/_layout.js').default,
        routes: [
          {
            path: '/fromExternal/:toUrl',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__fromExternal__$toUrl___layout" */ '../fromExternal/$toUrl/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../fromExternal/$toUrl/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            component: () =>
              React.createElement(
                require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
        ],
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/account/component/AccountContent',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__account__component__AccountContent__index" */ '../holiday/account/component/AccountContent/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/account/component/AccountContent/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/account/component/AccountDrawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__account__component__AccountDrawer__index" */ '../holiday/account/component/AccountDrawer/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/account/component/AccountDrawer/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/account/component/ExportingModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__account__component__ExportingModal__index" */ '../holiday/account/component/ExportingModal/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/account/component/ExportingModal/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/account',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__account__index" */ '../holiday/account/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/account/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/common',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__common" */ '../holiday/common.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/common.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/components/Duration',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__components__Duration__index" */ '../holiday/components/Duration/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/components/Duration/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/components/ExportingModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__components__ExportingModal__index" */ '../holiday/components/ExportingModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/components/ExportingModal/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/components/Importing/Modal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__components__Importing__Modal" */ '../holiday/components/Importing/Modal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/components/Importing/Modal.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/components/Importing/Table',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__components__Importing__Table" */ '../holiday/components/Importing/Table.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/components/Importing/Table.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/components/Importing',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__components__Importing__index" */ '../holiday/components/Importing/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/components/Importing/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/components/Layout',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__components__Layout__index" */ '../holiday/components/Layout/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/components/Layout/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/components/MonthPicker',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__components__MonthPicker__index" */ '../holiday/components/MonthPicker/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/components/MonthPicker/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/components/newMonthPicker',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__components__newMonthPicker__index" */ '../holiday/components/newMonthPicker/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/components/newMonthPicker/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/helpers',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__helpers" */ '../holiday/helpers.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/helpers.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__index" */ '../holiday/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/askforleaveRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__askforleaveRecord__index" */ '../holiday/record/askforleaveRecord/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/askforleaveRecord/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceMonthly/components/CustomMonthPicker',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceMonthly__components__CustomMonthPicker__index" */ '../holiday/record/attendanceMonthly/components/CustomMonthPicker/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceMonthly/components/CustomMonthPicker/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceMonthly/components/CustomizeColumns',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceMonthly__components__CustomizeColumns" */ '../holiday/record/attendanceMonthly/components/CustomizeColumns.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceMonthly/components/CustomizeColumns.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceMonthly/components/DragTable',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceMonthly__components__DragTable__index" */ '../holiday/record/attendanceMonthly/components/DragTable/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceMonthly/components/DragTable/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceMonthly/components/OpenEditModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceMonthly__components__OpenEditModal" */ '../holiday/record/attendanceMonthly/components/OpenEditModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceMonthly/components/OpenEditModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceMonthly',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceMonthly__index" */ '../holiday/record/attendanceMonthly/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceMonthly/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceRecord/DetailModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceRecord__DetailModal" */ '../holiday/record/attendanceRecord/DetailModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceRecord/DetailModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceRecord/RecalcingModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceRecord__RecalcingModal" */ '../holiday/record/attendanceRecord/RecalcingModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceRecord/RecalcingModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceRecord/components/AttendanceStatus',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceRecord__components__AttendanceStatus__index" */ '../holiday/record/attendanceRecord/components/AttendanceStatus/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceRecord/components/AttendanceStatus/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceRecord/components/BaseInfo',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceRecord__components__BaseInfo__index" */ '../holiday/record/attendanceRecord/components/BaseInfo/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceRecord/components/BaseInfo/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceRecord/components/PreviewImg',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceRecord__components__PreviewImg__index" */ '../holiday/record/attendanceRecord/components/PreviewImg/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceRecord/components/PreviewImg/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceRecord/components/PunchDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceRecord__components__PunchDetail__index" */ '../holiday/record/attendanceRecord/components/PunchDetail/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceRecord/components/PunchDetail/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceRecord/hooks',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceRecord__hooks" */ '../holiday/record/attendanceRecord/hooks.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceRecord/hooks.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceRecord__index" */ '../holiday/record/attendanceRecord/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceRecord/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/attendanceRecord/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__attendanceRecord__services" */ '../holiday/record/attendanceRecord/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/attendanceRecord/services.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/businessRecord/BusinessConfig',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__businessRecord__BusinessConfig" */ '../holiday/record/businessRecord/BusinessConfig.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/businessRecord/BusinessConfig.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/businessRecord/RecordPage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__businessRecord__RecordPage" */ '../holiday/record/businessRecord/RecordPage.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/businessRecord/RecordPage.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/businessRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__businessRecord__index" */ '../holiday/record/businessRecord/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/businessRecord/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__index" */ '../holiday/record/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/outRecord/BusinessConfig',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__outRecord__BusinessConfig" */ '../holiday/record/outRecord/BusinessConfig.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/outRecord/BusinessConfig.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/outRecord/components/Modal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__outRecord__components__Modal" */ '../holiday/record/outRecord/components/Modal.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/outRecord/components/Modal.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/outRecord/components/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__outRecord__components__injector" */ '../holiday/record/outRecord/components/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/outRecord/components/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/outRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__outRecord__index" */ '../holiday/record/outRecord/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/outRecord/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/overtimeRecord/components/OpenEditModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__overtimeRecord__components__OpenEditModal" */ '../holiday/record/overtimeRecord/components/OpenEditModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/overtimeRecord/components/OpenEditModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/overtimeRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__overtimeRecord__index" */ '../holiday/record/overtimeRecord/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/overtimeRecord/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/patchPunch/PatchConfig',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__patchPunch__PatchConfig" */ '../holiday/record/patchPunch/PatchConfig.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/patchPunch/PatchConfig.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/record/patchPunch',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__record__patchPunch__index" */ '../holiday/record/patchPunch/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/record/patchPunch/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__index" */ '../holiday/shiftMgt/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement/components/LimitItem',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__components__LimitItem__index" */ '../holiday/shiftMgt/shiftManagement/components/LimitItem/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/components/LimitItem/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement/components/LimitList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__components__LimitList__index" */ '../holiday/shiftMgt/shiftManagement/components/LimitList/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/components/LimitList/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement/components/LimitRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__components__LimitRecord__index" */ '../holiday/shiftMgt/shiftManagement/components/LimitRecord/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/components/LimitRecord/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement/components/leaderModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__components__leaderModal__index" */ '../holiday/shiftMgt/shiftManagement/components/leaderModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/components/leaderModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement/components/personAngle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__components__personAngle__index" */ '../holiday/shiftMgt/shiftManagement/components/personAngle/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/components/personAngle/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement/components/scheduleDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__components__scheduleDetail__index" */ '../holiday/shiftMgt/shiftManagement/components/scheduleDetail/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/components/scheduleDetail/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement/components/scheduleEdit',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__components__scheduleEdit__index" */ '../holiday/shiftMgt/shiftManagement/components/scheduleEdit/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/components/scheduleEdit/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement/components/shiftAngle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__components__shiftAngle__index" */ '../holiday/shiftMgt/shiftManagement/components/shiftAngle/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/components/shiftAngle/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement/components/warnModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__components__warnModal__index" */ '../holiday/shiftMgt/shiftManagement/components/warnModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/components/warnModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__index" */ '../holiday/shiftMgt/shiftManagement/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftManagement/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftManagement__services" */ '../holiday/shiftMgt/shiftManagement/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftManagement/services.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftRecord/components/addRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftRecord__components__addRecord__index" */ '../holiday/shiftMgt/shiftRecord/components/addRecord/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftRecord/components/addRecord/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftRecord/components/revokeModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftRecord__components__revokeModal__index" */ '../holiday/shiftMgt/shiftRecord/components/revokeModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftRecord/components/revokeModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftRecord__index" */ '../holiday/shiftMgt/shiftRecord/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftRecord/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/holiday/shiftMgt/shiftRecord/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__holiday__shiftMgt__shiftRecord__services" */ '../holiday/shiftMgt/shiftRecord/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../holiday/shiftMgt/shiftRecord/services.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__index" */ '../index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/myAchievement/achievementWait',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__myAchievement__achievementWait__index" */ '../myAchievement/achievementWait/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../myAchievement/achievementWait/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/noDeparture/header',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__noDeparture__header__index" */ '../noDeparture/header/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../noDeparture/header/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/noDeparture',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__noDeparture__index" */ '../noDeparture/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../noDeparture/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/noSalary',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__noSalary__index" */ '../noSalary/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../noSalary/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/notification/components/notificationHeader',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__notification__components__notificationHeader__index" */ '../notification/components/notificationHeader/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../notification/components/notificationHeader/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/notification',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__notification__index" */ '../notification/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../notification/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/notification/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__notification__utils" */ '../notification/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../notification/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/components/EmptyTips',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__components__EmptyTips" */ '../onboarding/components/EmptyTips.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/components/EmptyTips.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/components/Layout',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__components__Layout" */ '../onboarding/components/Layout.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/components/Layout.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/components/dataTable',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__components__dataTable__index" */ '../onboarding/components/dataTable/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/components/dataTable/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__index" */ '../onboarding/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/components/CancleEmployeeTable',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__components__CancleEmployeeTable__index" */ '../onboarding/manage/components/CancleEmployeeTable/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/components/CancleEmployeeTable/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/components/EmployeeTable',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__components__EmployeeTable__index" */ '../onboarding/manage/components/EmployeeTable/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/components/EmployeeTable/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/components/Empty',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__components__Empty__index" */ '../onboarding/manage/components/Empty/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/components/Empty/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/components/EsignCreateModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__components__EsignCreateModal__index" */ '../onboarding/manage/components/EsignCreateModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/components/EsignCreateModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/components/EsignViewModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__components__EsignViewModal__index" */ '../onboarding/manage/components/EsignViewModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/components/EsignViewModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/components/ExportButton',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__components__ExportButton__index" */ '../onboarding/manage/components/ExportButton/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/components/ExportButton/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/components/FilterBox',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__components__FilterBox__index" */ '../onboarding/manage/components/FilterBox/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/components/FilterBox/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/components/FormEle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__components__FormEle__index" */ '../onboarding/manage/components/FormEle/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/components/FormEle/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/components/MenuList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__components__MenuList__index" */ '../onboarding/manage/components/MenuList/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/components/MenuList/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__index" */ '../onboarding/manage/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/BaseInfo',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__BaseInfo" */ '../onboarding/manage/newStaffDetail/components/BaseInfo.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/BaseInfo.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/CancelOnboard',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__CancelOnboard__index" */ '../onboarding/manage/newStaffDetail/components/CancelOnboard/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/CancelOnboard/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/Container',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__Container" */ '../onboarding/manage/newStaffDetail/components/Container.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/Container.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/onboarding/manage/newStaffDetail/components/MsgGather/Attachment',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__MsgGather__Attachment" */ '../onboarding/manage/newStaffDetail/components/MsgGather/Attachment.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/MsgGather/Attachment.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/onboarding/manage/newStaffDetail/components/MsgGather/PreviewFile',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__MsgGather__PreviewFile" */ '../onboarding/manage/newStaffDetail/components/MsgGather/PreviewFile.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/MsgGather/PreviewFile.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/MsgGather',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__MsgGather__index" */ '../onboarding/manage/newStaffDetail/components/MsgGather/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/MsgGather/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/MsgGather/svg',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__MsgGather__svg" */ '../onboarding/manage/newStaffDetail/components/MsgGather/svg.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/MsgGather/svg.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/Notification',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__Notification" */ '../onboarding/manage/newStaffDetail/components/Notification.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/Notification.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/onboarding/manage/newStaffDetail/components/OnBoardingDateModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__OnBoardingDateModal__index" */ '../onboarding/manage/newStaffDetail/components/OnBoardingDateModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/OnBoardingDateModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/StaffCard',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__StaffCard" */ '../onboarding/manage/newStaffDetail/components/StaffCard.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/StaffCard.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/Task',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__Task" */ '../onboarding/manage/newStaffDetail/components/Task.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/Task.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/editTask',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__editTask__index" */ '../onboarding/manage/newStaffDetail/components/editTask/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/editTask/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/onboarding/manage/newStaffDetail/components/formComponent/FormEle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__formComponent__FormEle" */ '../onboarding/manage/newStaffDetail/components/formComponent/FormEle.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/formComponent/FormEle.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/onboarding/manage/newStaffDetail/components/formComponent/FormEleShow',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__formComponent__FormEleShow" */ '../onboarding/manage/newStaffDetail/components/formComponent/FormEleShow.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/formComponent/FormEleShow.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/formComponent',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__formComponent__index" */ '../onboarding/manage/newStaffDetail/components/formComponent/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/formComponent/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/onboarding/manage/newStaffDetail/components/headerInfo/components/PrintModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__headerInfo__components__PrintModal__index" */ '../onboarding/manage/newStaffDetail/components/headerInfo/components/PrintModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/headerInfo/components/PrintModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/headerInfo',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__headerInfo__index" */ '../onboarding/manage/newStaffDetail/components/headerInfo/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/headerInfo/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/components/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__components__injector" */ '../onboarding/manage/newStaffDetail/components/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/components/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__index" */ '../onboarding/manage/newStaffDetail/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/newStaffDetail/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__newStaffDetail__injector" */ '../onboarding/manage/newStaffDetail/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/newStaffDetail/injector.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/preService',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__preService" */ '../onboarding/manage/preService.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/preService.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/startFlow',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__startFlow__index" */ '../onboarding/manage/startFlow/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/startFlow/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/manage/startFlow/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__manage__startFlow__injector" */ '../onboarding/manage/startFlow/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/manage/startFlow/injector.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/tasks/components/filterBox',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__tasks__components__filterBox__index" */ '../onboarding/tasks/components/filterBox/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/tasks/components/filterBox/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/tasks/components/taskEmployeeTable',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__tasks__components__taskEmployeeTable__index" */ '../onboarding/tasks/components/taskEmployeeTable/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/tasks/components/taskEmployeeTable/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/onboarding/tasks',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__onboarding__tasks__index" */ '../onboarding/tasks/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../onboarding/tasks/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph/components/ContextMenu',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__components__ContextMenu__index" */ '../organization/graph/components/ContextMenu/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/components/ContextMenu/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph/components/DateTool',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__components__DateTool__index" */ '../organization/graph/components/DateTool/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/components/DateTool/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph/components/GraphBreadcrumb',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__components__GraphBreadcrumb__index" */ '../organization/graph/components/GraphBreadcrumb/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/components/GraphBreadcrumb/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph/components/GraphLevel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__components__GraphLevel__index" */ '../organization/graph/components/GraphLevel/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/components/GraphLevel/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph/components/NoDepartment',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__components__NoDepartment__index" */ '../organization/graph/components/NoDepartment/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/components/NoDepartment/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph/components/UserDefined',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__components__UserDefined__index" */ '../organization/graph/components/UserDefined/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/components/UserDefined/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph/components/ZoomTool',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__components__ZoomTool__index" */ '../organization/graph/components/ZoomTool/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/components/ZoomTool/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph/graphTool',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__graphTool" */ '../organization/graph/graphTool.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/graphTool.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__index" */ '../organization/graph/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph/keyMap',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__keyMap" */ '../organization/graph/keyMap.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/keyMap.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/graph/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__graph__utils" */ '../organization/graph/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/graph/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__index" */ '../organization/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/UpdateModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__UpdateModal" */ '../organization/jobPosition/components/UpdateModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/UpdateModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/drawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__drawer" */ '../organization/jobPosition/components/drawer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/drawer.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/typeForm/DateForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__typeForm__DateForm" */ '../organization/jobPosition/components/typeForm/DateForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/typeForm/DateForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/typeForm/DateForm0',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__typeForm__DateForm0" */ '../organization/jobPosition/components/typeForm/DateForm0.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/typeForm/DateForm0.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/typeForm/DepartSelectTree',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__typeForm__DepartSelectTree" */ '../organization/jobPosition/components/typeForm/DepartSelectTree.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/typeForm/DepartSelectTree.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/typeForm/InputForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__typeForm__InputForm" */ '../organization/jobPosition/components/typeForm/InputForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/typeForm/InputForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/typeForm/JobSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__typeForm__JobSelect" */ '../organization/jobPosition/components/typeForm/JobSelect.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/typeForm/JobSelect.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/typeForm/PositionSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__typeForm__PositionSelect" */ '../organization/jobPosition/components/typeForm/PositionSelect.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/typeForm/PositionSelect.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/typeForm/SelectForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__typeForm__SelectForm" */ '../organization/jobPosition/components/typeForm/SelectForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/typeForm/SelectForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/typeForm/TextAreaForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__typeForm__TextAreaForm" */ '../organization/jobPosition/components/typeForm/TextAreaForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/typeForm/TextAreaForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition/components/typeForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__components__typeForm__index" */ '../organization/jobPosition/components/typeForm/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/components/typeForm/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/jobPosition',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__jobPosition__index" */ '../organization/jobPosition/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/jobPosition/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/position/CollectionCreateForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__position__CollectionCreateForm" */ '../organization/position/CollectionCreateForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/position/CollectionCreateForm.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/position',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__position__index" */ '../organization/position/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/position/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/recruitment',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__recruitment__index" */ '../organization/recruitment/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/recruitment/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/report/components/ContextMenu',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__report__components__ContextMenu__index" */ '../organization/report/components/ContextMenu/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/report/components/ContextMenu/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/report/components/GraphLevel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__report__components__GraphLevel__index" */ '../organization/report/components/GraphLevel/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/report/components/GraphLevel/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/report/components/MenuList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__report__components__MenuList__index" */ '../organization/report/components/MenuList/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/report/components/MenuList/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/report/components/NoDepartment',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__report__components__NoDepartment__index" */ '../organization/report/components/NoDepartment/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/report/components/NoDepartment/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/report/components/UserDefined',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__report__components__UserDefined__index" */ '../organization/report/components/UserDefined/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/report/components/UserDefined/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/report/components/ZoomTool',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__report__components__ZoomTool__index" */ '../organization/report/components/ZoomTool/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/report/components/ZoomTool/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/report',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__report__index" */ '../organization/report/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/report/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/report/tool',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__report__tool" */ '../organization/report/tool.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/report/tool.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/report/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__report__utils" */ '../organization/report/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/report/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/organization/structure/batch/components/BatchEmployeeAdjustments/hooks',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__components__BatchEmployeeAdjustments__hooks" */ '../organization/structure/batch/components/BatchEmployeeAdjustments/hooks.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/components/BatchEmployeeAdjustments/hooks.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/organization/structure/batch/components/BatchEmployeeAdjustments',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__components__BatchEmployeeAdjustments__index" */ '../organization/structure/batch/components/BatchEmployeeAdjustments/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/components/BatchEmployeeAdjustments/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/components/Changes',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__components__Changes" */ '../organization/structure/batch/components/Changes.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/components/Changes.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/components/DepartmentSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__components__DepartmentSelect__index" */ '../organization/structure/batch/components/DepartmentSelect/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/components/DepartmentSelect/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/organization/structure/batch/components/DepartmentTree/DetailDrawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__components__DepartmentTree__DetailDrawer" */ '../organization/structure/batch/components/DepartmentTree/DetailDrawer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/components/DepartmentTree/DetailDrawer.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/organization/structure/batch/components/DepartmentTree/NodeList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__components__DepartmentTree__NodeList" */ '../organization/structure/batch/components/DepartmentTree/NodeList.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/components/DepartmentTree/NodeList.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/components/DepartmentTree',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__components__DepartmentTree__index" */ '../organization/structure/batch/components/DepartmentTree/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/components/DepartmentTree/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/components/Employees',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__components__Employees" */ '../organization/structure/batch/components/Employees.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/components/Employees.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/components/Reason',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__components__Reason" */ '../organization/structure/batch/components/Reason.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/components/Reason.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/components/TableOfChanges',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__components__TableOfChanges" */ '../organization/structure/batch/components/TableOfChanges.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/components/TableOfChanges.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/helpers/adjust',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__helpers__adjust" */ '../organization/structure/batch/helpers/adjust.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/helpers/adjust.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/helpers/departmentTree',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__helpers__departmentTree" */ '../organization/structure/batch/helpers/departmentTree.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/helpers/departmentTree.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/helpers',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__helpers__index" */ '../organization/structure/batch/helpers/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/helpers/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/helpers/recordList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__helpers__recordList" */ '../organization/structure/batch/helpers/recordList.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/helpers/recordList.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__index" */ '../organization/structure/batch/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/:step',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__$step__index" */ '../organization/structure/batch/$step/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/$step/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/batch/:step/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__batch__$step__services" */ '../organization/structure/batch/$step/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/batch/$step/services.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/components/ChangeReason',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__components__ChangeReason" */ '../organization/structure/components/ChangeReason.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/components/ChangeReason.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/components/DepartmentCard',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__components__DepartmentCard" */ '../organization/structure/components/DepartmentCard.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/components/DepartmentCard.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/components/DrawerTitle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__components__DrawerTitle" */ '../organization/structure/components/DrawerTitle.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/components/DrawerTitle.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/components/EditDepartment',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__components__EditDepartment" */ '../organization/structure/components/EditDepartment.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/components/EditDepartment.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/components/formComponent/FormEle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__components__formComponent__FormEle" */ '../organization/structure/components/formComponent/FormEle.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/components/formComponent/FormEle.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/components/formComponent/FormEleShow',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__components__formComponent__FormEleShow" */ '../organization/structure/components/formComponent/FormEleShow.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/components/formComponent/FormEleShow.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/components/formComponent',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__components__formComponent__index" */ '../organization/structure/components/formComponent/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/components/formComponent/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__components__index" */ '../organization/structure/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/components/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/components/navigation',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__components__navigation__index" */ '../organization/structure/components/navigation/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/components/navigation/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__index" */ '../organization/structure/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/list/components/Header',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__list__components__Header" */ '../organization/structure/list/components/Header.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/list/components/Header.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/list/components/Navigation',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__list__components__Navigation" */ '../organization/structure/list/components/Navigation.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/list/components/Navigation.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/list/components/StopDepartList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__list__components__StopDepartList" */ '../organization/structure/list/components/StopDepartList.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/list/components/StopDepartList.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/list/components/TableBody',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__list__components__TableBody" */ '../organization/structure/list/components/TableBody.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/list/components/TableBody.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/list/components/TreeNode',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__list__components__TreeNode" */ '../organization/structure/list/components/TreeNode.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/list/components/TreeNode.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/list/components/operate',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__list__components__operate" */ '../organization/structure/list/components/operate.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/list/components/operate.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/list',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__list__index" */ '../organization/structure/list/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/list/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/structure/list/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__structure__list__injector" */ '../organization/structure/list/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/structure/list/injector.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/organization/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__organization__utils" */ '../organization/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../organization/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/components/ReportDownloadModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__components__ReportDownloadModal__index" */ '../report/components/ReportDownloadModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/components/ReportDownloadModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/components/ReportDownloadRecordModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__components__ReportDownloadRecordModal__index" */ '../report/components/ReportDownloadRecordModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/components/ReportDownloadRecordModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/config',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__config" */ '../report/config.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/config.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/report/createReport/components/FilterBy/components/FilterByModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__FilterBy__components__FilterByModal__index" */ '../report/createReport/components/FilterBy/components/FilterByModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/FilterBy/components/FilterByModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/FilterBy',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__FilterBy__index" */ '../report/createReport/components/FilterBy/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/FilterBy/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/report/createReport/components/FormFilterByModal/components/FormDateRangePicker',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__FormFilterByModal__components__FormDateRangePicker__index" */ '../report/createReport/components/FormFilterByModal/components/FormDateRangePicker/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/FormFilterByModal/components/FormDateRangePicker/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/report/createReport/components/FormFilterByModal/components/FormNumInput',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__FormFilterByModal__components__FormNumInput__index" */ '../report/createReport/components/FormFilterByModal/components/FormNumInput/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/FormFilterByModal/components/FormNumInput/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/report/createReport/components/FormFilterByModal/components/FormSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__FormFilterByModal__components__FormSelect__index" */ '../report/createReport/components/FormFilterByModal/components/FormSelect/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/FormFilterByModal/components/FormSelect/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/FormFilterByModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__FormFilterByModal__index" */ '../report/createReport/components/FormFilterByModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/FormFilterByModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/FormFilterByModal/util',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__FormFilterByModal__util" */ '../report/createReport/components/FormFilterByModal/util.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/FormFilterByModal/util.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/ReportAuthorizeModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__ReportAuthorizeModal__index" */ '../report/createReport/components/ReportAuthorizeModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/ReportAuthorizeModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/StepFirst',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__StepFirst__index" */ '../report/createReport/components/StepFirst/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/StepFirst/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/StepSecond',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__StepSecond__index" */ '../report/createReport/components/StepSecond/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/StepSecond/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/StepThird/components/BaseMsg',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__StepThird__components__BaseMsg" */ '../report/createReport/components/StepThird/components/BaseMsg.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/StepThird/components/BaseMsg.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/StepThird/components/Content',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__StepThird__components__Content" */ '../report/createReport/components/StepThird/components/Content.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/StepThird/components/Content.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/StepThird/components/DefaultPic',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__StepThird__components__DefaultPic" */ '../report/createReport/components/StepThird/components/DefaultPic.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/StepThird/components/DefaultPic.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/StepThird',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__StepThird__index" */ '../report/createReport/components/StepThird/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/StepThird/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/TitleOfLook',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__TitleOfLook__index" */ '../report/createReport/components/TitleOfLook/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/TitleOfLook/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/TopBar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__TopBar__index" */ '../report/createReport/components/TopBar/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/TopBar/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/components/config',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__components__config" */ '../report/createReport/components/config.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/components/config.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__index" */ '../report/createReport/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/createReport/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__createReport__injector" */ '../report/createReport/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/createReport/injector.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__index" */ '../report/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/report/viewReport',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__report__viewReport__index" */ '../report/viewReport/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../report/viewReport/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/calculationPage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__index" */ '../salaryManage/calculationPage/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/calculationPage/salaryDetail/constant',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__constant" */ '../salaryManage/calculationPage/salaryDetail/constant.ts'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/constant.ts')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/calculationPage/salaryDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__index" */ '../salaryManage/calculationPage/salaryDetail/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/checkMembers/components/otherModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__checkMembers__components__otherModal__index" */ '../salaryManage/calculationPage/salaryDetail/preparation/checkMembers/components/otherModal/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/checkMembers/components/otherModal/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/checkMembers',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__checkMembers__index" */ '../salaryManage/calculationPage/salaryDetail/preparation/checkMembers/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/checkMembers/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/recordAttendanceResult',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__recordAttendanceResult__index" */ '../salaryManage/calculationPage/salaryDetail/preparation/recordAttendanceResult/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/recordAttendanceResult/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/recordIncomeTax',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__recordIncomeTax__index" */ '../salaryManage/calculationPage/salaryDetail/preparation/recordIncomeTax/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/recordIncomeTax/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/recordOtherItems',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__recordOtherItems__index" */ '../salaryManage/calculationPage/salaryDetail/preparation/recordOtherItems/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/recordOtherItems/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/recordSocialInsurance',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__recordSocialInsurance__index" */ '../salaryManage/calculationPage/salaryDetail/preparation/recordSocialInsurance/index.tsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/recordSocialInsurance/index.tsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/recordSocialInsurance/interface',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__recordSocialInsurance__interface" */ '../salaryManage/calculationPage/salaryDetail/preparation/recordSocialInsurance/interface.ts'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/recordSocialInsurance/interface.ts')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/recordSocialInsurance/server',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__recordSocialInsurance__server" */ '../salaryManage/calculationPage/salaryDetail/preparation/recordSocialInsurance/server.ts'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/recordSocialInsurance/server.ts')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/recordSpecialAddition',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__recordSpecialAddition__index" */ '../salaryManage/calculationPage/salaryDetail/preparation/recordSpecialAddition/index.tsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/recordSpecialAddition/index.tsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/recordSpecialAddition/interface',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__recordSpecialAddition__interface" */ '../salaryManage/calculationPage/salaryDetail/preparation/recordSpecialAddition/interface.ts'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/recordSpecialAddition/interface.ts')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/recordSpecialAddition/server',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__recordSpecialAddition__server" */ '../salaryManage/calculationPage/salaryDetail/preparation/recordSpecialAddition/server.ts'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/recordSpecialAddition/server.ts')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/salaryDataEdit',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__salaryDataEdit__index" */ '../salaryManage/calculationPage/salaryDetail/preparation/salaryDataEdit/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/salaryDataEdit/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/calculationPage/salaryDetail/preparation/salaryDataImport',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__salaryDetail__preparation__salaryDataImport__index" */ '../salaryManage/calculationPage/salaryDetail/preparation/salaryDataImport/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/salaryDetail/preparation/salaryDataImport/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/calculationPage/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__calculationPage__utils" */ '../salaryManage/calculationPage/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/calculationPage/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__index" */ '../salaryManage/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/components/editPayroll',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__components__editPayroll__index" */ '../salaryManage/payroll/components/editPayroll/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/components/editPayroll/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/components/mask',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__components__mask__index" */ '../salaryManage/payroll/components/mask/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/components/mask/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/components/uploadPayroll/fileUpload',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__components__uploadPayroll__fileUpload" */ '../salaryManage/payroll/components/uploadPayroll/fileUpload.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/components/uploadPayroll/fileUpload.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/components/uploadPayroll',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__components__uploadPayroll__index" */ '../salaryManage/payroll/components/uploadPayroll/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/components/uploadPayroll/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__index" */ '../salaryManage/payroll/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollCheck/component/virtualSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollCheck__component__virtualSelect" */ '../salaryManage/payroll/payrollCheck/component/virtualSelect.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollCheck/component/virtualSelect.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollCheck',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollCheck__index" */ '../salaryManage/payroll/payrollCheck/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollCheck/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollCheck/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollCheck__utils" */ '../salaryManage/payroll/payrollCheck/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollCheck/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail/components/SendTip',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__components__SendTip__index" */ '../salaryManage/payroll/payrollDetail/components/SendTip/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/components/SendTip/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail/components/customColumn',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__components__customColumn__index" */ '../salaryManage/payroll/payrollDetail/components/customColumn/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/components/customColumn/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail/components/footer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__components__footer__index" */ '../salaryManage/payroll/payrollDetail/components/footer/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/components/footer/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail/components/mask',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__components__mask__index" */ '../salaryManage/payroll/payrollDetail/components/mask/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/components/mask/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail/components/option',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__components__option__index" */ '../salaryManage/payroll/payrollDetail/components/option/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/components/option/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail/components/qrCode',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__components__qrCode__index" */ '../salaryManage/payroll/payrollDetail/components/qrCode/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/components/qrCode/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail/components/tableCellTip',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__components__tableCellTip__index" */ '../salaryManage/payroll/payrollDetail/components/tableCellTip/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/components/tableCellTip/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail/components/tabs',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__components__tabs__index" */ '../salaryManage/payroll/payrollDetail/components/tabs/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/components/tabs/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail/components/templateConfirm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__components__templateConfirm__index" */ '../salaryManage/payroll/payrollDetail/components/templateConfirm/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/components/templateConfirm/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail/components/topBar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__components__topBar__index" */ '../salaryManage/payroll/payrollDetail/components/topBar/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/components/topBar/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollDetail__index" */ '../salaryManage/payroll/payrollDetail/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollDetail/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollParse',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollParse__index" */ '../salaryManage/payroll/payrollParse/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollParse/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollParse/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollParse__utils" */ '../salaryManage/payroll/payrollParse/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollParse/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollSetting/common',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__common" */ '../salaryManage/payroll/payrollSetting/common.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/common.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollSetting/components/header',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__header__index" */ '../salaryManage/payroll/payrollSetting/components/header/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/header/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollSetting/components/notice',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__notice__index" */ '../salaryManage/payroll/payrollSetting/components/notice/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/notice/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollSetting/components/noticeModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__noticeModal__index" */ '../salaryManage/payroll/payrollSetting/components/noticeModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/noticeModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/payroll/payrollSetting/components/payrollDetail/components/content',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__payrollDetail__components__content__index" */ '../salaryManage/payroll/payrollSetting/components/payrollDetail/components/content/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/payrollDetail/components/content/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/payroll/payrollSetting/components/payrollDetail/components/delModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__payrollDetail__components__delModal__index" */ '../salaryManage/payroll/payrollSetting/components/payrollDetail/components/delModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/payrollDetail/components/delModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/payroll/payrollSetting/components/payrollDetail/components/inputItem',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__payrollDetail__components__inputItem__index" */ '../salaryManage/payroll/payrollSetting/components/payrollDetail/components/inputItem/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/payrollDetail/components/inputItem/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/payroll/payrollSetting/components/payrollDetail/components/payrollAdd',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__payrollDetail__components__payrollAdd__index" */ '../salaryManage/payroll/payrollSetting/components/payrollDetail/components/payrollAdd/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/payrollDetail/components/payrollAdd/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/salaryManage/payroll/payrollSetting/components/payrollDetail/components/payrollEditModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__payrollDetail__components__payrollEditModal__index" */ '../salaryManage/payroll/payrollSetting/components/payrollDetail/components/payrollEditModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/payrollDetail/components/payrollEditModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollSetting/components/payrollDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__payrollDetail__index" */ '../salaryManage/payroll/payrollSetting/components/payrollDetail/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/payrollDetail/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollSetting/components/saveModel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__saveModel__index" */ '../salaryManage/payroll/payrollSetting/components/saveModel/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/saveModel/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollSetting/components/topBar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__components__topBar__index" */ '../salaryManage/payroll/payrollSetting/components/topBar/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/components/topBar/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__index" */ '../salaryManage/payroll/payrollSetting/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/payrollSetting/util',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__payrollSetting__util" */ '../salaryManage/payroll/payrollSetting/util.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/payrollSetting/util.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/payroll/util',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__payroll__util" */ '../salaryManage/payroll/util.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/payroll/util.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/changeSalary',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__changeSalary__index" */ '../salaryManage/salary/changeSalary/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/changeSalary/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/components/Forms/FormAddress',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__components__Forms__FormAddress" */ '../salaryManage/salary/components/Forms/FormAddress.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/components/Forms/FormAddress.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/components/Forms/FormIdNo',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__components__Forms__FormIdNo" */ '../salaryManage/salary/components/Forms/FormIdNo.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/components/Forms/FormIdNo.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/components/Forms',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__components__Forms__index" */ '../salaryManage/salary/components/Forms/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/components/Forms/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/components/Layout',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__components__Layout" */ '../salaryManage/salary/components/Layout.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/components/Layout.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/components/Table',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__components__Table__index" */ '../salaryManage/salary/components/Table/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/components/Table/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/components/customColumn',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__components__customColumn__index" */ '../salaryManage/salary/components/customColumn/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/components/customColumn/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/components/customHeader',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__components__customHeader__index" */ '../salaryManage/salary/components/customHeader/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/components/customHeader/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__index" */ '../salaryManage/salary/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/sendSalary',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__sendSalary__index" */ '../salaryManage/salary/sendSalary/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/sendSalary/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/stopSalary',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__stopSalary__index" */ '../salaryManage/salary/stopSalary/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/stopSalary/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/salaryManage/salary/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__salaryManage__salary__utils" */ '../salaryManage/salary/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../salaryManage/salary/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/content',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__content__index" */ '../scheduling/components/calendar/content/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/content/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/content/person',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__content__person__index" */ '../scheduling/components/calendar/content/person/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/content/person/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/scheduling/components/calendar/content/person/rightClickContent',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__content__person__rightClickContent__index" */ '../scheduling/components/calendar/content/person/rightClickContent/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/content/person/rightClickContent/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/content/shift/employeeModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__content__shift__employeeModal__index" */ '../scheduling/components/calendar/content/shift/employeeModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/content/shift/employeeModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/content/shift',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__content__shift__index" */ '../scheduling/components/calendar/content/shift/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/content/shift/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/footer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__footer__index" */ '../scheduling/components/calendar/footer/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/footer/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/footer/person',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__footer__person__index" */ '../scheduling/components/calendar/footer/person/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/footer/person/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/footer/shift',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__footer__shift__index" */ '../scheduling/components/calendar/footer/shift/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/footer/shift/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/header',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__header__index" */ '../scheduling/components/calendar/header/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/header/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/holidayCalendar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__holidayCalendar__index" */ '../scheduling/components/calendar/holidayCalendar/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/holidayCalendar/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__index" */ '../scheduling/components/calendar/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/left',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__left__index" */ '../scheduling/components/calendar/left/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/left/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/left/person',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__left__person__index" */ '../scheduling/components/calendar/left/person/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/left/person/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/left/shift',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__left__shift__index" */ '../scheduling/components/calendar/left/shift/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/left/shift/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/personAngleSchedule',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__personAngleSchedule__index" */ '../scheduling/components/calendar/personAngleSchedule/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/personAngleSchedule/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/scheduleLayout',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__scheduleLayout__index" */ '../scheduling/components/calendar/scheduleLayout/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/scheduleLayout/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/calendar/shiftAngleSchedule',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__calendar__shiftAngleSchedule__index" */ '../scheduling/components/calendar/shiftAngleSchedule/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/calendar/shiftAngleSchedule/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/header',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__header__index" */ '../scheduling/components/header/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/header/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/quickAddRestDate',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__quickAddRestDate__index" */ '../scheduling/components/quickAddRestDate/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/quickAddRestDate/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/scheduleModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__scheduleModal__index" */ '../scheduling/components/scheduleModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/scheduleModal/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/scheduleRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__scheduleRecord__index" */ '../scheduling/components/scheduleRecord/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/scheduleRecord/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/components/warnModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__components__warnModal__index" */ '../scheduling/components/warnModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/components/warnModal/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__index" */ '../scheduling/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__services" */ '../scheduling/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/services.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/scheduling/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__scheduling__utils" */ '../scheduling/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../scheduling/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/components/HistoryTip',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__components__HistoryTip__index" */ '../setting/achievements/plan/createPlan/components/HistoryTip/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/components/HistoryTip/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/components/ProcessChain',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__components__ProcessChain__index" */ '../setting/achievements/plan/createPlan/components/ProcessChain/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/components/ProcessChain/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/components/TopBar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__components__TopBar__index" */ '../setting/achievements/plan/createPlan/components/TopBar/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/components/TopBar/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__components__index" */ '../setting/achievements/plan/createPlan/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/config',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__config" */ '../setting/achievements/plan/createPlan/config.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/config.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/information/components/NewTag',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__information__components__NewTag__index" */ '../setting/achievements/plan/createPlan/information/components/NewTag/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/information/components/NewTag/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/information/components/StartPerson',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__information__components__StartPerson__index" */ '../setting/achievements/plan/createPlan/information/components/StartPerson/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/information/components/StartPerson/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/information/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__information__components__index" */ '../setting/achievements/plan/createPlan/information/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/information/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/information/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__information__components__utils" */ '../setting/achievements/plan/createPlan/information/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/information/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/information',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__information__index" */ '../setting/achievements/plan/createPlan/information/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/information/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/process/components/ChildComponent/AssessmentSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__components__ChildComponent__AssessmentSetting" */ '../setting/achievements/plan/createPlan/process/components/ChildComponent/AssessmentSetting.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/components/ChildComponent/AssessmentSetting.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/process/components/ChildComponent/ConfirmationSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__components__ChildComponent__ConfirmationSetting" */ '../setting/achievements/plan/createPlan/process/components/ChildComponent/ConfirmationSetting.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/components/ChildComponent/ConfirmationSetting.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/process/components/ChildComponent/ExpireType',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__components__ChildComponent__ExpireType" */ '../setting/achievements/plan/createPlan/process/components/ChildComponent/ExpireType.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/components/ChildComponent/ExpireType.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/process/components/ChildComponent/LayDownSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__components__ChildComponent__LayDownSetting" */ '../setting/achievements/plan/createPlan/process/components/ChildComponent/LayDownSetting.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/components/ChildComponent/LayDownSetting.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/process/components/ChildComponent/Permissions',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__components__ChildComponent__Permissions" */ '../setting/achievements/plan/createPlan/process/components/ChildComponent/Permissions.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/components/ChildComponent/Permissions.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/process/components/ChildComponent/ResultAuditSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__components__ChildComponent__ResultAuditSetting" */ '../setting/achievements/plan/createPlan/process/components/ChildComponent/ResultAuditSetting.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/components/ChildComponent/ResultAuditSetting.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/process/components/ChildComponent/StartType',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__components__ChildComponent__StartType" */ '../setting/achievements/plan/createPlan/process/components/ChildComponent/StartType.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/components/ChildComponent/StartType.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/process/components/RemindDialog',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__components__RemindDialog" */ '../setting/achievements/plan/createPlan/process/components/RemindDialog.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/components/RemindDialog.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/process/components/planBody',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__components__planBody" */ '../setting/achievements/plan/createPlan/process/components/planBody.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/components/planBody.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/plan/createPlan/process/components/planRight',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__components__planRight" */ '../setting/achievements/plan/createPlan/process/components/planRight.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/components/planRight.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/process',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__index" */ '../setting/achievements/plan/createPlan/process/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/process/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__process__injector" */ '../setting/achievements/plan/createPlan/process/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/process/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/testPlan',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__testPlan__index" */ '../setting/achievements/plan/createPlan/testPlan/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/testPlan/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/createPlan/testPlan/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__createPlan__testPlan__injector" */ '../setting/achievements/plan/createPlan/testPlan/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/createPlan/testPlan/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/plan/list',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__plan__list__index" */ '../setting/achievements/plan/list/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/plan/list/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/setup/components/TipHover',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__setup__components__TipHover" */ '../setting/achievements/setup/components/TipHover.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/setup/components/TipHover.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/setup/components/TypeConfirm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__setup__components__TypeConfirm" */ '../setting/achievements/setup/components/TypeConfirm.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/setup/components/TypeConfirm.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/setup/components/assess/assessDrawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__setup__components__assess__assessDrawer" */ '../setting/achievements/setup/components/assess/assessDrawer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/setup/components/assess/assessDrawer.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/setup/components/assess',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__setup__components__assess__index" */ '../setting/achievements/setup/components/assess/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/setup/components/assess/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/setup/components/rank',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__setup__components__rank__index" */ '../setting/achievements/setup/components/rank/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/setup/components/rank/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/setup/components/rank/rankDrawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__setup__components__rank__rankDrawer" */ '../setting/achievements/setup/components/rank/rankDrawer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/setup/components/rank/rankDrawer.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/setup/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__setup__components__utils" */ '../setting/achievements/setup/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/setup/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/setup/components/values',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__setup__components__values__index" */ '../setting/achievements/setup/components/values/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/setup/components/values/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/setup/components/values/valuesDrawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__setup__components__values__valuesDrawer" */ '../setting/achievements/setup/components/values/valuesDrawer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/setup/components/values/valuesDrawer.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/setup',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__setup__index" */ '../setting/achievements/setup/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/setup/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/template/editTemplate/components/AddOptions',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__template__editTemplate__components__AddOptions" */ '../setting/achievements/template/editTemplate/components/AddOptions.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/template/editTemplate/components/AddOptions.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/template/editTemplate/components/CardItem',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__template__editTemplate__components__CardItem" */ '../setting/achievements/template/editTemplate/components/CardItem.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/template/editTemplate/components/CardItem.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/template/editTemplate/components/LeftBar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__template__editTemplate__components__LeftBar" */ '../setting/achievements/template/editTemplate/components/LeftBar.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/template/editTemplate/components/LeftBar.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/template/editTemplate/components/MidCard',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__template__editTemplate__components__MidCard" */ '../setting/achievements/template/editTemplate/components/MidCard.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/template/editTemplate/components/MidCard.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/template/editTemplate/components/RightBar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__template__editTemplate__components__RightBar" */ '../setting/achievements/template/editTemplate/components/RightBar.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/template/editTemplate/components/RightBar.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/achievements/template/editTemplate/components/RightContent',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__template__editTemplate__components__RightContent" */ '../setting/achievements/template/editTemplate/components/RightContent.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/template/editTemplate/components/RightContent.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/template/editTemplate/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__template__editTemplate__components__utils" */ '../setting/achievements/template/editTemplate/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/template/editTemplate/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/template/editTemplate',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__template__editTemplate__index" */ '../setting/achievements/template/editTemplate/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/template/editTemplate/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/achievements/template',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__achievements__template__index" */ '../setting/achievements/template/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/achievements/template/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/approve/components/Modal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__approve__components__Modal" */ '../setting/approve/components/Modal.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/approve/components/Modal.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/approve/components/cateModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__approve__components__cateModal" */ '../setting/approve/components/cateModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/approve/components/cateModal.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/approve/components/emailModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__approve__components__emailModal" */ '../setting/approve/components/emailModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/approve/components/emailModal.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/approve/components/groupChangeModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__approve__components__groupChangeModal" */ '../setting/approve/components/groupChangeModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/approve/components/groupChangeModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/approve/components/pop',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__approve__components__pop" */ '../setting/approve/components/pop.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/approve/components/pop.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/approve/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__approve__components__utils" */ '../setting/approve/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/approve/components/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/approve/components/versionModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__approve__components__versionModal__index" */ '../setting/approve/components/versionModal/index.tsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/approve/components/versionModal/index.tsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/approve',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__approve__index" */ '../setting/approve/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/approve/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/actions',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__actions" */ '../setting/commonSetting/notification/actions.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/actions.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/components/Container',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__components__Container" */ '../setting/commonSetting/notification/components/Container.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/components/Container.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/components/EmailTable',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__components__EmailTable" */ '../setting/commonSetting/notification/components/EmailTable.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/components/EmailTable.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/components/EmailType',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__components__EmailType" */ '../setting/commonSetting/notification/components/EmailType.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/components/EmailType.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/components/FieldModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__components__FieldModal" */ '../setting/commonSetting/notification/components/FieldModal.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/components/FieldModal.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/components/IMtype',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__components__IMtype" */ '../setting/commonSetting/notification/components/IMtype.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/components/IMtype.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/components/Layout',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__components__Layout" */ '../setting/commonSetting/notification/components/Layout.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/components/Layout.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/components/MainBody',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__components__MainBody" */ '../setting/commonSetting/notification/components/MainBody.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/components/MainBody.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/components/MenuList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__components__MenuList" */ '../setting/commonSetting/notification/components/MenuList.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/components/MenuList.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/components/MokaEditor',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__components__MokaEditor" */ '../setting/commonSetting/notification/components/MokaEditor.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/components/MokaEditor.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__components__utils" */ '../setting/commonSetting/notification/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__index" */ '../setting/commonSetting/notification/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__injector" */ '../setting/commonSetting/notification/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/notification/reducer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__notification__reducer" */ '../setting/commonSetting/notification/reducer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/notification/reducer.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/print/edit/FieldSetting/FieldSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__print__edit__FieldSetting__FieldSetting" */ '../setting/commonSetting/print/edit/FieldSetting/FieldSetting.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/print/edit/FieldSetting/FieldSetting.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/print/edit/FileUpload',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__print__edit__FileUpload" */ '../setting/commonSetting/print/edit/FileUpload.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/print/edit/FileUpload.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/print/edit',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__print__edit__index" */ '../setting/commonSetting/print/edit/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/print/edit/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/print/electronicSign',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__print__electronicSign__index" */ '../setting/commonSetting/print/electronicSign/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/print/electronicSign/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/print/electronicSign/step1',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__print__electronicSign__step1__index" */ '../setting/commonSetting/print/electronicSign/step1/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/print/electronicSign/step1/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/commonSetting/print/electronicSign/step2/components/control',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__print__electronicSign__step2__components__control__index" */ '../setting/commonSetting/print/electronicSign/step2/components/control/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/print/electronicSign/step2/components/control/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/commonSetting/print/electronicSign/step2/components/template',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__print__electronicSign__step2__components__template__index" */ '../setting/commonSetting/print/electronicSign/step2/components/template/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/print/electronicSign/step2/components/template/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/print/electronicSign/step2',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__print__electronicSign__step2__index" */ '../setting/commonSetting/print/electronicSign/step2/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/print/electronicSign/step2/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/commonSetting/print',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__commonSetting__print__index" */ '../setting/commonSetting/print/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/commonSetting/print/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/components/TypeConfirm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__components__TypeConfirm" */ '../setting/components/TypeConfirm.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/components/TypeConfirm.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/components/UserDefined',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__components__UserDefined" */ '../setting/components/UserDefined.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/components/UserDefined.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__components__index" */ '../setting/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/components/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/components/trans',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__components__trans" */ '../setting/components/trans.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/components/trans.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/components/type/numLayer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__components__type__numLayer" */ '../setting/components/type/numLayer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/components/type/numLayer.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/components/type/singleSeleLayer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__components__type__singleSeleLayer" */ '../setting/components/type/singleSeleLayer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/components/type/singleSeleLayer.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/components/type/textLayer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__components__type__textLayer" */ '../setting/components/type/textLayer.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/components/type/textLayer.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__components__utils" */ '../setting/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/components/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/external-interface/Drawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__external-interface__Drawer" */ '../setting/external-interface/Drawer.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/external-interface/Drawer.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/external-interface/DrawerTitle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__external-interface__DrawerTitle" */ '../setting/external-interface/DrawerTitle.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/external-interface/DrawerTitle.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/external-interface/ExternalInterface',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__external-interface__ExternalInterface" */ '../setting/external-interface/ExternalInterface.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/external-interface/ExternalInterface.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/external-interface/FieldListModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__external-interface__FieldListModal" */ '../setting/external-interface/FieldListModal.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/external-interface/FieldListModal.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/external-interface/Header',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__external-interface__Header" */ '../setting/external-interface/Header.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/external-interface/Header.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/external-interface/components/ContentMonitor',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__external-interface__components__ContentMonitor" */ '../setting/external-interface/components/ContentMonitor.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/external-interface/components/ContentMonitor.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/external-interface/components/DataOrigin',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__external-interface__components__DataOrigin" */ '../setting/external-interface/components/DataOrigin.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/external-interface/components/DataOrigin.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/external-interface',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__external-interface__index" */ '../setting/external-interface/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/external-interface/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/external-interface/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__external-interface__services" */ '../setting/external-interface/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/external-interface/services.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/business',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__business__index" */ '../setting/holiday/business/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/business/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/components/RuleDisablingModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__components__RuleDisablingModal" */ '../setting/holiday/components/RuleDisablingModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/components/RuleDisablingModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/components/RuleList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__components__RuleList" */ '../setting/holiday/components/RuleList.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/components/RuleList.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/components/Table',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__components__Table" */ '../setting/holiday/components/Table.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/components/Table.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/AdminManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__AdminManage__index" */ '../setting/holiday/group/components/AdminManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/AdminManage/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/Amap',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__Amap__index" */ '../setting/holiday/group/components/Amap/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/Amap/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/AttendanceGPSModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__AttendanceGPSModal__index" */ '../setting/holiday/group/components/AttendanceGPSModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/AttendanceGPSModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/AttendanceInfoContainer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__AttendanceInfoContainer__index" */ '../setting/holiday/group/components/AttendanceInfoContainer/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/AttendanceInfoContainer/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/AttendanceMonthly',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__AttendanceMonthly__index" */ '../setting/holiday/group/components/AttendanceMonthly/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/AttendanceMonthly/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/AttendanceWeekly',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__AttendanceWeekly__index" */ '../setting/holiday/group/components/AttendanceWeekly/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/AttendanceWeekly/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/AttendanceWifiModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__AttendanceWifiModal__index" */ '../setting/holiday/group/components/AttendanceWifiModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/AttendanceWifiModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/BasicInfoContainer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__BasicInfoContainer__index" */ '../setting/holiday/group/components/BasicInfoContainer/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/BasicInfoContainer/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/CalendarModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__CalendarModal__index" */ '../setting/holiday/group/components/CalendarModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/CalendarModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/DepartEmployeeList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__DepartEmployeeList__index" */ '../setting/holiday/group/components/DepartEmployeeList/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/DepartEmployeeList/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/DepartNotification',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__DepartNotification__index" */ '../setting/holiday/group/components/DepartNotification/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/DepartNotification/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/DingdingSyncingModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__DingdingSyncingModal__index" */ '../setting/holiday/group/components/DingdingSyncingModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/DingdingSyncingModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/EmployeeNotification',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__EmployeeNotification__index" */ '../setting/holiday/group/components/EmployeeNotification/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/EmployeeNotification/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/ExceptionNotification',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__ExceptionNotification__index" */ '../setting/holiday/group/components/ExceptionNotification/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/ExceptionNotification/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/group/components/FlexibleAttendance/components/EarlyAttend',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__FlexibleAttendance__components__EarlyAttend__index" */ '../setting/holiday/group/components/FlexibleAttendance/components/EarlyAttend/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/FlexibleAttendance/components/EarlyAttend/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/group/components/FlexibleAttendance/components/LateAttend',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__FlexibleAttendance__components__LateAttend__index" */ '../setting/holiday/group/components/FlexibleAttendance/components/LateAttend/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/FlexibleAttendance/components/LateAttend/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/group/components/FlexibleAttendance/components/LateLeave',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__FlexibleAttendance__components__LateLeave__index" */ '../setting/holiday/group/components/FlexibleAttendance/components/LateLeave/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/FlexibleAttendance/components/LateLeave/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/group/components/FlexibleAttendance/components/Permit',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__FlexibleAttendance__components__Permit__index" */ '../setting/holiday/group/components/FlexibleAttendance/components/Permit/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/FlexibleAttendance/components/Permit/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/FlexibleAttendance/config',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__FlexibleAttendance__config" */ '../setting/holiday/group/components/FlexibleAttendance/config.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/FlexibleAttendance/config.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/FlexibleAttendance',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__FlexibleAttendance__index" */ '../setting/holiday/group/components/FlexibleAttendance/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/FlexibleAttendance/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/MessageModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__MessageModal__index" */ '../setting/holiday/group/components/MessageModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/MessageModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/MonthlyPeriodModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__MonthlyPeriodModal__index" */ '../setting/holiday/group/components/MonthlyPeriodModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/MonthlyPeriodModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/PreviewModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__PreviewModal__index" */ '../setting/holiday/group/components/PreviewModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/PreviewModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/PunchInfoContainer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__PunchInfoContainer__index" */ '../setting/holiday/group/components/PunchInfoContainer/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/PunchInfoContainer/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/ShiftModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__ShiftModal__index" */ '../setting/holiday/group/components/ShiftModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/ShiftModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/components/SwitchTime',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__components__SwitchTime__index" */ '../setting/holiday/group/components/SwitchTime/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/components/SwitchTime/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/config',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__config" */ '../setting/holiday/group/config.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/config.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/dingdingServices',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__dingdingServices" */ '../setting/holiday/group/dingdingServices.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/dingdingServices.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__index" */ '../setting/holiday/group/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/rule',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__rule__index" */ '../setting/holiday/group/rule/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/rule/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/schedule',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__schedule__index" */ '../setting/holiday/group/schedule/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/schedule/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/group/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__group__services" */ '../setting/holiday/group/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/group/services.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/holidayNotice/attendanceConfirm/components/DepartmentEmpTitle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayNotice__attendanceConfirm__components__DepartmentEmpTitle__index" */ '../setting/holiday/holidayNotice/attendanceConfirm/components/DepartmentEmpTitle/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayNotice/attendanceConfirm/components/DepartmentEmpTitle/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/holidayNotice/attendanceConfirm/components/customSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayNotice__attendanceConfirm__components__customSelect__index" */ '../setting/holiday/holidayNotice/attendanceConfirm/components/customSelect/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayNotice/attendanceConfirm/components/customSelect/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/holidayNotice/attendanceConfirm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayNotice__attendanceConfirm__index" */ '../setting/holiday/holidayNotice/attendanceConfirm/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayNotice/attendanceConfirm/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/holidayNotice/components/cancelJumpModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayNotice__components__cancelJumpModal__index" */ '../setting/holiday/holidayNotice/components/cancelJumpModal/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayNotice/components/cancelJumpModal/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/holidayNotice',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayNotice__index" */ '../setting/holiday/holidayNotice/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayNotice/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/holidayNotice/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayNotice__services" */ '../setting/holiday/holidayNotice/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayNotice/services.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/holidayNotice/teamAttendance/components/optionRow',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayNotice__teamAttendance__components__optionRow__index" */ '../setting/holiday/holidayNotice/teamAttendance/components/optionRow/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayNotice/teamAttendance/components/optionRow/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/holidayNotice/teamAttendance',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayNotice__teamAttendance__index" */ '../setting/holiday/holidayNotice/teamAttendance/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayNotice/teamAttendance/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/holidayRule/components/GrantRecord/components/Period',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayRule__components__GrantRecord__components__Period" */ '../setting/holiday/holidayRule/components/GrantRecord/components/Period.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayRule/components/GrantRecord/components/Period.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/holidayRule/components/GrantRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayRule__components__GrantRecord__index" */ '../setting/holiday/holidayRule/components/GrantRecord/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayRule/components/GrantRecord/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/holidayRule/components/GrantRecordDrawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayRule__components__GrantRecordDrawer__index" */ '../setting/holiday/holidayRule/components/GrantRecordDrawer/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayRule/components/GrantRecordDrawer/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/holidayRule',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__holidayRule__index" */ '../setting/holiday/holidayRule/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/holidayRule/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/leaveRules/components/LeaveUpdatingModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__leaveRules__components__LeaveUpdatingModal" */ '../setting/holiday/leaveRules/components/LeaveUpdatingModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/leaveRules/components/LeaveUpdatingModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/leaveRules/components/RuleModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__leaveRules__components__RuleModal" */ '../setting/holiday/leaveRules/components/RuleModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/leaveRules/components/RuleModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/leaveRules/hooks',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__leaveRules__hooks" */ '../setting/holiday/leaveRules/hooks.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/leaveRules/hooks.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/leaveRules',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__leaveRules__index" */ '../setting/holiday/leaveRules/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/leaveRules/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/map/holidays',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__map__holidays" */ '../setting/holiday/map/holidays.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/map/holidays.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/overtimeRules/components/OvertimeUpdatingModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__overtimeRules__components__OvertimeUpdatingModal" */ '../setting/holiday/overtimeRules/components/OvertimeUpdatingModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/overtimeRules/components/OvertimeUpdatingModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/overtimeRules/components/RuleModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__overtimeRules__components__RuleModal" */ '../setting/holiday/overtimeRules/components/RuleModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/overtimeRules/components/RuleModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/overtimeRules/hooks',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__overtimeRules__hooks" */ '../setting/holiday/overtimeRules/hooks.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/overtimeRules/hooks.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/overtimeRules',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__overtimeRules__index" */ '../setting/holiday/overtimeRules/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/overtimeRules/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/sendHolidayIntelligently/baseMsg',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__baseMsg__index" */ '../setting/holiday/sendHolidayIntelligently/baseMsg/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/baseMsg/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/sendHolidayIntelligently/components/HalfYearPicker',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__components__HalfYearPicker" */ '../setting/holiday/sendHolidayIntelligently/components/HalfYearPicker.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/components/HalfYearPicker.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/sendHolidayIntelligently/components/Layout',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__components__Layout" */ '../setting/holiday/sendHolidayIntelligently/components/Layout.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/components/Layout.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/sendHolidayIntelligently/components/QuarterPicker',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__components__QuarterPicker" */ '../setting/holiday/sendHolidayIntelligently/components/QuarterPicker.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/components/QuarterPicker.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/sendHolidayIntelligently/components/SectionBox',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__components__SectionBox" */ '../setting/holiday/sendHolidayIntelligently/components/SectionBox.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/components/SectionBox.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/sendHolidayIntelligently/components/TopTitle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__components__TopTitle" */ '../setting/holiday/sendHolidayIntelligently/components/TopTitle.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/components/TopTitle.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/sendHolidayIntelligently',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__index" */ '../setting/holiday/sendHolidayIntelligently/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/sendHolidayIntelligently/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__injector" */ '../setting/holiday/sendHolidayIntelligently/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/sendHolidayIntelligently/param-format',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__param-format" */ '../setting/holiday/sendHolidayIntelligently/param-format.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/param-format.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/sendHolidayIntelligently/ruleConfig/components/CalculateType',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__ruleConfig__components__CalculateType" */ '../setting/holiday/sendHolidayIntelligently/ruleConfig/components/CalculateType.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/ruleConfig/components/CalculateType.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/sendHolidayIntelligently/ruleConfig/components/ConvertMethod',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__ruleConfig__components__ConvertMethod" */ '../setting/holiday/sendHolidayIntelligently/ruleConfig/components/ConvertMethod.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/ruleConfig/components/ConvertMethod.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/sendHolidayIntelligently/ruleConfig/components/NewEmpConvert',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__ruleConfig__components__NewEmpConvert__index" */ '../setting/holiday/sendHolidayIntelligently/ruleConfig/components/NewEmpConvert/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/ruleConfig/components/NewEmpConvert/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/sendHolidayIntelligently/ruleConfig/components/NewEmpMethod',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__ruleConfig__components__NewEmpMethod__index" */ '../setting/holiday/sendHolidayIntelligently/ruleConfig/components/NewEmpMethod/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/ruleConfig/components/NewEmpMethod/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/sendHolidayIntelligently/ruleConfig/components/RoundMethod',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__ruleConfig__components__RoundMethod" */ '../setting/holiday/sendHolidayIntelligently/ruleConfig/components/RoundMethod.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/ruleConfig/components/RoundMethod.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/sendHolidayIntelligently/ruleConfig/components/ValidityDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__ruleConfig__components__ValidityDetail" */ '../setting/holiday/sendHolidayIntelligently/ruleConfig/components/ValidityDetail.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/ruleConfig/components/ValidityDetail.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/sendHolidayIntelligently/ruleConfig/components/component',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__ruleConfig__components__component" */ '../setting/holiday/sendHolidayIntelligently/ruleConfig/components/component.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/ruleConfig/components/component.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/sendHolidayIntelligently/ruleConfig',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__ruleConfig__index" */ '../setting/holiday/sendHolidayIntelligently/ruleConfig/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/ruleConfig/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/sendHolidayIntelligently/sendTest/Periods',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__sendTest__Periods" */ '../setting/holiday/sendHolidayIntelligently/sendTest/Periods.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/sendTest/Periods.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/sendHolidayIntelligently/sendTest',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__sendHolidayIntelligently__sendTest__index" */ '../setting/holiday/sendHolidayIntelligently/sendTest/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/sendHolidayIntelligently/sendTest/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/shiftManage/components/shiftForms/attendance',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__shiftManage__components__shiftForms__attendance__index" */ '../setting/holiday/shiftManage/components/shiftForms/attendance/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/shiftManage/components/shiftForms/attendance/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/shiftManage/components/shiftForms',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__shiftManage__components__shiftForms__index" */ '../setting/holiday/shiftManage/components/shiftForms/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/shiftManage/components/shiftForms/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/shiftManage/components/shiftForms/inputNumber',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__shiftManage__components__shiftForms__inputNumber__index" */ '../setting/holiday/shiftManage/components/shiftForms/inputNumber/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/shiftManage/components/shiftForms/inputNumber/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/shiftManage/components/shiftForms/restTime',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__shiftManage__components__shiftForms__restTime__index" */ '../setting/holiday/shiftManage/components/shiftForms/restTime/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/shiftManage/components/shiftForms/restTime/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/holiday/shiftManage/components/shiftForms/timeRangePicker',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__shiftManage__components__shiftForms__timeRangePicker__index" */ '../setting/holiday/shiftManage/components/shiftForms/timeRangePicker/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/shiftManage/components/shiftForms/timeRangePicker/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/shiftManage/components/shiftForms/workTime',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__shiftManage__components__shiftForms__workTime__index" */ '../setting/holiday/shiftManage/components/shiftForms/workTime/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/shiftManage/components/shiftForms/workTime/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/shiftManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__shiftManage__index" */ '../setting/holiday/shiftManage/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/shiftManage/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/shiftManage/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__shiftManage__services" */ '../setting/holiday/shiftManage/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/shiftManage/services.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/shiftManage/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__shiftManage__utils" */ '../setting/holiday/shiftManage/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/shiftManage/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/type/components/Modal/SwitchTime',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__type__components__Modal__SwitchTime" */ '../setting/holiday/type/components/Modal/SwitchTime.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/type/components/Modal/SwitchTime.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/type/components/Modal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__type__components__Modal__index" */ '../setting/holiday/type/components/Modal/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/type/components/Modal/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/type/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__type__components__index" */ '../setting/holiday/type/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/type/components/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/holiday/type',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__holiday__type__index" */ '../setting/holiday/type/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/holiday/type/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/imports/components/Comps',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__imports__components__Comps" */ '../setting/imports/components/Comps.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/imports/components/Comps.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/imports/components/EmptyTable',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__imports__components__EmptyTable" */ '../setting/imports/components/EmptyTable.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/imports/components/EmptyTable.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/imports/components/TableHead',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__imports__components__TableHead" */ '../setting/imports/components/TableHead.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/imports/components/TableHead.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/imports',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__imports__index" */ '../setting/imports/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/imports/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__index" */ '../setting/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/components/EmptyTips',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__components__EmptyTips" */ '../setting/onboarding/components/EmptyTips.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/components/EmptyTips.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/components/Layout',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__components__Layout" */ '../setting/onboarding/components/Layout.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/components/Layout.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/fieldMap/TypeModelComponent',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__fieldMap__TypeModelComponent" */ '../setting/onboarding/fieldMap/TypeModelComponent.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/fieldMap/TypeModelComponent.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/fieldMap',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__fieldMap__index" */ '../setting/onboarding/fieldMap/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/fieldMap/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/instructions/components/Instructs',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__instructions__components__Instructs" */ '../setting/onboarding/instructions/components/Instructs.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/instructions/components/Instructs.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/instructions',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__instructions__index" */ '../setting/onboarding/instructions/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/instructions/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/notification/AggregateNotifice',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__notification__AggregateNotifice" */ '../setting/onboarding/notification/AggregateNotifice.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/notification/AggregateNotifice.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/notification/EditDrawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__notification__EditDrawer" */ '../setting/onboarding/notification/EditDrawer.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/notification/EditDrawer.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/notification/PreviewModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__notification__PreviewModal" */ '../setting/onboarding/notification/PreviewModal.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/notification/PreviewModal.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/notification/SingleNotice',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__notification__SingleNotice" */ '../setting/onboarding/notification/SingleNotice.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/notification/SingleNotice.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/notification/config',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__notification__config" */ '../setting/onboarding/notification/config.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/notification/config.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/notification',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__notification__index" */ '../setting/onboarding/notification/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/notification/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/notification/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__notification__injector" */ '../setting/onboarding/notification/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/notification/injector.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/notification/state',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__notification__state" */ '../setting/onboarding/notification/state.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/notification/state.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/plan/PreviewModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__plan__PreviewModal" */ '../setting/onboarding/planSetting/plan/PreviewModal.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/plan/PreviewModal.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/plan/RadioGroup',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__plan__RadioGroup" */ '../setting/onboarding/planSetting/plan/RadioGroup.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/plan/RadioGroup.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/plan/config',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__plan__config" */ '../setting/onboarding/planSetting/plan/config.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/plan/config.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/plan',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__plan__index" */ '../setting/onboarding/planSetting/plan/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/plan/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/plan/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__plan__injector" */ '../setting/onboarding/planSetting/plan/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/plan/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/tasks/components/AllocationTime',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__tasks__components__AllocationTime" */ '../setting/onboarding/planSetting/tasks/components/AllocationTime.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/tasks/components/AllocationTime.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/tasks/components/Attachment',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__tasks__components__Attachment" */ '../setting/onboarding/planSetting/tasks/components/Attachment.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/tasks/components/Attachment.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/tasks/components/EditTasks',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__tasks__components__EditTasks" */ '../setting/onboarding/planSetting/tasks/components/EditTasks.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/tasks/components/EditTasks.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/tasks/components/FileList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__tasks__components__FileList" */ '../setting/onboarding/planSetting/tasks/components/FileList.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/tasks/components/FileList.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/tasks/components/Title',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__tasks__components__Title" */ '../setting/onboarding/planSetting/tasks/components/Title.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/tasks/components/Title.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/tasks/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__tasks__components__utils" */ '../setting/onboarding/planSetting/tasks/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/tasks/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/planSetting/tasks',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__planSetting__tasks__index" */ '../setting/onboarding/planSetting/tasks/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/planSetting/tasks/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/welcomeEnvelope/components/CreateModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__components__CreateModal__index" */ '../setting/onboarding/welcomeEnvelope/components/CreateModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/components/CreateModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/welcomeEnvelope/components/Header',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__components__Header__index" */ '../setting/onboarding/welcomeEnvelope/components/Header/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/components/Header/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/welcomeEnvelope/components/QrCodeModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__components__QrCodeModal__index" */ '../setting/onboarding/welcomeEnvelope/components/QrCodeModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/components/QrCodeModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/welcomeEnvelope/components/TemplateSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__components__TemplateSelect__index" */ '../setting/onboarding/welcomeEnvelope/components/TemplateSelect/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/components/TemplateSelect/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/welcomeEnvelope/edit',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__edit__index" */ '../setting/onboarding/welcomeEnvelope/edit/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/edit/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/welcomeEnvelope',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__index" */ '../setting/onboarding/welcomeEnvelope/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/Edit',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__Edit__index" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/Edit/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/Edit/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/MobilePreview',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__MobilePreview__index" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/MobilePreview/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/MobilePreview/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/Normal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__Normal__index" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/Normal/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/Normal/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/common',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__common" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/common.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/common.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/DragContainer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__components__DragContainer" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/DragContainer.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/DragContainer.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/DragHeaderBody',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__components__DragHeaderBody" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/DragHeaderBody.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/DragHeaderBody.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/FieldEdit',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__components__FieldEdit" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/FieldEdit.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/FieldEdit.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__components__utils" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/formLayout',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__formLayout" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/formLayout.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/formLayout.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__index" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__StuffMsg__injector" */ '../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/StuffMsg/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/components/FileList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__components__FileList" */ '../setting/onboarding/welcomeEnvelope/messageGather/components/FileList.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/components/FileList.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/components/Layout',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__components__Layout" */ '../setting/onboarding/welcomeEnvelope/messageGather/components/Layout.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/components/Layout.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/components/Mobile/components/Group',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__components__Mobile__components__Group" */ '../setting/onboarding/welcomeEnvelope/messageGather/components/Mobile/components/Group.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/components/Mobile/components/Group.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/components/Mobile',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__components__Mobile__index" */ '../setting/onboarding/welcomeEnvelope/messageGather/components/Mobile/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/components/Mobile/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/components/Switch',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__components__Switch" */ '../setting/onboarding/welcomeEnvelope/messageGather/components/Switch.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/components/Switch.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/components/Title',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__components__Title__index" */ '../setting/onboarding/welcomeEnvelope/messageGather/components/Title/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/components/Title/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/onboarding/welcomeEnvelope/messageGather/components/Uploader',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__messageGather__components__Uploader" */ '../setting/onboarding/welcomeEnvelope/messageGather/components/Uploader.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/messageGather/components/Uploader.jsx')
              .default,
        fileList: [
          {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'http://www.baidu.com/xxx.png',
          },
        ],
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/onboarding/welcomeEnvelope/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__onboarding__welcomeEnvelope__services" */ '../setting/onboarding/welcomeEnvelope/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/onboarding/welcomeEnvelope/services.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/addressManage/components/EditAddress',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__addressManage__components__EditAddress" */ '../setting/org/addressManage/components/EditAddress.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/addressManage/components/EditAddress.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/addressManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__addressManage__components__index" */ '../setting/org/addressManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/addressManage/components/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/addressManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__addressManage__index" */ '../setting/org/addressManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/addressManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/baseSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__baseSetting__index" */ '../setting/org/baseSetting/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/baseSetting/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/baseSetting/jobSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__baseSetting__jobSetting__index" */ '../setting/org/baseSetting/jobSetting/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/baseSetting/jobSetting/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/baseSetting/jobSetting/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__baseSetting__jobSetting__utils" */ '../setting/org/baseSetting/jobSetting/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/baseSetting/jobSetting/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__index" */ '../setting/org/jobManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobCateChild/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobCateChild__components__index" */ '../setting/org/jobManage/jobCateChild/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobCateChild/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobCateChild/components/rankModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobCateChild__components__rankModal" */ '../setting/org/jobManage/jobCateChild/components/rankModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobCateChild/components/rankModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobCateChild',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobCateChild__index" */ '../setting/org/jobManage/jobCateChild/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobCateChild/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobCategory/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobCategory__components__index" */ '../setting/org/jobManage/jobCategory/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobCategory/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobCategory/components/rankModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobCategory__components__rankModal" */ '../setting/org/jobManage/jobCategory/components/rankModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobCategory/components/rankModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobCategory',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobCategory__index" */ '../setting/org/jobManage/jobCategory/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobCategory/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobFamily/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobFamily__components__index" */ '../setting/org/jobManage/jobFamily/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobFamily/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobFamily/components/rankModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobFamily__components__rankModal" */ '../setting/org/jobManage/jobFamily/components/rankModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobFamily/components/rankModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobFamily',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobFamily__index" */ '../setting/org/jobManage/jobFamily/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobFamily/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobField/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobField__components__index" */ '../setting/org/jobManage/jobField/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobField/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobManage/jobField',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobManage__jobField__index" */ '../setting/org/jobManage/jobField/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobManage/jobField/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobNeedsMsg',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobNeedsMsg__index" */ '../setting/org/jobNeedsMsg/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobNeedsMsg/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/jobNeedsMsg/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__jobNeedsMsg__injector" */ '../setting/org/jobNeedsMsg/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/jobNeedsMsg/injector.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/legalCompany',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__legalCompany__index" */ '../setting/org/legalCompany/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/legalCompany/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/levelManage/components/UserModel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__levelManage__components__UserModel" */ '../setting/org/levelManage/components/UserModel.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/levelManage/components/UserModel.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/levelManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__levelManage__components__index" */ '../setting/org/levelManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/levelManage/components/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/levelManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__levelManage__index" */ '../setting/org/levelManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/levelManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/orgInfo/dutyManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__orgInfo__dutyManage__components__index" */ '../setting/org/orgInfo/dutyManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/orgInfo/dutyManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/orgInfo/dutyManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__orgInfo__dutyManage__index" */ '../setting/org/orgInfo/dutyManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/orgInfo/dutyManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/orgInfo',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__orgInfo__index" */ '../setting/org/orgInfo/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/orgInfo/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/orgInfo/jobManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__orgInfo__jobManage__components__index" */ '../setting/org/orgInfo/jobManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/orgInfo/jobManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/orgInfo/partManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__orgInfo__partManage__components__index" */ '../setting/org/orgInfo/partManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/orgInfo/partManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/orgInfo/partManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__orgInfo__partManage__index" */ '../setting/org/orgInfo/partManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/orgInfo/partManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/rank/components/LevelModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__rank__components__LevelModal__index" */ '../setting/org/rank/components/LevelModal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/rank/components/LevelModal/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/rank/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__rank__components__index" */ '../setting/org/rank/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/rank/components/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/rank/components/rankCateModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__rank__components__rankCateModal" */ '../setting/org/rank/components/rankCateModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/rank/components/rankCateModal.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/rank/components/rankModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__rank__components__rankModal" */ '../setting/org/rank/components/rankModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/rank/components/rankModal.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/org/rank',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__org__rank__index" */ '../setting/org/rank/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/org/rank/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission/Condition/Depart',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__Condition__Depart" */ '../setting/permissions/accountManage/components/EditAccountPermission/Condition/Depart.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/Condition/Depart.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission/Condition/EmployeeType',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__Condition__EmployeeType" */ '../setting/permissions/accountManage/components/EditAccountPermission/Condition/EmployeeType.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/Condition/EmployeeType.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission/Condition/WorkPlace',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__Condition__WorkPlace" */ '../setting/permissions/accountManage/components/EditAccountPermission/Condition/WorkPlace.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/Condition/WorkPlace.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission/Condition/Wrapper',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__Condition__Wrapper__index" */ '../setting/permissions/accountManage/components/EditAccountPermission/Condition/Wrapper/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/Condition/Wrapper/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission/Condition',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__Condition__index" */ '../setting/permissions/accountManage/components/EditAccountPermission/Condition/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/Condition/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission/ConfirmCancelModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__ConfirmCancelModal" */ '../setting/permissions/accountManage/components/EditAccountPermission/ConfirmCancelModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/ConfirmCancelModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission/Item',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__Item" */ '../setting/permissions/accountManage/components/EditAccountPermission/Item.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/Item.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission/ModeItem',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__ModeItem" */ '../setting/permissions/accountManage/components/EditAccountPermission/ModeItem.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/ModeItem.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission/RoleSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__RoleSelect" */ '../setting/permissions/accountManage/components/EditAccountPermission/RoleSelect.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/RoleSelect.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission/context',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__context" */ '../setting/permissions/accountManage/components/EditAccountPermission/context.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/context.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/permissions/accountManage/components/EditAccountPermission',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__EditAccountPermission__index" */ '../setting/permissions/accountManage/components/EditAccountPermission/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/EditAccountPermission/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/permissions/accountManage/components/OperConfirm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__OperConfirm" */ '../setting/permissions/accountManage/components/OperConfirm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/OperConfirm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/permissions/accountManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__index" */ '../setting/permissions/accountManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/permissions/accountManage/components/tipComponents',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__components__tipComponents" */ '../setting/permissions/accountManage/components/tipComponents.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/components/tipComponents.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/permissions/accountManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__accountManage__index" */ '../setting/permissions/accountManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/accountManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/permissions/roleManage/authorSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__roleManage__authorSetting__index" */ '../setting/permissions/roleManage/authorSetting/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/roleManage/authorSetting/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/permissions/roleManage/authorSetting/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__roleManage__authorSetting__utils" */ '../setting/permissions/roleManage/authorSetting/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/roleManage/authorSetting/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/permissions/roleManage/components/FieldDrawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__roleManage__components__FieldDrawer__index" */ '../setting/permissions/roleManage/components/FieldDrawer/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/roleManage/components/FieldDrawer/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/permissions/roleManage/components/RoleModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__roleManage__components__RoleModal" */ '../setting/permissions/roleManage/components/RoleModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/roleManage/components/RoleModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/permissions/roleManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__roleManage__components__index" */ '../setting/permissions/roleManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/roleManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/permissions/roleManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__permissions__roleManage__index" */ '../setting/permissions/roleManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/permissions/roleManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/calculationPage/calculationDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__calculationPage__calculationDetail__index" */ '../setting/salary/calculationPage/calculationDetail/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/calculationPage/calculationDetail/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/calculationPage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__calculationPage__index" */ '../setting/salary/calculationPage/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/calculationPage/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/calculationPage/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__calculationPage__utils" */ '../setting/salary/calculationPage/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/calculationPage/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/payLevels/add',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__payLevels__add__index" */ '../setting/salary/payLevels/add/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/payLevels/add/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/payLevels',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__payLevels__index" */ '../setting/salary/payLevels/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/payLevels/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/payLevels/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__payLevels__utils" */ '../setting/salary/payLevels/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/payLevels/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/plan',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__plan__index" */ '../setting/salary/plan/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/plan/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/plan/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__plan__utils" */ '../setting/salary/plan/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/plan/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/recordMessage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__recordMessage__index" */ '../setting/salary/recordMessage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/recordMessage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/standardsProject/components/AddProject',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__standardsProject__components__AddProject" */ '../setting/salary/standardsProject/components/AddProject.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/standardsProject/components/AddProject.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/standardsProject/components/CreateForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__standardsProject__components__CreateForm" */ '../setting/salary/standardsProject/components/CreateForm.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/standardsProject/components/CreateForm.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/standardsProject',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__standardsProject__index" */ '../setting/salary/standardsProject/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/standardsProject/index.jsx').default,
        params: '薪资标准项目',
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/standardsProject/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__standardsProject__utils" */ '../setting/salary/standardsProject/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/standardsProject/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/structure',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__structure__index" */ '../setting/salary/structure/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/structure/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/structure/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__structure__utils" */ '../setting/salary/structure/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/structure/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/transferType/components/ContentInModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__transferType__components__ContentInModal" */ '../setting/salary/transferType/components/ContentInModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/transferType/components/ContentInModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/transferType',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__transferType__index" */ '../setting/salary/transferType/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/transferType/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/salary/transferType/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__salary__transferType__utils" */ '../setting/salary/transferType/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/salary/transferType/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/affairManage/components/LeftMenu',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__affairManage__components__LeftMenu" */ '../setting/staff/affairManage/components/LeftMenu.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/affairManage/components/LeftMenu.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/affairManage/components/ResonEvent',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__affairManage__components__ResonEvent" */ '../setting/staff/affairManage/components/ResonEvent.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/affairManage/components/ResonEvent.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/affairManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__affairManage__components__index" */ '../setting/staff/affairManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/affairManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/affairManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__affairManage__index" */ '../setting/staff/affairManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/affairManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/autoStaffInfo',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__autoStaffInfo__index" */ '../setting/staff/autoStaffInfo/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/autoStaffInfo/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/basicSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__basicSetting__index" */ '../setting/staff/basicSetting/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/basicSetting/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/jobNumberManage/components/JobModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__jobNumberManage__components__JobModal" */ '../setting/staff/jobNumberManage/components/JobModal.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/jobNumberManage/components/JobModal.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/jobNumberManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__jobNumberManage__index" */ '../setting/staff/jobNumberManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/jobNumberManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/Default',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__Default" */ '../setting/staff/policy/components/Default.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/Default.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/DocAddModal/Attachment',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__DocAddModal__Attachment" */ '../setting/staff/policy/components/DocAddModal/Attachment.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/DocAddModal/Attachment.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/DocAddModal/FormList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__DocAddModal__FormList" */ '../setting/staff/policy/components/DocAddModal/FormList.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/DocAddModal/FormList.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/DocAddModal/Modal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__DocAddModal__Modal" */ '../setting/staff/policy/components/DocAddModal/Modal.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/DocAddModal/Modal.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/DocAddModal/ReleaseArea',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__DocAddModal__ReleaseArea" */ '../setting/staff/policy/components/DocAddModal/ReleaseArea.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/DocAddModal/ReleaseArea.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/DocAddModal/condition',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__DocAddModal__condition__index" */ '../setting/staff/policy/components/DocAddModal/condition/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/DocAddModal/condition/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/DocAddModal/conditionSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__DocAddModal__conditionSelect__index" */ '../setting/staff/policy/components/DocAddModal/conditionSelect/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/DocAddModal/conditionSelect/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/DocAddModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__DocAddModal__index" */ '../setting/staff/policy/components/DocAddModal/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/DocAddModal/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/Header',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__Header" */ '../setting/staff/policy/components/Header.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/Header.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/LeftSide',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__LeftSide" */ '../setting/staff/policy/components/LeftSide.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/LeftSide.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy/components/Table',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__components__Table" */ '../setting/staff/policy/components/Table.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/components/Table.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/policy',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__policy__index" */ '../setting/staff/policy/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/policy/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/components/IntroduceModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__IntroduceModal__index" */ '../setting/staff/staffCare/components/IntroduceModal/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/IntroduceModal/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/components/IntroduceModal/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__IntroduceModal__utils" */ '../setting/staff/staffCare/components/IntroduceModal/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/IntroduceModal/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/components/condition',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__condition__index" */ '../setting/staff/staffCare/components/condition/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/condition/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/components/conditionSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__conditionSelect__index" */ '../setting/staff/staffCare/components/conditionSelect/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/conditionSelect/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/components/createForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__createForm__index" */ '../setting/staff/staffCare/components/createForm/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/createForm/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/staff/staffCare/components/onboardCard/employeeIntroduce',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__onboardCard__employeeIntroduce" */ '../setting/staff/staffCare/components/onboardCard/employeeIntroduce.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/onboardCard/employeeIntroduce.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/components/onboardCard',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__onboardCard__index" */ '../setting/staff/staffCare/components/onboardCard/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/onboardCard/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/components/preview',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__preview__index" */ '../setting/staff/staffCare/components/preview/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/preview/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/components/receiver',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__receiver__index" */ '../setting/staff/staffCare/components/receiver/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/receiver/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/components/triggerCycle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__triggerCycle__index" */ '../setting/staff/staffCare/components/triggerCycle/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/triggerCycle/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/components/triggerDate',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__components__triggerDate__index" */ '../setting/staff/staffCare/components/triggerDate/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/components/triggerDate/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__index" */ '../setting/staff/staffCare/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffCare/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffCare__utils" */ '../setting/staff/staffCare/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffCare/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/contractManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__contractManage__components__index" */ '../setting/staff/staffInfo/contractManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/contractManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/contractManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__contractManage__index" */ '../setting/staff/staffInfo/contractManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/contractManage/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/contractTerm/components/editTerm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__contractTerm__components__editTerm" */ '../setting/staff/staffInfo/contractTerm/components/editTerm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/contractTerm/components/editTerm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/contractTerm/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__contractTerm__components__index" */ '../setting/staff/staffInfo/contractTerm/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/contractTerm/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/contractTerm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__contractTerm__index" */ '../setting/staff/staffInfo/contractTerm/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/contractTerm/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/experienceManage/components/LeftMenu',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__experienceManage__components__LeftMenu" */ '../setting/staff/staffInfo/experienceManage/components/LeftMenu.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/experienceManage/components/LeftMenu.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/experienceManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__experienceManage__components__index" */ '../setting/staff/staffInfo/experienceManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/experienceManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/experienceManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__experienceManage__index" */ '../setting/staff/staffInfo/experienceManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/experienceManage/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__index" */ '../setting/staff/staffInfo/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/officeManage/components/LeftMenu',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__officeManage__components__LeftMenu" */ '../setting/staff/staffInfo/officeManage/components/LeftMenu.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/officeManage/components/LeftMenu.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/officeManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__officeManage__components__index" */ '../setting/staff/staffInfo/officeManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/officeManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/officeManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__officeManage__index" */ '../setting/staff/staffInfo/officeManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/officeManage/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/partTimeManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__partTimeManage__index" */ '../setting/staff/staffInfo/partTimeManage/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/partTimeManage/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/recruitManage/components/LeftMenu',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__recruitManage__components__LeftMenu" */ '../setting/staff/staffInfo/recruitManage/components/LeftMenu.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/recruitManage/components/LeftMenu.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/recruitManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__recruitManage__components__index" */ '../setting/staff/staffInfo/recruitManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/recruitManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/recruitManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__recruitManage__index" */ '../setting/staff/staffInfo/recruitManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/recruitManage/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/staffInfoManage/components/LeftMenu',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__staffInfoManage__components__LeftMenu" */ '../setting/staff/staffInfo/staffInfoManage/components/LeftMenu.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/staffInfoManage/components/LeftMenu.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/staffInfoManage/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__staffInfoManage__components__index" */ '../setting/staff/staffInfo/staffInfoManage/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/staffInfoManage/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/staff/staffInfo/staffInfoManage',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__staff__staffInfo__staffInfoManage__index" */ '../setting/staff/staffInfo/staffInfoManage/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/staff/staffInfo/staffInfoManage/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/starffSetting/settingStarff/components/Content',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__starffSetting__settingStarff__components__Content" */ '../setting/starffSetting/settingStarff/components/Content.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/starffSetting/settingStarff/components/Content.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/starffSetting/settingStarff/components/Drawer',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__starffSetting__settingStarff__components__Drawer" */ '../setting/starffSetting/settingStarff/components/Drawer.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/starffSetting/settingStarff/components/Drawer.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/starffSetting/settingStarff/components/EditModel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__starffSetting__settingStarff__components__EditModel" */ '../setting/starffSetting/settingStarff/components/EditModel.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/starffSetting/settingStarff/components/EditModel.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/starffSetting/settingStarff/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__starffSetting__settingStarff__components__utils" */ '../setting/starffSetting/settingStarff/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/starffSetting/settingStarff/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/starffSetting/settingStarff',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__starffSetting__settingStarff__index" */ '../setting/starffSetting/settingStarff/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/starffSetting/settingStarff/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/starffSetting/staffPermissions',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__starffSetting__staffPermissions__index" */ '../setting/starffSetting/staffPermissions/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/starffSetting/staffPermissions/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/basic/components/UserIdModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__basic__components__UserIdModal" */ '../setting/thirdParty/basic/components/UserIdModal.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/basic/components/UserIdModal.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/basic/components/addressBookSync',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__basic__components__addressBookSync__index" */ '../setting/thirdParty/basic/components/addressBookSync/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/basic/components/addressBookSync/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/basic/components/contacts/ConfirmModal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__basic__components__contacts__ConfirmModal" */ '../setting/thirdParty/basic/components/contacts/ConfirmModal.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/basic/components/contacts/ConfirmModal.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/basic/components/contacts',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__basic__components__contacts__index" */ '../setting/thirdParty/basic/components/contacts/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/basic/components/contacts/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/basic/components/department',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__basic__components__department__index" */ '../setting/thirdParty/basic/components/department/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/basic/components/department/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/basic/components/department/services',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__basic__components__department__services" */ '../setting/thirdParty/basic/components/department/services.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/basic/components/department/services.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/basic',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__basic__index" */ '../setting/thirdParty/basic/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/basic/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/setting/thirdParty/electronicSignature/components/SignRecord/components/FilterBox',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__electronicSignature__components__SignRecord__components__FilterBox__index" */ '../setting/thirdParty/electronicSignature/components/SignRecord/components/FilterBox/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/electronicSignature/components/SignRecord/components/FilterBox/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/electronicSignature/components/SignRecord',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__electronicSignature__components__SignRecord__index" */ '../setting/thirdParty/electronicSignature/components/SignRecord/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/electronicSignature/components/SignRecord/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/electronicSignature',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__electronicSignature__index" */ '../setting/thirdParty/electronicSignature/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/electronicSignature/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/fieldMap/components/AddField',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__fieldMap__components__AddField__index" */ '../setting/thirdParty/fieldMap/components/AddField/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/fieldMap/components/AddField/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/fieldMap/components/Table',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__fieldMap__components__Table__index" */ '../setting/thirdParty/fieldMap/components/Table/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/fieldMap/components/Table/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/setting/thirdParty/fieldMap',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__setting__thirdParty__fieldMap__index" */ '../setting/thirdParty/fieldMap/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../setting/thirdParty/fieldMap/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/universal/Dimension',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__universal__Dimension__index" */ '../universal/Dimension/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../universal/Dimension/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/universal',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__universal__index" */ '../universal/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../universal/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/components/export',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__components__export__index" */ '../workflow/components/export/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/components/export/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/components/list',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__components__list" */ '../workflow/components/list.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/components/list.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/components/listDefault',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__components__listDefault" */ '../workflow/components/listDefault.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/components/listDefault.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/components/staffUtils/staffutil',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__components__staffUtils__staffutil" */ '../workflow/components/staffUtils/staffutil.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/components/staffUtils/staffutil.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/components/CopyTemplateQuitAlert/content',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__components__CopyTemplateQuitAlert__content" */ '../workflow/createFlow/components/CopyTemplateQuitAlert/content.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/components/CopyTemplateQuitAlert/content.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/components/CopyTemplateQuitAlert',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__components__CopyTemplateQuitAlert__index" */ '../workflow/createFlow/components/CopyTemplateQuitAlert/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/components/CopyTemplateQuitAlert/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/components/MessageAlert',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__components__MessageAlert__index" */ '../workflow/createFlow/components/MessageAlert/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/components/MessageAlert/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/components/TopBar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__components__TopBar__index" */ '../workflow/createFlow/components/TopBar/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/components/TopBar/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__components__index" */ '../workflow/createFlow/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/components/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__components__utils" */ '../workflow/createFlow/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/components/utils.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/ApplyStyle/ApplyStyle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__ApplyStyle__ApplyStyle" */ '../workflow/createFlow/createApproval/components/ApplyStyle/ApplyStyle.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/ApplyStyle/ApplyStyle.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/ApprovalFor/ApprovalFor',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__ApprovalFor__ApprovalFor" */ '../workflow/createFlow/createApproval/components/ApprovalFor/ApprovalFor.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/ApprovalFor/ApprovalFor.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/ApprovalFor/ApprovalForDept',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__ApprovalFor__ApprovalForDept" */ '../workflow/createFlow/createApproval/components/ApprovalFor/ApprovalForDept.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/ApprovalFor/ApprovalForDept.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/AutoSelect/AutoSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__AutoSelect__AutoSelect" */ '../workflow/createFlow/createApproval/components/AutoSelect/AutoSelect.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/AutoSelect/AutoSelect.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createApproval/components/BodyApproval',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__BodyApproval" */ '../workflow/createFlow/createApproval/components/BodyApproval.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/BodyApproval.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/CopySend/CopySelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__CopySend__CopySelect" */ '../workflow/createFlow/createApproval/components/CopySend/CopySelect.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/CopySend/CopySelect.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        '0': '抄',
        '1': '送',
        '2': '人',
        '3': '/',
        '4': '/',
        '5': 'h',
        '6': 't',
        '7': 't',
        '8': 'p',
        '9': 's',
        '10': ':',
        '11': '/',
        '12': '/',
        '13': 'w',
        '14': 'i',
        '15': 'k',
        '16': 'i',
        '17': '.',
        '18': 'm',
        '19': 'o',
        '20': 'k',
        '21': 'a',
        '22': 'h',
        '23': 'r',
        '24': '.',
        '25': 'c',
        '26': 'o',
        '27': 'm',
        '28': '/',
        '29': 'p',
        '30': 'a',
        '31': 'g',
        '32': 'e',
        '33': 's',
        '34': '/',
        '35': 'v',
        '36': 'i',
        '37': 'e',
        '38': 'w',
        '39': 'p',
        '40': 'a',
        '41': 'g',
        '42': 'e',
        '43': '.',
        '44': 'a',
        '45': 'c',
        '46': 't',
        '47': 'i',
        '48': 'o',
        '49': 'n',
        '50': '?',
        '51': 'p',
        '52': 'a',
        '53': 'g',
        '54': 'e',
        '55': 'I',
        '56': 'd',
        '57': '=',
        '58': '9',
        '59': '6',
        '60': '4',
        '61': '9',
        '62': '2',
        '63': '6',
        '64': '2',
        '65': ' ',
        '66': ' ',
        '67': '张',
        '68': '超',
        path:
          '/workflow/createFlow/createApproval/components/CopySend/CopySend',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__CopySend__CopySend" */ '../workflow/createFlow/createApproval/components/CopySend/CopySend.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/CopySend/CopySend.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/CopySend/RoleEmployeeList',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__CopySend__RoleEmployeeList" */ '../workflow/createFlow/createApproval/components/CopySend/RoleEmployeeList.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/CopySend/RoleEmployeeList.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/DesignatedPersonnel/DesignatedPersonnel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__DesignatedPersonnel__DesignatedPersonnel" */ '../workflow/createFlow/createApproval/components/DesignatedPersonnel/DesignatedPersonnel.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/DesignatedPersonnel/DesignatedPersonnel.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/DesignatedRole/DesignatedRole',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__DesignatedRole__DesignatedRole" */ '../workflow/createFlow/createApproval/components/DesignatedRole/DesignatedRole.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/DesignatedRole/DesignatedRole.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/NotificationSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__NotificationSetting" */ '../workflow/createFlow/createApproval/components/NotificationSetting.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/NotificationSetting.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createApproval/components/RemindDialog',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__RemindDialog" */ '../workflow/createFlow/createApproval/components/RemindDialog.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/RemindDialog.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/ReportSuperior/ReportSuperior',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__ReportSuperior__ReportSuperior" */ '../workflow/createFlow/createApproval/components/ReportSuperior/ReportSuperior.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/ReportSuperior/ReportSuperior.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/Responsibilities/Responsibilities',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__Responsibilities__Responsibilities" */ '../workflow/createFlow/createApproval/components/Responsibilities/Responsibilities.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/Responsibilities/Responsibilities.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createApproval/components/RightApproval',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__RightApproval" */ '../workflow/createFlow/createApproval/components/RightApproval.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/RightApproval.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/StartSetting/StartSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__StartSetting__StartSetting" */ '../workflow/createFlow/createApproval/components/StartSetting/StartSetting.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/StartSetting/StartSetting.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/createApproval/components/SuperSetting/SuperSetting',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__components__SuperSetting__SuperSetting" */ '../workflow/createFlow/createApproval/components/SuperSetting/SuperSetting.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/components/SuperSetting/SuperSetting.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createApproval/config',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__config" */ '../workflow/createFlow/createApproval/config.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/config.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createApproval',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createApproval__index" */ '../workflow/createFlow/createApproval/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createApproval/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/BatchModel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__BatchModel" */ '../workflow/createFlow/createForm/components/BatchModel.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/BatchModel.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/CustomizedModel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__CustomizedModel" */ '../workflow/createFlow/createForm/components/CustomizedModel.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/CustomizedModel.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/LeftBar',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__LeftBar" */ '../workflow/createFlow/createForm/components/LeftBar.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/LeftBar.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/LeftDetail',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__LeftDetail" */ '../workflow/createFlow/createForm/components/LeftDetail.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/LeftDetail.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/ModelItem',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__ModelItem" */ '../workflow/createFlow/createForm/components/ModelItem.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/ModelItem.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/OptionsRender',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__OptionsRender" */ '../workflow/createFlow/createForm/components/OptionsRender.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/OptionsRender.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/PhoneModel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__PhoneModel" */ '../workflow/createFlow/createForm/components/PhoneModel.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/PhoneModel.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/ReadCreate',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__ReadCreate" */ '../workflow/createFlow/createForm/components/ReadCreate.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/ReadCreate.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/RightBase',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__RightBase" */ '../workflow/createFlow/createForm/components/RightBase.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/RightBase.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/RuleForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__RuleForm" */ '../workflow/createFlow/createForm/components/RuleForm.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/RuleForm.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/UserCreate',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__UserCreate" */ '../workflow/createFlow/createForm/components/UserCreate.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/UserCreate.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__utils" */ '../workflow/createFlow/createForm/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm/components/utils_other',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__components__utils_other" */ '../workflow/createFlow/createForm/components/utils_other.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/components/utils_other.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createForm__index" */ '../workflow/createFlow/createForm/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createForm/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createInformation/components/NewTag',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createInformation__components__NewTag__index" */ '../workflow/createFlow/createInformation/components/NewTag/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createInformation/components/NewTag/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createInformation/components/StartPerson',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createInformation__components__StartPerson__index" */ '../workflow/createFlow/createInformation/components/StartPerson/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createInformation/components/StartPerson/index.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createInformation/components',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createInformation__components__index" */ '../workflow/createFlow/createInformation/components/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createInformation/components/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createInformation/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createInformation__components__utils" */ '../workflow/createFlow/createInformation/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createInformation/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/createInformation',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__createInformation__index" */ '../workflow/createFlow/createInformation/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/createInformation/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/PhoneModel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__PhoneModel" */ '../workflow/createFlow/testFlow/components/PhoneModel.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/PhoneModel.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/RightResetModel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__RightResetModel" */ '../workflow/createFlow/testFlow/components/RightResetModel.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/RightResetModel.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/ShowDemo',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__ShowDemo" */ '../workflow/createFlow/testFlow/components/ShowDemo.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/ShowDemo.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/rule_utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__rule_utils" */ '../workflow/createFlow/testFlow/components/rule_utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/rule_utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/AddressForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__AddressForm" */ '../workflow/createFlow/testFlow/components/typeForm/AddressForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/AddressForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/CascaderLevel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__CascaderLevel" */ '../workflow/createFlow/testFlow/components/typeForm/CascaderLevel.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/CascaderLevel.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/CitySelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__CitySelect" */ '../workflow/createFlow/testFlow/components/typeForm/CitySelect.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/CitySelect.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/testFlow/components/typeForm/ContractSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__ContractSelect" */ '../workflow/createFlow/testFlow/components/typeForm/ContractSelect.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/ContractSelect.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/DataOptions',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__DataOptions" */ '../workflow/createFlow/testFlow/components/typeForm/DataOptions.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/DataOptions.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/DateForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__DateForm" */ '../workflow/createFlow/testFlow/components/typeForm/DateForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/DateForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/DateLen',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__DateLen" */ '../workflow/createFlow/testFlow/components/typeForm/DateLen.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/DateLen.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/FileUpload',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__FileUpload" */ '../workflow/createFlow/testFlow/components/typeForm/FileUpload.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/FileUpload.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/HalfDayForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__HalfDayForm" */ '../workflow/createFlow/testFlow/components/typeForm/HalfDayForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/HalfDayForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/IdCardForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__IdCardForm" */ '../workflow/createFlow/testFlow/components/typeForm/IdCardForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/IdCardForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/ImgUpload',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__ImgUpload" */ '../workflow/createFlow/testFlow/components/typeForm/ImgUpload.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/ImgUpload.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/InputForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__InputForm" */ '../workflow/createFlow/testFlow/components/typeForm/InputForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/InputForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/testFlow/components/typeForm/MuSearchSelectForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__MuSearchSelectForm" */ '../workflow/createFlow/testFlow/components/typeForm/MuSearchSelectForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/MuSearchSelectForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/MuSelectForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__MuSelectForm" */ '../workflow/createFlow/testFlow/components/typeForm/MuSelectForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/MuSelectForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/testFlow/components/typeForm/MulSelectReasonForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__MulSelectReasonForm" */ '../workflow/createFlow/testFlow/components/typeForm/MulSelectReasonForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/MulSelectReasonForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/PhoneNumForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__PhoneNumForm" */ '../workflow/createFlow/testFlow/components/typeForm/PhoneNumForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/PhoneNumForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path:
          '/workflow/createFlow/testFlow/components/typeForm/SearchSelectForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__SearchSelectForm" */ '../workflow/createFlow/testFlow/components/typeForm/SearchSelectForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/SearchSelectForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/SelectAllForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__SelectAllForm" */ '../workflow/createFlow/testFlow/components/typeForm/SelectAllForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/SelectAllForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/SelectForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__SelectForm" */ '../workflow/createFlow/testFlow/components/typeForm/SelectForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/SelectForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/ShowModel',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__ShowModel" */ '../workflow/createFlow/testFlow/components/typeForm/ShowModel.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/ShowModel.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/TextAreaForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__TextAreaForm" */ '../workflow/createFlow/testFlow/components/typeForm/TextAreaForm.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/TextAreaForm.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/TimeLen',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__TimeLen" */ '../workflow/createFlow/testFlow/components/typeForm/TimeLen.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/TimeLen.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm/TimeSelect',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__TimeSelect" */ '../workflow/createFlow/testFlow/components/typeForm/TimeSelect.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/TimeSelect.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/typeForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__typeForm__index" */ '../workflow/createFlow/testFlow/components/typeForm/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/typeForm/index.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow/components/utils',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__components__utils" */ '../workflow/createFlow/testFlow/components/utils.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/components/utils.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/createFlow/testFlow',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__createFlow__testFlow__index" */ '../workflow/createFlow/testFlow/index.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/createFlow/testFlow/index.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__index" */ '../workflow/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/staffFlow/config',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__staffFlow__config" */ '../workflow/staffFlow/config.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/staffFlow/config.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/staffFlow/flowForm/components/AddTripBtn',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__staffFlow__flowForm__components__AddTripBtn" */ '../workflow/staffFlow/flowForm/components/AddTripBtn.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/staffFlow/flowForm/components/AddTripBtn.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/staffFlow/flowForm/components/FormEle',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__staffFlow__flowForm__components__FormEle" */ '../workflow/staffFlow/flowForm/components/FormEle.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/staffFlow/flowForm/components/FormEle.jsx')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/staffFlow/flowForm/components/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__staffFlow__flowForm__components__injector" */ '../workflow/staffFlow/flowForm/components/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/staffFlow/flowForm/components/injector.js')
              .default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/staffFlow/flowForm/formDemo',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__staffFlow__flowForm__formDemo" */ '../workflow/staffFlow/flowForm/formDemo.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/staffFlow/flowForm/formDemo.jsx').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/staffFlow/flowForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__staffFlow__flowForm__index" */ '../workflow/staffFlow/flowForm/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/staffFlow/flowForm/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/staffFlow',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__staffFlow__index" */ '../workflow/staffFlow/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/staffFlow/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/staffFlow/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__staffFlow__injector" */ '../workflow/staffFlow/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/staffFlow/injector.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/staffFlow/staffForm',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__staffFlow__staffForm__index" */ '../workflow/staffFlow/staffForm/index.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/staffFlow/staffForm/index.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/workflow/staffFlow/staffForm/injector',
        exact: true,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__workflow__staffFlow__staffForm__injector" */ '../workflow/staffFlow/staffForm/injector.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../workflow/staffFlow/staffForm/injector.js').default,
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/staffManage',
        exact: false,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/_layout.jsx'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../staffManage/_layout.jsx').default,
        routes: [
          {
            path: '/staffManage/contract',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/contract/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/contract/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/departure',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/departure/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/departure/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/profile',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/profile/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/profile/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/profile/:staffType',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/profile/$staffType/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/profile/$staffType/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/FormEle',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/FormEle.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/FormEle.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/FormEleShow',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/FormEleShow.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/FormEleShow.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/OperRecord',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/OperRecord.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/OperRecord.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/Salary/FormGroup',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/Salary/FormGroup.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/Salary/FormGroup.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/Salary/HistoryCard',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/Salary/HistoryCard.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/Salary/HistoryCard.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffDetail/components/Salary/SalaryComposition',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/Salary/SalaryComposition.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/Salary/SalaryComposition.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/Salary/SalaryItem',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/Salary/SalaryItem.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/Salary/SalaryItem.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/Salary/SalaryProject',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/Salary/SalaryProject.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/Salary/SalaryProject.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffDetail/components/Salary/SalarySendStopModal',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/Salary/SalarySendStopModal.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/Salary/SalarySendStopModal.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/Salary/handleData',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/Salary/handleData.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/Salary/handleData.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/Salary/handleSubmit',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/Salary/handleSubmit.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/Salary/handleSubmit.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/Salary',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/Salary/index.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/Salary/index.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/StaffAnchor',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/StaffAnchor.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/StaffAnchor.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/adjustCompanyAge',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/adjustCompanyAge/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/adjustCompanyAge/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffDetail/components/adjustCompanyAge/transMap',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/adjustCompanyAge/transMap.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/adjustCompanyAge/transMap.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/adjustDay/ComfirmBox',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/adjustDay/ComfirmBox.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/adjustDay/ComfirmBox.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/adjustDay',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/adjustDay/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/adjustDay/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/adjustDay/utils',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/adjustDay/utils.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/adjustDay/utils.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffDetail/components/attendance/components/Calender',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/attendance/components/Calender.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/attendance/components/Calender.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffDetail/components/attendance/components/Edit',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/attendance/components/Edit.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/attendance/components/Edit.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffDetail/components/attendance/components/ReadOnly',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/attendance/components/ReadOnly.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/attendance/components/ReadOnly.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffDetail/components/attendance/components/history',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/attendance/components/history.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/attendance/components/history.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/attendance',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/attendance/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/attendance/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/flowDetail',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/flowDetail/index.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/flowDetail/index.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/headerInfo',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/headerInfo/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/headerInfo/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/resumeInfo/List',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/resumeInfo/List.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/resumeInfo/List.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/resumeInfo/ResumeForm',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/resumeInfo/ResumeForm.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/resumeInfo/ResumeForm.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/resumeInfo',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/resumeInfo/index.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/resumeInfo/index.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/staffInfo/ChangeDetail',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/staffInfo/ChangeDetail.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/staffInfo/ChangeDetail.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/staffInfo/Form',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/staffInfo/Form.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/staffInfo/Form.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/staffInfo/Lib',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/staffInfo/Lib.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/staffInfo/Lib.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/staffInfo/StaffTitle',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/staffInfo/StaffTitle.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/staffInfo/StaffTitle.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/components/staffInfo',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/components/staffInfo/index.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/components/staffInfo/index.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/index.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/index.jsx').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffDetail/injector',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffDetail/injector.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffDetail/injector.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList/:staffType/components/FormEle',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/FormEle.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/FormEle.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffList/:staffType/components/autoRegularDrawer/autoRegularModal',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/autoRegularDrawer/autoRegularModal/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/autoRegularDrawer/autoRegularModal/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffList/:staffType/components/autoRegularDrawer',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/autoRegularDrawer/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/autoRegularDrawer/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffList/:staffType/components/autoRegularDrawer/previewModal',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/autoRegularDrawer/previewModal/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/autoRegularDrawer/previewModal/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList/:staffType/components/banner',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/banner/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/banner/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList/:staffType/components/batchModify',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/batchModify/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/batchModify/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList/:staffType/components/customColumn',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/customColumn/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/customColumn/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffList/:staffType/components/customColumn/injector',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/customColumn/injector.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/customColumn/injector.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffList/:staffType/components/customColumn/utils',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/customColumn/utils.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/customColumn/utils.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList/:staffType/components/excelEdit',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/excelEdit/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/excelEdit/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffList/:staffType/components/exportModal/exportModal',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/exportModal/exportModal.jsx'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/exportModal/exportModal.jsx')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList/:staffType/components/exportStaff',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/exportStaff/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/exportStaff/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList/:staffType/components/filterBox',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/filterBox/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/filterBox/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList/:staffType/components/staffTable',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/staffTable/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/staffTable/index.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path:
              '/staffManage/staffList/:staffType/components/staffTable/injector',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/components/staffTable/injector.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/components/staffTable/injector.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList/:staffType',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/staffManage/staffList/:staffType/newService',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__staffManage___layout" */ '../staffManage/staffList/$staffType/newService.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../staffManage/staffList/$staffType/newService.js')
                  .default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            component: () =>
              React.createElement(
                require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
        ],
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        path: '/user',
        exact: false,
        component: __IS_BROWSER
          ? dynamic({
              loader: () =>
                import(/* webpackChunkName: "p__user___layout" */ '../user/_layout.js'),
              loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                .default,
            })
          : require('../user/_layout.js').default,
        routes: [
          {
            path: '/user/ddLogin',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__user___layout" */ '../user/ddLogin/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../user/ddLogin/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/user',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__user___layout" */ '../user/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../user/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/user/login/components/loginContent',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__user___layout" */ '../user/login/components/loginContent.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../user/login/components/loginContent.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/user/login/components/sendMail',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__user___layout" */ '../user/login/components/sendMail.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../user/login/components/sendMail.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/user/login',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__user___layout" */ '../user/login/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../user/login/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/user/setPassword',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__user___layout" */ '../user/setPassword/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../user/setPassword/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            path: '/user/wxLogin',
            exact: true,
            component: __IS_BROWSER
              ? dynamic({
                  loader: () =>
                    import(/* webpackChunkName: "p__user___layout" */ '../user/wxLogin/index.js'),
                  loading: require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/src/components/loading')
                    .default,
                })
              : require('../user/wxLogin/index.js').default,
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
          {
            component: () =>
              React.createElement(
                require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
            _title: 'Moka HCM',
            _title_default: 'Moka HCM',
          },
        ],
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: 'Moka HCM',
        _title_default: 'Moka HCM',
      },
    ],
    title: 'Moka HCM',
    Routes: [require('../../utils/AuthorizedRoute.js').default],
    _title: 'Moka HCM',
    _title_default: 'Moka HCM',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/hanqizheng/Documents/Moka/hcm-platform-fe/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: 'Moka HCM',
    _title_default: 'Moka HCM',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
