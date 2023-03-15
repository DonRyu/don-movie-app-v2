import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// no lazy loading for auth pages to avoid flickering
const AuthLayout = React.lazy(() => import('@app/components/layouts/AuthLayout/AuthLayout'));
import LoginPage from '@app/pages/LoginPage';
import SignUpPage from '@app/pages/SignUpPage';
import ForgotPasswordPage from '@app/pages/ForgotPasswordPage';
import NewPasswordPage from '@app/pages/NewPasswordPage';

import MainLayout from '@app/components/layouts/main/MainLayout/MainLayout';
import ProfileLayout from '@app/components/profile/ProfileLayout';
import RequireAuth from '@app/components/router/RequireAuth';
import { withLoading } from '@app/hocs/withLoading.hoc';
import TopMoiveListPage from '@app/pages/DashboardPages/TopMoiveList';

const ChartsPage = React.lazy(() => import('@app/pages/ChartsPage'));
const ServerErrorPage = React.lazy(() => import('@app/pages/ServerErrorPage'));
const Error404Page = React.lazy(() => import('@app/pages/Error404Page'));
const AdvancedFormsPage = React.lazy(() => import('@app/pages/AdvancedFormsPage'));
const PersonalInfoPage = React.lazy(() => import('@app/pages/PersonalInfoPage'));
const NotificationsPage = React.lazy(() => import('@app/pages/NotificationsPage'));
const PaymentsPage = React.lazy(() => import('@app/pages/PaymentsPage'));

export const NFT_DASHBOARD_PATH = '/';
export const MEDICAL_DASHBOARD_PATH = '/medical-dashboard';

const TopMoiveList = withLoading(TopMoiveListPage);
const AdvancedForm = withLoading(AdvancedFormsPage);
const Charts = withLoading(ChartsPage);

const ServerError = withLoading(ServerErrorPage);
const Error404 = withLoading(Error404Page);

// Profile
const PersonalInfo = withLoading(PersonalInfoPage);
const Notifications = withLoading(NotificationsPage);
const Payments = withLoading(PaymentsPage);
const AuthLayoutFallback = withLoading(AuthLayout);

export const AppRouter: React.FC = () => {
  // const protectedLayout = (
  //   <RequireAuth>
  //     <MainLayout />
  //   </RequireAuth>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={NFT_DASHBOARD_PATH} element={ <MainLayout />}>
          <Route index element={<TopMoiveList />} />
          <Route path="forms">
            <Route path="advanced-forms" element={<AdvancedForm />} />
          </Route>
          <Route path="charts" element={<Charts />} />
          <Route path="server-error" element={<ServerError />} />
          <Route path="404" element={<Error404 />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayoutFallback />}>
          <Route path="login" element={<LoginPage />} />ㅌ
          <Route path="sign-up" element={<SignUpPage />} />
          {/* <Route
            path="lock"
            element={
              <RequireAuth>
                <LockPage />
              </RequireAuth>
            }
          /> */}
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="new-password" element={<NewPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
