import { createBrowserRouter } from 'react-router-dom';
import PageOutlet from '@components/PageOutlet/PageOutlet';
import MainPage from '@pages/home/MainPage';
import LoginPage from '@pages/login/LoginPage';
import { AddUserInfoPage } from '@pages/signup';
import { MyPage, MyInfoEditPage } from '@pages/my';
import { CommunityPage, CommunityCreatePage, CommunityEditPage } from '@pages/community';
import { PostPage, PostCreatePage, PostDetailPage, PostEditPage } from '@pages/community/[communityId]/post';
import { AdminPage, CommunitySearchPage, MemberListPage } from '@pages/admin';
import LoadingPage from '@pages/login/LoadingPage';
import PrivateRoute from './PrivateRoute';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <PageOutlet />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'login/loading',
        element: <LoadingPage />,
      },
      {
        path: 'signup/add',
        element: <AddUserInfoPage />,
      },
      {
        path: 'my',
        element: <MyPage />,
      },
      {
        path: 'my/edit',
        element: <MyInfoEditPage />,
      },
      {
        path: 'community/create',
        element: <CommunityCreatePage />,
      },
      {
        path: 'community/:communityId',
        element: <CommunityPage />,
      },
      {
        path: 'community/:communityId/edit',
        element: <CommunityEditPage />,
      },
      {
        path: 'community/:communityId/post',
        element: <PostPage />,
      },
      {
        path: 'community/:communityId/post/create',
        element: <PostCreatePage />,
      },
      {
        path: 'community/:communityId/post/:postId',
        element: <PostDetailPage />,
      },
      {
        path: 'community/:communityId/post/:postId/edit',
        element: <PostEditPage />,
      },
      {
        path: 'admin',
        element: (
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'admin/member',
        element: (
          <PrivateRoute>
            <MemberListPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'admin/community',
        element: (
          <PrivateRoute>
            <CommunitySearchPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routers;
